// Index file for test exports - Now using dynamic imports for better performance

// Import TestContent type
import { TestContent } from "@/lib/types";

// Re-export the testRegistry functions for use in the application
export { getTestById, TestRegistry, TestMetadata } from "./testRegistry";

// Empty AllTests object for backward compatibility
// No actual test data is loaded here, just an empty shell for type safety
export const AllTests: Record<string, TestContent> = {};

/*
//==============================================================================
// IMPORTS
//==============================================================================

// All static imports are now replaced with dynamic imports in testRegistry.ts
// This significant change prevents loading all components at once and improves performance

//==============================================================================
// TEST CONTENT OBJECTS
//==============================================================================

// All test content objects are now dynamically loaded via testRegistry.ts

//==============================================================================
// EXPORTS
//==============================================================================

// All exports now come from testRegistry.ts
*/
