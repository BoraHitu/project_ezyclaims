import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          At EzyClaim, we offer personalized support, faster claim resolution,
          and expert guidance for fleet owners.
        </p>

        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-gray-800 text-md mb-4">
            🔒 Our full claim support services are available only to registered
            users.
          </p>
          <p className="text-gray-600 mb-6">
            Please login to access private consultation, dispute resolution,
            claim filing, and more.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
          >
            Login to Continue
          </button>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          For general queries, reach us at{" "}
          <span className="font-medium">hiteshbora1105@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
