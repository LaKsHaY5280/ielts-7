import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound } from "next/navigation";
import { TestContent } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// Get test data directly without API for server component
async function getTestData(id: string): Promise<TestContent> {
  try {
    // For listening tests, fetch from Firebase
    if (id.includes("_ls_") || id.includes("_listening_")) {
      // Parse the Cambridge book year and test number from the id
      const idParts = id.split("_");
      let year = "";
      let testNumber = "";

      // Extract year from cambridge{year} pattern
      const cambridgeMatch = idParts.find((part) =>
        part.startsWith("cambridge")
      );
      if (cambridgeMatch) {
        year = cambridgeMatch.replace("cambridge", "");
      }

      // Extract test number from test{number} pattern
      const testMatch = idParts.find((part) => part.startsWith("test"));
      if (testMatch) {
        testNumber = testMatch.replace("test", "");
      }

      if (!year || !testNumber) {
        throw new Error(`Invalid listening test id format: ${id}`);
      }

      // Fetch the listening test from Firebase
      const type = "listening";
      const collectionId = `cambridge_${year}_${type}`;
      const querySnapshot = await getDocs(collection(db, collectionId));

      if (querySnapshot.empty) {
        throw new Error(`No listening tests found for Cambridge ${year}`);
      }

      // We only need one document per collection since all tests are in one document
      const doc = querySnapshot.docs[0];
      const data = doc.data();

      const testKey = `test_${testNumber}`;
      const questionKey = `question_${testNumber}`;
      const answerKey = `answer_${testNumber}`;

      if (!data[testKey] || !data[questionKey]) {
        throw new Error(
          `Test ${testNumber} not found in Cambridge ${year} listening tests`
        );
      }

      // Convert to TestContent format
      return {
        passages: data[testKey], // Audio URL for listening tests
        questions: data[questionKey],
        answers: data[answerKey] || {},
      };
    } // For other test types, load dynamically using the test registry
    const { getTestById } = await import("@/data/tests/testRegistry");

    try {
      // Get test with dynamic import - will only load the required test
      return await getTestById(id);
    } catch (error) {
      throw new Error(
        `Test data for ${id} not found: ${(error as Error).message}`
      );
    }
  } catch (error) {
    console.error(`Failed to get test data for ${id}:`, error);
    throw error;
  }
}

// Format test type to display the full name
function formatTestType(type: string): string {
  const typeMap: Record<string, string> = {
    general_reading: "General Reading",
    academic_reading: "Academic Reading",
    listening: "Listening",
  };

  return typeMap[type] || type.replace(/_/g, " ");
}

// Format test ID to a proper title with expanded abbreviations
function formatTestName(id: string): string {
  // Replace abbreviations with full names
  let formattedName = id
    .replace(/_gr_/g, " General Reading - ")
    .replace(/_ar_/g, " Academic Reading - ")
    .replace(/_ls_/g, " Listening - ")
    .replace(/cambridge/g, "Cambridge ");

  // Capitalize each word
  formattedName = formattedName.replace(
    /(\w)(\w*)/g,
    (g0, g1, g2) => g1.toUpperCase() + g2
  );

  return formattedName;
}

// Format answer text for display, handling special cases
function formatAnswer(answer: any): string {
  // Handle null, undefined, or empty values
  if (answer === null || answer === undefined) return "";
  
  // Convert numbers to strings
  if (typeof answer === 'number') {
    return answer.toString();
  }
  
  // For arrays (multiple correct options)
  if (Array.isArray(answer)) {
    return answer.map(item => formatAnswer(item)).join(" / ");
  }
  
  // Ensure answer is treated as a string from this point on
  const answerStr = String(answer);
  if (!answerStr) return "";
  
  // Handle multiple acceptable answers separated by OR or slash
  if (answerStr.includes(" OR ") || answerStr.includes("/")) {
    return answerStr.replace(" OR ", " / ");
  }
  
  // Handle answers that should be all caps (usually letters for MCQs)
  if (/^[A-Z\s]+$/.test(answerStr) && answerStr.length <= 3) {
    return answerStr;
  }
  
  // Handle answers with commas (which might be multiple acceptable answers)
  if (answerStr.includes(",")) {
    return answerStr.split(",").map(a => a.trim()).join(" / ");
  }
  
  // For longer answers, ensure proper capitalization
  if (answerStr.length > 0 && !/^\d+(\.\d+)?$/.test(answerStr)) {
    return answerStr.charAt(0).toUpperCase() + answerStr.slice(1).toLowerCase();
  }
  
  return answerStr;
}

// Format the answers display
function AnswersDisplay({ answers, testType }: { answers?: Record<number, string>, testType?: string }) {
  if (!answers) {
    return <p>No answers available for this test.</p>;
  }

  // Group answers by sections (approximately)
  const groupedAnswers: Record<string, Record<number, string>> = {};

  Object.entries(answers).forEach(([question, answer]) => {
    const questionNum = parseInt(question);
    let section = "Section 1";

    // Different section grouping for listening vs reading tests
    if (testType === "listening") {
      // Listening tests typically have 4 sections with 10 questions each
      if (questionNum > 10 && questionNum <= 20) {
        section = "Section 2";
      } else if (questionNum > 20 && questionNum <= 30) {
        section = "Section 3";
      } else if (questionNum > 30) {
        section = "Section 4";
      }
    } else {
      // Reading tests typically have 3 sections
      if (questionNum > 14 && questionNum <= 27) {
        section = "Section 2";
      } else if (questionNum > 27) {
        section = "Section 3";
      }
    }

    if (!groupedAnswers[section]) {
      groupedAnswers[section] = {};
    }
    groupedAnswers[section][questionNum] = answer;
  });

  return (
    <div className="space-y-6">
      {Object.entries(groupedAnswers).map(([section, sectionAnswers]) => (
        <div key={section} className="bg-white rounded-lg shadow-sm border p-5">
          <h3 className="text-lg font-medium mb-3">{section}</h3>          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Object.entries(sectionAnswers)
              .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
              .map(([question, answer]) => (
                <div
                  key={question}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded border"
                >                
                  <span className="font-medium mr-2">{question}:</span>
                  <span className="font-mono text-sm md:text-base break-words max-w-[60%] text-right">{formatAnswer(answer)}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Main component with properly typed params
export default async function TestPage(params: {
  params: Promise<{ id: string; type: string }>;
}) {
  try {
    // Await params to access properties
    const { id, type } = await params.params;

    // Get the test data directly
    const testData = await getTestData(id);

    // Format the test name for display with expanded abbreviations
    const testName = formatTestName(id);

    // Get the full test type name
    const testTypeFull = formatTestType(type);
    // Special layout for listening tests
    if (type === "listening") {
      return (
        <div className="container mx-auto pt-20 pb-8 px-4 md:px-8 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
          {/* Page header with back button */}
          <div className="bg-white/80 backdrop-blur-sm z-10 pb-4 mb-6 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-3">
                <Link href={`/`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </Button>
                </Link>
                <h1 className="text-2xl font-bold">{testName}</h1>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Audio player for listening test */}
            <div className="audio-player-container mb-6">
              <audio controls className="w-full">
                <source src={testData.passages as string} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="w-full p-4 relative">
              <div className="h-full rounded-xl bg-white shadow-lg p-6 overflow-auto max-h-[600px]">
                {/* Questions for listening test */}
                <div
                  className="questions-container"
                  dangerouslySetInnerHTML={{
                    __html: testData.questions as string,
                  }}
                ></div>              </div>
            </div>

            {/* Answer section for listening test */}
            <div className="mt-10 w-full p-4 relative">
              <Tabs defaultValue="hidden" className="w-full">
                <TabsList className="mb-4 w-full flex justify-center">
                  <TabsTrigger value="hidden" className="px-8">
                    Hide Answers
                  </TabsTrigger>
                  <TabsTrigger value="answers" className="px-8">
                    Show Answers
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="answers">
                  <div className="p-5 bg-white rounded-lg shadow-sm border">
                    <h2 className="text-xl font-medium mb-6">Answer Key</h2>
                    <AnswersDisplay answers={testData.answers} testType="listening" />
                  </div>
                </TabsContent>
                
                <TabsContent value="hidden">
                  <div className="text-center p-5">
                    <p className="text-gray-500">Complete the test before checking answers</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto pt-20 pb-8 px-4 md:px-8">
        {/* Page header with back button */}
        <div className="bg-white/80 backdrop-blur-sm z-10 pb-4 mb-6 border-b">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <Link href={`/`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">{testName}</h1>
            </div>
          </div>
        </div>

        {/* Mobile view - tabbed interface */}
        <div className="md:hidden w-full">
          <Tabs defaultValue="passages" className="w-full">
            <TabsList className="mb-4 w-full bg-background">
              <TabsTrigger value="passages" className="flex-1">
                Passages
              </TabsTrigger>
              <TabsTrigger value="questions" className="flex-1">
                Questions
              </TabsTrigger>
              <TabsTrigger value="answers" className="flex-1">
                Answers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="passages" className="prose max-w-none">
              <div className="passages-container p-5 bg-white rounded-lg shadow-sm border">
                {testData.passages}
              </div>
            </TabsContent>

            <TabsContent value="questions" className="prose max-w-none">
              <div className="questions-container p-5 bg-white rounded-lg shadow-sm border">
                {testData.questions}
              </div>
            </TabsContent>            <TabsContent value="answers" className="prose max-w-none">
              <AnswersDisplay answers={testData.answers} testType={type} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop view - side by side layout with answers tab */}
        <div className="hidden md:block">
          <Tabs defaultValue="test" className="w-full">
            <TabsList className="mb-4 w-full flex justify-center">
              <TabsTrigger value="test" className="px-8">
                Test
              </TabsTrigger>
              <TabsTrigger value="answers" className="px-8">
                Answers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="test">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col h-[calc(100vh-160px)]">
                  <h2 className="text-xl font-medium mb-4 py-2">Passages</h2>
                  <div className="prose max-w-none p-5 bg-white rounded-lg shadow-sm border overflow-y-auto flex-grow">
                    <div className="passages-container">
                      {testData.passages}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-[calc(100vh-160px)]">
                  <h2 className="text-xl font-medium mb-4 py-2">Questions</h2>
                  <div className="prose max-w-none p-5 bg-white rounded-lg shadow-sm border overflow-y-auto flex-grow">
                    <div className="questions-container">
                      {testData.questions}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>            <TabsContent value="answers">
              <div className="p-5 bg-white rounded-lg shadow-sm border">
                <h2 className="text-xl font-medium mb-6">Answer Key</h2>
                <AnswersDisplay answers={testData.answers} testType={type} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading test:", error);
    return notFound();
  }
}

// Generate metadata for the page
export async function generateMetadata(params: {
  params: Promise<{ id: string; type: string }>;
}) {
  try {
    const defaultTitle = "IELTS Practice Test | IELTS 7+";
    const defaultDescription =
      "Practice IELTS test with comprehensive materials";

    // Await params to access properties
    const { id, type } = await params.params;

    // Prepare a basic title
    let title = id
      ? id.replace(/_/g, " ").replace(/^(.)/, (match) => match.toUpperCase())
      : defaultTitle;

    // Create a type display name
    let typeDisplay = "";
    if (type === "general_reading") typeDisplay = "General Reading";
    else if (type === "academic_reading") typeDisplay = "Academic Reading";
    else if (type === "listening") typeDisplay = "Listening";
    else typeDisplay = type.replace(/_/g, " ");

    return {
      title: `${title} | IELTS 7+`,
      description: `Practice ${typeDisplay} test from IELTS 7+`,
    };
  } catch (error) {
    return {
      title: "IELTS Practice Test | IELTS 7+",
      description: "Practice IELTS tests with our comprehensive materials",
    };
  }
}
