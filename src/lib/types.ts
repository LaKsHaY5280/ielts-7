// Types for IELTS test data

import { ReactNode } from "react";

// Test metadata used in listings
export interface TestMetadata {
  id: string;
  year: string;
  testNumber: number;
  title: string;
  difficulty?: string;
  estimatedTime?: string;
  completions?: number;
  instructions?: string[];
}

// Test content structure (actual test passages, questions and answers)
export interface TestContent {
  passages: ReactNode;
  questions: ReactNode;
  answers?: Record<number, string>; // Question number to answer mapping
}

// Collection of test metadata for listings
export interface TestsCollection {
  general_reading: TestMetadata[];
  academic_reading: TestMetadata[];
  listening: TestMetadata[];
}

export type TestType = keyof TestsCollection;
