"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Test {
  id: string;
  year: string;
  testNumber: number;
  title: string;
}

export default function TestTypePage() {
  const params = useParams();
  const type = params.type as string;
  const router = useRouter();
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCardStyles = () => {
    switch (type) {
      case "general_reading":
        return {
          border: "border-red-500",
          hover: "hover:bg-red-50",
          shadow: "hover:shadow-red-100",
        };
      case "listening":
        return {
          border: "border-blue-500",
          hover: "hover:bg-blue-50",
          shadow: "hover:shadow-blue-100",
        };
      case "academic_reading":
        return {
          border: "border-amber-800",
          hover: "hover:bg-amber-50",
          shadow: "hover:shadow-amber-100",
        };
      default:
        return {
          border: "border-gray-200",
          hover: "hover:bg-gray-50",
          shadow: "hover:shadow-gray-100",
        };
    }
  };

  useEffect(() => {
    const fetchTests = async () => {
      if (!type) return; // Early return clause for missing type

      try {
        // For listening tests, fetch from Firebase
        if (type === "listening") {
          const years = ["19", "18", "17", "16", "15", "14", "13"];
          const allTests: Test[] = [];

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
                      id: `cambridge${year}_ls_test${i}`,
                      year,
                      testNumber: i,
                      title: `Cambridge ${year} ${type.replace(
                        "_",
                        " "
                      )} - Test ${i}`,
                    });
                  }
                }
              }
            } catch (innerErr) {
              console.error(`Error fetching ${collectionId}:`, innerErr);
              // Continue with the next year if one fails
            }
          }

          // Sort tests by year (descending) and then by test number (ascending)
          const sortedTests = allTests.sort((a, b) => {
            if (a.year !== b.year) {
              return parseInt(b.year) - parseInt(a.year);
            }
            return a.testNumber - b.testNumber;
          });

          setTests(sortedTests);
        } else {
          // For other types, fetch from local data
          const { mockTests } = await import("@/data/mockTests");
          setTests(mockTests[type as keyof typeof mockTests] || []);
        }

        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching tests:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTests();
  }, [type]);

  const handleTestClick = (test: Test) => {
    router.push(`/tests/${type}/${test.id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  const styles = getCardStyles();

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold ml-4 capitalize">
          {type?.replace("_", " ")} Tests
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, index) => (
          <div
            key={index}
            onClick={() => handleTestClick(test)}
            className={`
              bg-white p-6 rounded-lg cursor-pointer
              transform transition-all duration-200
              border-2 ${styles.border}
              ${styles.hover}
              hover:scale-105
              shadow-lg ${styles.shadow}
            `}
          >
            <h2 className="text-lg font-semibold mb-3">{test.title}</h2>
            <p className="text-gray-600">
              {type === "listening"
                ? "Click to play audio and take the test"
                : "Click to view content and take the test"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
