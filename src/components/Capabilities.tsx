"use client";
import Reveal from "./Reveal";

const cards = [
  {
    title: "Autonomous Navigation",
    desc: "Advanced SLAM, path-planning and obstacle-avoidance algorithms ensure precise and safe flight missions."
  },
  {
    title: "Mission Control Systems",
    desc: "Real-time telemetry dashboards with encrypted communication and AI-assisted flight monitoring."
  },
  {
    title: "Payload Integration",
    desc: "Modular payload bays support custom sensors, cameras, and delivery mechanisms with rapid-swap capability."
  },
  {
    title: "Rugged Engineering",
    desc: "Built for extremes — weather-proof, vibration-resistant, and field-ready hardware."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-accent to-orange-400 text-transparent bg-clip-text">
            Our Capabilities
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.15}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,123,0,0.15)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-accent">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
