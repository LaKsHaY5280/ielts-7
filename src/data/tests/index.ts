// Test data collection for the application
import { TestContent } from "@/lib/types";
import { fetchListeningTest } from "@/lib/testService";

// Collection of all test data
export const AllTests: Record<string, TestContent> = {};

// Import data for each test
// In a production app, this would be a more sophisticated system to lazy load tests
// For now, this is simplified to handle loading from firebase for listening tests

export { fetchListeningTest };
