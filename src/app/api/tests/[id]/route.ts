import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, FirestoreError } from "firebase/firestore";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Based on the screenshot, it appears tests/cambridge13_ar_test1 is a collection
    // that contains documents like answers, passages, etc.
    const testCollectionRef = collection(db, "tests", id);
    try {
      console.log(`Attempting to fetch documents for test ID: ${id}`);
      // Get all documents within this test collection
      const querySnapshot = await getDocs(query(testCollectionRef));

      if (querySnapshot.empty) {
        console.log(`No documents found for test ID: ${id}`);
        return NextResponse.json(
          { error: `Test with ID ${id} has no data` },
          { status: 404 }
        );
      }

      console.log(`Found ${querySnapshot.size} documents for test ID: ${id}`);

      // Compile the test data from all documents
      const testData: Record<string, any> = {};

      querySnapshot.forEach((doc) => {
        // Each document will be stored using its ID as the key
        // (e.g., "answers", "passages", etc.)
        const docId = doc.id;
        const docData = doc.data();
        console.log(`Processing document: ${docId}`);
        testData[docId] = docData;
      });

      return NextResponse.json(testData);
    } catch (error) {
      console.error(`Error fetching collection for test ID ${id}:`, error);

      // Check if error is due to collection not existing      console.log('Attempting to use JSON files as fallback');

      // Try to use JSON files as a fallback
      try {
        // Construct path to the JSON file
        const jsonPath = path.join(
          process.cwd(),
          "src",
          "data",
          "json",
          `${id}.json`
        );

        // Check if file exists
        if (fs.existsSync(jsonPath)) {
          console.log(`Found JSON file for ${id} at ${jsonPath}`);

          // Read and parse the JSON file
          const fileContent = fs.readFileSync(jsonPath, "utf8");
          const jsonData = JSON.parse(fileContent);

          return NextResponse.json(jsonData);
        } else {
          console.log(`JSON file not found at ${jsonPath}`);

          // Try to use AllTests as a secondary fallback
          try {
            const { AllTests } = require("@/data/tests");
            if (AllTests && AllTests[id]) {
              console.log(`Found test ${id} in AllTests fallback`);
              return NextResponse.json(AllTests[id]);
            }
          } catch (testsError) {
            console.error("Fallback to AllTests failed:", testsError);
          }
        }
      } catch (fallbackError) {
        console.error("Fallback mechanism failed:", fallbackError);
      }

      return NextResponse.json(
        { error: `Test with ID ${id} not found or inaccessible` },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error accessing Firebase:", error);

    // Provide detailed error for debugging
    const errorDetails =
      error instanceof Error
        ? { message: error.message, stack: error.stack }
        : String(error);

    console.log("Full error details:", errorDetails);

    return NextResponse.json(
      { error: "Failed to fetch test data", details: errorDetails },
      { status: 500 }
    );
  }
}
