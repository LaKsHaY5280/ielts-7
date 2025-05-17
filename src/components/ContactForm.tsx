"use client";

import { useState, useEffect, useRef } from "react";
import {
  Send,
  XCircle,
  CreditCard,
  Check,
  Clock,
  AlertTriangle,
  BadgeCheck,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRazorpayLoading, setIsRazorpayLoading] = useState(true);
  const razorpayInitialized = useRef(false);
  const [scriptError, setScriptError] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    writing_content: "",
    notes: "",
    paymentId: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate payment ID format
  const validatePaymentId = (paymentId: string): boolean => {
    return paymentId.trim().startsWith("pay_") && paymentId.trim().length > 10;
  }; // Override alert function to prevent Razorpay alerts
  useEffect(() => {
    // Save the original alert function
    const originalAlert = window.alert;
    // Override the alert function to suppress Razorpay alerts
    window.alert = function (message) {
      if (
        typeof message === "string" &&
        (message.includes("Button") ||
          message.includes("form") ||
          message.includes("Payment") ||
          message.includes("Razorpay"))
      ) {
        // Suppress Razorpay alerts
        console.log("Suppressed alert:", message);
        return;
      }
      // Allow other alerts to show
      originalAlert(message);
    };

    // Restore the original alert function when component unmounts
    return () => {
      window.alert = originalAlert;
    };
  }, []);

  // Initialize Razorpay button on mount
  useEffect(() => {
    // Override console warnings and errors that might show alerts
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;

    console.warn = function (...args) {
      // Filter out Razorpay warnings
      const isRazorpayWarning = args.some(
        (arg) =>
          typeof arg === "string" &&
          (arg.includes("Button") ||
            arg.includes("form") ||
            arg.includes("Razorpay"))
      );
      if (!isRazorpayWarning) {
        originalConsoleWarn.apply(console, args);
      }
    };

    console.error = function (...args) {
      // Filter out Razorpay errors that might trigger alerts
      const isRazorpayError = args.some(
        (arg) =>
          typeof arg === "string" &&
          (arg.includes("Button") ||
            arg.includes("form") ||
            arg.includes("Razorpay"))
      );
      if (!isRazorpayError) {
        originalConsoleError.apply(console, args);
      }
    };

    // Create and manage script element
    const initRazorpayButton = () => {
      // Avoid reinitializing if already done
      if (razorpayInitialized.current) return;

      const rzpPaymentForm = document.getElementById("rzp_payment_form");
      if (!rzpPaymentForm) return;

      // Safer approach to clear children (avoids DOM errors)
      rzpPaymentForm.innerHTML = "";

      setIsRazorpayLoading(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_Q4EpGUzUpirMWJ";

      // Set up events for the script
      script.onload = () => {
        // Add a small delay to ensure the button renders
        setTimeout(() => {
          // Check if component is still mounted
          const buttonContainer = document.getElementById("rzp_payment_form");
          if (!buttonContainer) return;

          const button = buttonContainer.querySelector(
            ".razorpay-payment-button"
          );
          if (button) {
            setIsRazorpayLoading(false);
            razorpayInitialized.current = true;
          } else {
            // If button isn't found after script loads, show fallback
            setIsRazorpayLoading(false);
            setScriptError(true);
          }
        }, 1500);
      };

      script.onerror = () => {
        setIsRazorpayLoading(false);
        setScriptError(true);
      };

      // Safe append
      try {
        rzpPaymentForm.appendChild(script);
      } catch (error) {
        setIsRazorpayLoading(false);
        setScriptError(true);
      }
    }; // Safely initialize after a short delay to ensure DOM is ready
    let timer: ReturnType<typeof setTimeout>;
    let failsafeTimer: ReturnType<typeof setTimeout>;

    timer = setTimeout(() => {
      initRazorpayButton();

      // Add a failsafe - if still loading after 5 seconds, show fallback
      failsafeTimer = setTimeout(() => {
        setIsRazorpayLoading(false);
        setScriptError(true);
      }, 5000);
    }, 200);

    // Clean up all timers and state when component unmounts
    return () => {
      // Restore original console functions
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;

      // Clear timers
      clearTimeout(timer);
      clearTimeout(failsafeTimer);

      // Reset state if component unmounts during loading
      setIsRazorpayLoading(false);
    };
  }, []);

  // Handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.paymentId.trim()) {
      setResult("Please complete payment and enter Payment ID");
      return;
    }

    if (!validatePaymentId(formState.paymentId)) {
      setResult("Invalid Payment ID. Please check and try again.");
      return;
    }

    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "61d09f73-58b6-4762-8542-87325de248f3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        (event.target as HTMLFormElement).reset();
        setFormState({
          name: "",
          email: "",
          writing_content: "",
          notes: "",
          paymentId: "",
        });
        setResult("Form submitted successfully!");
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-[#cc0d09]/5 to-[#d56e1f]/5 p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <BadgeCheck className="w-6 h-6 mr-2 text-[#cc0d09]" />
                Writing Evaluation
              </h2>
              <p className="text-gray-600 mt-1">
                Complete payment (₹49) and submit your writing for expert
                evaluation
              </p>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-500 text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <Clock className="w-3.5 h-3.5" />
              <span>24-48 hour turnaround</span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          className="p-6 md:p-8 grid grid-cols-1 gap-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Information Section */}
          <motion.div
            variants={itemVariants}
            className="border border-gray-100 rounded-lg p-5 bg-gray-50/50"
          >
            <h3 className="font-medium text-gray-800 mb-4 flex items-center">
              <span className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-[#cc0d09] text-xs font-semibold">
                1
              </span>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block mb-1.5 font-medium text-sm text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-[#cc0d09] focus:ring focus:ring-[#cc0d09]/10 transition duration-200 bg-white"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block mb-1.5 font-medium text-sm text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-[#cc0d09] focus:ring focus:ring-[#cc0d09]/10 transition duration-200 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Writing Content Section */}
          <motion.div
            variants={itemVariants}
            className="border border-gray-100 rounded-lg p-5 bg-gray-50/50"
          >
            <h3 className="font-medium text-gray-800 mb-4 flex items-center">
              <span className="h-6 w-6 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-[#cc0d09] text-xs font-semibold">
                2
              </span>
              Your Writing
            </h3>

            <div className="form-group mb-4">
              <label
                htmlFor="writing_content"
                className="block mb-1.5 font-medium text-sm text-gray-700"
              >
                Paste your essay or writing task here
              </label>
              <textarea
                id="writing_content"
                name="writing_content"
                value={formState.writing_content}
                onChange={handleInputChange}
                required
                rows={8}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#cc0d09] focus:ring focus:ring-[#cc0d09]/10 transition duration-200 bg-white resize-none"
                placeholder="Paste your IELTS writing task here..."
              ></textarea>
              <div className="text-xs text-gray-500 mt-1.5 flex items-center">
                <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-500" />
                <span>
                  Please ensure your text is free from formatting issues
                </span>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="notes"
                className="block mb-1.5 font-medium text-sm text-gray-700"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formState.notes}
                onChange={handleInputChange}
                rows={2}
                className="w-full p-2.5 rounded-lg border border-gray-300 focus:border-[#cc0d09] focus:ring focus:ring-[#cc0d09]/10 transition duration-200 bg-white resize-none"
                placeholder="Any specific concerns or areas you want feedback on..."
              ></textarea>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            variants={itemVariants}
            className="border border-gray-100 rounded-lg p-5 bg-[#cc0d09]/5"
          >
            <h3 className="font-medium text-gray-800 mb-4 flex items-center">
              <span className="h-6 w-6 bg-[#cc0d09]/10 rounded-full flex items-center justify-center mr-2 text-[#cc0d09] text-xs font-semibold">
                3
              </span>
              <CreditCard className="w-4 h-4 mr-2 text-[#cc0d09]" />
              Complete Payment
            </h3>{" "}
            <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
              <div className="text-center mb-3">
                <div className="font-medium text-sm mb-1 text-gray-700">
                  Click below to pay ₹49
                </div>
                <div className="text-xs text-gray-500">
                  Secure payment via Razorpay
                </div>
              </div>{" "}
              <div className="flex justify-center relative min-h-[50px]">
                {/* Wrapper with proper form structure for Razorpay */}
                <form
                  action="#"
                  method="POST"
                  className="w-full flex justify-center items-center"
                >
                  <div
                    id="rzp_payment_form"
                    className="my-2 w-full z-10 flex justify-center items-center"
                    data-key="rzp_test_key"
                  ></div>
                </form>

                {/* Loading overlay - separate from the button container */}
                {isRazorpayLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 rounded-md p-2 border border-gray-200 z-20">
                    <Loader2 className="h-5 w-5 text-[#cc0d09] animate-spin mr-2" />
                    <span className="text-sm text-gray-600">
                      Loading payment options...
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="paymentId"
                className="block mb-1.5 font-medium text-sm text-gray-700"
              >
                Payment ID (from receipt)
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="paymentId"
                  name="paymentId"
                  value={formState.paymentId}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. pay_123456789"
                  className={`w-full p-2.5 pl-9 rounded-lg border focus:ring transition duration-200 bg-white ${
                    formState.paymentId
                      ? validatePaymentId(formState.paymentId)
                        ? "border-green-500 focus:border-green-500 focus:ring-green-100"
                        : "border-red-400 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-300 focus:border-[#cc0d09] focus:ring-[#cc0d09]/10"
                  }`}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {formState.paymentId ? (
                    validatePaymentId(formState.paymentId) ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )
                  ) : (
                    <CreditCard className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>

              {formState.paymentId && (
                <div
                  className={`flex items-center mt-1.5 text-xs ${
                    validatePaymentId(formState.paymentId)
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {validatePaymentId(formState.paymentId) ? (
                    <Check className="w-3.5 h-3.5 mr-1" />
                  ) : (
                    <XCircle className="w-3.5 h-3.5 mr-1" />
                  )}
                  <span>
                    {validatePaymentId(formState.paymentId)
                      ? "Payment ID verified"
                      : "Invalid payment ID format"}
                  </span>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-2 flex items-start">
                <AlertTriangle className="w-3.5 h-3.5 mr-1 flex-shrink-0 mt-0.5" />
                <span>
                  After payment, copy the Payment ID from your receipt (starts
                  with "pay_")
                </span>
              </p>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#cc0d09] to-[#d56e1f] text-white rounded-lg font-medium flex items-center justify-center shadow-md relative overflow-hidden"
              whileHover={{
                scale: 1.01,
                boxShadow:
                  "0 10px 15px -3px rgba(204, 13, 9, 0.1), 0 4px 6px -2px rgba(204, 13, 9, 0.05)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background hover effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 -z-10"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              />
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Submit for Evaluation
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </motion.button>

            {result && (
              <motion.div
                className={`mt-4 p-3 rounded-lg text-sm ${
                  result.includes("success")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  {result.includes("success") ? (
                    <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                  )}
                  {result}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
