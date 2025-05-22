"use client";

import React, { useState } from "react";

/**
 * A simplified version of the ContactForm for limited browsers like LG SmartBoard
 */
const SimplifiedContactForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Writing Review Form
      </h2>
      <p className="mb-6 text-center">
        For LG SmartBoard users, please use a modern browser on a different
        device to submit your writing for review.
      </p>

      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">
          <strong>Note:</strong> Your device has limited browser capabilities.
          To ensure the best experience, we recommend using a computer, tablet,
          or smartphone with an updated browser.
        </p>
      </div>

      <div className="mt-6 mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">
          <strong>Alternative Method:</strong> You can also email your writing
          sample directly to
          <a
            href="mailto:support@ielts7plus.com"
            className="text-blue-600 ml-1 underline"
          >
            support@ielts7plus.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default SimplifiedContactForm;
