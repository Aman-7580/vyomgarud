"use client";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-16 border-t border-gray-800 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-4 text-white">About VyomGarud</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-gray-300 leading-relaxed">
            VyomGarud engineers cutting-edge UAV and drone systems focused on 
            precision, endurance, and autonomy. Our mission is to empower defense, 
            industrial, and research organizations with reliable aerial intelligence 
            through advanced control systems and AI-driven navigation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
