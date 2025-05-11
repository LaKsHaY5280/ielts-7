import { db } from "./firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { TestContent, TestMetadata } from "./types";

interface FetchedTest {
  id: string;
  year: string;
  testNumber: number;
  title: string;
  test: string;     // Audio URL for listening tests
  questions: string;
  answers: Record<string, string> | null;
}

/**
 * Fetch listening tests from Firebase following the collection structure:
 * Collection: cambridge_[year]_listening (e.g., cambridge_19_listening)
 * Document: Single document containing all tests for that year
 * Format: {
 *   test_1: "audio_url",
 *   question_1: "HTML content",
 *   answer_1: { "1": "answer", "2": "answer", ... }
 * }
 */
export async function fetchListeningTests(): Promise<FetchedTest[]> {
  try {
    const years = ["19", "18", "17", "16", "15", "14", "13"];
    const allTests: FetchedTest[] = [];
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
            const answerKey = `answer_${i}`;
            
            if (data[testKey] && data[questionKey]) {
              allTests.push({
                id: doc.id,
                year,
                testNumber: i,
                title: `Cambridge ${year} Listening - Test ${i}`,
                test: data[testKey],
                questions: data[questionKey],
                answers: data[answerKey] || null, // Include answers, default to null if not present
              });
            }
          }
        }
      } catch (innerErr) {
        console.error(`Error fetching ${collectionId}:`, innerErr);
        // Continue with the next year if one fails
      }
    }

    return allTests.sort((a, b) => {
      if (a.year !== b.year) {
        return parseInt(b.year) - parseInt(a.year);
      }
      return a.testNumber - b.testNumber;
    });
  } catch (err) {
    console.error("Error fetching listening tests:", err);
    throw err;
  }
}

/**
 * Fetch a specific listening test by ID (e.g., cambridge19_ls_test1)
 */
export async function fetchListeningTest(id: string): Promise<TestContent | null> {
  try {
    // Parse the test ID to extract year and test number
    const match = id.match(/cambridge(\d+)_ls_test(\d+)/);
    if (!match) return null;
    
    const year = match[1];
    const testNum = parseInt(match[2]);
    
    const collectionId = `cambridge_${year}_listening`;
    const querySnapshot = await getDocs(collection(db, collectionId));
    
    if (querySnapshot.empty) {
      console.error(`No documents found in ${collectionId}`);
      return null;
    }
    
    // Get the first document, assuming one document per collection
    const docData = querySnapshot.docs[0].data();
    
    // Get test properties using the keys
    const testKey = `test_${testNum}`;
    const questionKey = `question_${testNum}`;
    const answerKey = `answer_${testNum}`;
    
    if (!docData[testKey] || !docData[questionKey]) {
      console.error(`Test ${testNum} not found in year ${year}`);
      return null;
    }
    
    // Return in the format expected by the TestContent interface
    return {
      passages: docData[testKey], // Audio URL for listening tests
      questions: docData[questionKey],
      answers: docData[answerKey] || {},
    };
    
  } catch (err) {
    console.error(`Error fetching listening test ${id}:`, err);
    return null;
  }
}

/**
 * Convert fetched tests to TestMetadata format for usage in UI components
 */
export function convertToTestMetadata(tests: FetchedTest[]): TestMetadata[] {
  return tests.map(test => ({
    id: `cambridge${test.year}_ls_test${test.testNumber}`,
    year: test.year,
    testNumber: test.testNumber,
    title: test.title,
    difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)], // Random difficulty for now
    estimatedTime: "40 min",
    completions: Math.floor(Math.random() * 3000) + 1000, // Random completion count for now
  }));
}
