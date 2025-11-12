"use client";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <Reveal>
        <h1 className="text-5xl font-bold mb-4 text-white">
          VyomGarud
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Precision UAV systems built for high-stakes missions — autonomous navigation,
          military-grade reliability, and intelligent mission control.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-md hover:brightness-110 transition"
          >
            Request Demo
          </a>
          <a
            href="#capabilities"
            className="px-6 py-3 border border-gray-700 rounded-md text-gray-200 hover:bg-gray-900 transition"
          >
            Explore Capabilities
          </a>
        </div>
      </Reveal>
    </section>
  );
}
