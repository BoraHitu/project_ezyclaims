// Services.jsx
function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Insurance Claim & Policy Consultation",
            "Initial Document Verification",
            "Loss Assessment",
            "Surveyor & Insurance Coordination",
            "General Claim Guidance",
            "Dispute Resolution & Expert Opinion",
            "Risk Consultancy",
            "Workshop Suggestions",
            "Salvage Disposal Guidance",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                {service === "Insurance Claim & Policy Consultation" &&
                  "Expert advice to choose the right policy and streamline claims."}
                {service === "Initial Document Verification" &&
                  "We ensure all claim-related documents are verified before submission."}
                {service === "Loss Assessment" &&
                  "Accurate evaluations by seasoned professionals to ensure fair payouts."}
                {service === "Surveyor & Insurance Coordination" &&
                  "Complete coordination with the surveyor and insurer for faster settlement."}
                {service === "General Claim Guidance" &&
                  "Ongoing support and advice throughout your claim process."}
                {service === "Dispute Resolution & Expert Opinion" &&
                  "Support in handling underpaid or denied claims with expertise."}
                {service === "Risk Consultancy" &&
                  "Minimize future claim losses through risk assessment and advisory."}
                {service === "Workshop Suggestions" &&
                  "Recommendations for trusted repair partners to reduce delays."}
                {service === "Salvage Disposal Guidance" &&
                  "Proper handling and disposal of salvaged vehicles to avoid value loss."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
