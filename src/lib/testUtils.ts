import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { TestMetadata } from "@/lib/types";

/**
 * Fetch all listening tests from Firebase
 * This function retrieves all listening tests from Cambridge years 13-19
 */
export async function fetchListeningTests(): Promise<TestMetadata[]> {
  const years = ["19", "18", "17", "16", "15", "14", "13"];
  const allTests: TestMetadata[] = [];
  const type = "listening";

  for (const year of years) {
    const collectionId = `cambridge_${year}_${type}`;
    try {
      const querySnapshot = await getDocs(collection(db, collectionId));

      if (!querySnapshot.empty) {
        // We only need one document per collection since all tests are in one document
        const doc = querySnapshot.docs[0];
        const data = doc.data();

        for (let i = 1; i <= 4; i++) {
          const testKey = `test_${i}`;
          const questionKey = `question_${i}`;

          if (data[testKey] && data[questionKey]) {
            allTests.push({
              id: `cambridge${year}_ls_test${i}`, // Format ID to match expected format
              year,
              testNumber: i,
              title: `Cambridge ${year} Listening - Test ${i}`,
              difficulty: i % 2 === 0 ? "Medium" : "Hard", // Just a placeholder difficulty
              estimatedTime: "40 min",
              // You can add other metadata as needed
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching ${collectionId}:`, error);
      // Continue with the next year if one fails
    }
  }

  // Sort tests by year (descending) and then by test number (ascending)
  return allTests.sort((a, b) => {
    if (a.year !== b.year) {
      return parseInt(b.year) - parseInt(a.year);
    }
    return a.testNumber - b.testNumber;
  });
}

/**
 * Generate a Firebase collection ID for a listening test based on year
 */
export function getListeningCollectionId(year: string): string {
  return `cambridge_${year}_listening`;
}
