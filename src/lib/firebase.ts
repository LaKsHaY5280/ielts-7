import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  Firestore,
  DocumentData,
  QuerySnapshot,
  DocumentSnapshot,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  Auth,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

/**
 * Firebase configuration using environment variables with fallbacks
 * Create a .env.local file based on .env.local.example to customize
 */
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    "AIzaSyCZYhTYOL0iBmueYBPL_JrMxJZ5oZCV9_Y",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
    "ielts7-48b25.firebaseapp.com",
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ||
    "https://ielts7-48b25-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ielts7-48b25",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "ielts7-48b25.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "473076954049",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
    "1:473076954049:web:086f7fa5af71a045c57540",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-9C0BGHDPFG",
};

/**
 * Firebase Singleton to ensure we only initialize once
 */
class Firebase {
  private static instance: Firebase;
  private _app: FirebaseApp;
  private _db: Firestore;
  private _auth: Auth;

  private constructor() {
    if (getApps().length === 0) {
      this._app = initializeApp(firebaseConfig);
    } else {
      this._app = getApps()[0];
    }
    this._db = getFirestore(this._app);
    this._auth = getAuth(this._app);
  }

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }

  get app(): FirebaseApp {
    return this._app;
  }

  get db(): Firestore {
    return this._db;
  }

  get auth(): Auth {
    return this._auth;
  }
}

// Export Firebase instances
const firebaseInstance = Firebase.getInstance();
const app = firebaseInstance.app;
const db = firebaseInstance.db;
const auth = firebaseInstance.auth;

/**
 * Authentication functions
 */

// Email/password sign in
export async function signIn(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

// Create a new user with email/password
export async function signUp(
  email: string,
  password: string
): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Sign out the current user
export async function logOut(): Promise<void> {
  return signOut(auth);
}

// Sign in with Google
export async function signInWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

/**
 * Firestore data access functions
 */

// Helper function to fetch a test by bookNum and testNum
export async function fetchTest(
  bookNum: number,
  testType: "academic_reading" | "general_reading",
  testNum: number
) {
  try {
    const bookId = `cambridge${bookNum}`;
    const testId = `Test${testNum}`;

    const docRef = doc(db, "ielts_cambridge_tests", bookId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      if (data.tests && data.tests[testId]) {
        // Check if the test type matches
        const test = data.tests[testId];
        if (test.type === testType) {
          return {
            success: true,
            data: test,
          };
        }
      }
      return {
        success: false,
        error: `Test not found: ${bookId} ${testType} test ${testNum}`,
      };
    }
    return {
      success: false,
      error: `Cambridge book ${bookNum} not found`,
    };
  } catch (error) {
    return {
      success: false,
      error: `Error fetching test: ${
        error instanceof Error ? error.message : String(error)
      }`,
    };
  }
}

// Get all available test books
export async function getAllTestBooks() {
  try {
    const booksRef = collection(db, "ielts_cambridge_tests");
    const snapshot = await getDocs(booksRef);

    return {
      success: true,
      data: snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    };
  } catch (error) {
    return {
      success: false,
      error: `Error fetching test books: ${
        error instanceof Error ? error.message : String(error)
      }`,
    };
  }
}

// Export Firebase instances and authenticated Firestore instance
export { app, db, auth };
