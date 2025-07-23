// About.jsx
function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About EzyClaim</h2>
        <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
          EzyClaim is your trusted partner for end-to-end insurance claim
          solutions, dedicated to simplifying and accelerating the claim process
          for fleet operators and commercial vehicle owners.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-3">Our Vision</h3>
            <p>
              To be the most trusted partner for fleet operators by offering
              technically sound, fast, and fair insurance claim solutions that
              reduce costs and improve operational uptime.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-3">Our Mission</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Deliver accurate claim assessments</li>
              <li>Reduce vehicle downtime</li>
              <li>Educate workshops and fleet owners</li>
              <li>Support informed insurance decisions</li>
              <li>Handle claims end-to-end efficiently</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-6">
          Why Choose Us
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "30+ Years of Expertise",
            "Faster Claim Resolution",
            "Technically Correct Assessments",
            "Reduced Vehicle Downtime",
            "Expert Policy Advice",
            "Ongoing Client Support",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
