"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface ListeningAnswersProps {
  title: string;
  answers?: Record<string, string>;
}

export default function ListeningAnswers({
  title,
  answers,
}: ListeningAnswersProps) {
  const [showAnswers, setShowAnswers] = useState(false);

  if (!answers) {
    return null;
  }

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  // Group answers by sections (approximately)
  const groupedAnswers: Record<string, Record<string, string>> = {};

  Object.entries(answers).forEach(([question, answer]) => {
    const questionNum = parseInt(question);
    let section = "Section 1";

    if (questionNum > 14 && questionNum <= 27) {
      section = "Section 2";
    } else if (questionNum > 27) {
      section = "Section 3";
    } else if (questionNum > 36) {
      section = "Section 4";
    }

    if (!groupedAnswers[section]) {
      groupedAnswers[section] = {};
    }
    groupedAnswers[section][question] = answer;
  });

  return (
    <>
      {/* Show Answer Button */}
      <button
        onClick={toggleAnswers}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
      >
        <span className="mr-1">Show Answers</span>
        <Plus className="h-5 w-5" />
      </button>

      {/* Answer Modal */}
      {showAnswers && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-bold">Answers for {title}</h2>
                <button
                  onClick={toggleAnswers}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {Object.entries(groupedAnswers).map(
                  ([section, sectionAnswers]) => (
                    <div
                      key={section}
                      className="bg-white rounded-lg shadow-sm border p-5"
                    >
                      <h3 className="text-lg font-medium mb-3">{section}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {Object.entries(sectionAnswers).map(
                          ([question, answer]) => (
                            <div
                              key={question}
                              className="flex justify-between items-center bg-gray-50 p-3 rounded border"
                            >
                              <span className="font-medium mr-2">
                                {question}:
                              </span>
                              <span className="font-mono">{answer}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
