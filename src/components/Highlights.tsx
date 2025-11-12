"use client";
import Reveal from "./Reveal";

const highlights = [
  {
    title: "Military-Grade Precision",
    desc: "Our UAV systems are engineered for extreme accuracy and mission-critical performance."
  },
  {
    title: "Autonomous Intelligence",
    desc: "AI-powered flight control enables real-time decision-making and adaptive mission planning."
  },
  {
    title: "Secure Communication",
    desc: "End-to-end encrypted telemetry ensures safe, interference-free operations."
  }
];

export default function Highlights() {
  return (
    <section className="py-20 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-accent to-orange-400 text-transparent bg-clip-text">
            Key Highlights
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.2}>
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,123,0,0.15)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-accent mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
