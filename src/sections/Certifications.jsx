
import React from "react";
import { certifications } from "../constants";
import { Particles } from "../components/Particles";

const CertificationCard = ({ name, issuer, date, link }) => (
  <div className="rounded-xl border border-white/10 bg-gradient-to-r from-indigo/40 to-storm/40 p-5 shadow-md flex flex-col gap-2 w-full max-w-md mx-auto justify-between">
    <h3 className="text-lg font-bold text-white">{name}</h3>
    <p className="text-neutral-300 text-sm">Issuer: {issuer}</p>
    <p className="text-neutral-400 text-xs">Date: {date}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block px-4 py-2 bg-royal text-white rounded hover:bg-indigo transition-colors text-sm font-medium"
    >
      View Certificate
    </a>
  </div>
);

const Certifications = () => (
  <section className="relative flex flex-col justify-center min-h-[60vh] py-10 c-space" id="certifications">
    <div className="absolute inset-0 -z-10">
      <Particles quantity={80} color="#ffffff" staticity={60} size={0.8} />
    </div>
    <h2 className="text-heading mb-8">My Certifications</h2>
    <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl mx-auto">
      {certifications.map((cert, idx) => (
        <CertificationCard key={idx} {...cert} />
      ))}
    </div>
  </section>
);

export default Certifications;
