"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a3d26] text-white py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-arabic text-3xl text-[#e6d5a8] mb-6">
          بَارَكَ اللَّهُ لَكُمَا
        </p>
        <h3 className="font-script text-5xl md:text-6xl mb-4 gold-text">
          Ayesha &amp; Ahmed
        </h3>
        <p className="font-serif text-lg tracking-[0.3em] text-[#e6d5a8] mb-8">
          14 · 09 · 2026
        </p>
        <div className="divider-ornament my-6">
          <span className="text-[#c9a961]">❁</span>
        </div>
        <p className="font-serif italic text-white/70 max-w-lg mx-auto">
          &ldquo;May Allah bless this union with love, mercy, and lifelong
          companionship.&rdquo;
        </p>
        <p className="text-xs text-white/40 mt-8 tracking-widest">
          WITH LOVE &amp; PRAYERS
        </p>
      </motion.div>
    </footer>
  );
}