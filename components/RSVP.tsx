"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

export default function RSVP() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-[#f8f4e9]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="font-serif text-[#c9a961] tracking-[0.4em] text-sm mb-4">
            PLEASE RESPOND
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-[#0f5132] mb-4">
            RSVP
          </h2>
          <div className="divider-ornament my-6">
            <span className="text-[#c9a961]">❁</span>
          </div>
          <p className="font-serif text-lg text-[#0f5132]/80">
            Kindly respond by 1 August 2026
          </p>
        </motion.div>

        {submitted ? (
          <div className="bg-white rounded-lg p-12 text-center shadow-xl border border-[#c9a961]/30">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0f5132] mb-4">
              <Check className="text-[#c9a961]" size={32} />
            </div>
            <h3 className="font-script text-4xl text-[#0f5132] mb-2">
              JazakAllah Khair!
            </h3>
            <p className="text-[#0f5132]/70">
              Your response has been received.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 md:p-10 shadow-xl border border-[#c9a961]/30 space-y-6"
          >
            <div>
              <label className="block font-serif text-sm tracking-widest mb-2 text-[#0f5132]">
                FULL NAME
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-[#c9a961]/40 rounded focus:border-[#0f5132] focus:outline-none bg-[#fdfbf6]"
              />
            </div>

            <div>
              <label className="block font-serif text-sm tracking-widest mb-2 text-[#0f5132]">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-[#c9a961]/40 rounded focus:border-[#0f5132] focus:outline-none bg-[#fdfbf6]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-serif text-sm tracking-widest mb-2 text-[#0f5132]">
                  ATTENDING?
                </label>
                <select
                  value={form.attending}
                  onChange={(e) => setForm({ ...form, attending: e.target.value })}
                  className="w-full px-4 py-3 border border-[#c9a961]/40 rounded bg-[#fdfbf6]"
                >
                  <option value="yes">Yes, Insha&apos;Allah</option>
                  <option value="no">Sorry, cannot attend</option>
                </select>
              </div>
              <div>
                <label className="block font-serif text-sm tracking-widest mb-2 text-[#0f5132]">
                  GUESTS
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 border border-[#c9a961]/40 rounded bg-[#fdfbf6]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0f5132] text-white py-4 rounded font-serif tracking-[0.3em] hover:bg-[#0a3d26] transition-colors"
            >
              SEND RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}