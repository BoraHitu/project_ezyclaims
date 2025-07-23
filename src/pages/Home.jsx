import React from "react";

const Home = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Simplifying Insurance Claims for Fleet Owners
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          EzyClaim provides expert-driven, end-to-end insurance claim solutions
          with faster turnaround and reduced downtime.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100"
        >
          Get in Touch
        </a>
      </div>

      {/* Benefits Overview */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EzyClaim?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "30+ Years of Expertise",
            "Faster Claim Resolution",
            "Technically Accurate Assessments",
            "Reduced Vehicle Downtime",
            "Informed Insurance Guidance",
            "Complete Claim Support",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md"
            >
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Claim & Policy Consultation",
              "Document Verification",
              "Loss Assessment",
              "Dispute Handling",
              "Risk Consultancy",
              "Workshop Support",
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border rounded hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive and hands-on support tailored for fleet
                  operations.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/services"
              className="text-blue-700 font-semibold hover:underline"
            >
              View All Services →
            </a>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About EzyClaim</h2>
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
          EzyClaim is led by licensed insurance surveyors with 30+ years of
          experience, dedicated to delivering fast, fair, and technically sound
          insurance claim services to fleet owners across India.
        </p>
        <div className="text-center mt-8">
          <a
            href="/about"
            className="text-blue-700 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Need help with an insurance claim?
        </h2>
        <p className="mb-6">
          Get expert guidance and support tailored to your fleet's needs.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default Home;
