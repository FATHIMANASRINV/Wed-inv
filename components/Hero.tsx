"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d26] via-[#0f5132] to-[#0a3d26]" />

      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[#c9a961]/60 rounded-tl-3xl" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#c9a961]/60 rounded-tr-3xl" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#c9a961]/60 rounded-bl-3xl" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#c9a961]/60 rounded-br-3xl" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-arabic text-3xl md:text-4xl text-[#e6d5a8] mb-6"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif tracking-[0.4em] text-xs md:text-sm text-[#e6d5a8] mb-8"
        >
          IN THE NAME OF ALLAH, THE MOST GRACIOUS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <p className="font-serif text-lg md:text-xl tracking-widest mb-4 text-white/90">
            THE WEDDING OF
          </p>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-4 gold-text">
            Ayesha &amp; Ahmed
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="divider-ornament my-8"
        >
          <span className="text-[#c9a961] text-2xl">﷽</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-[#e6d5a8]"
        >
          14 · SEPTEMBER · 2026
        </motion.p>
      </div>
    </section>
  );
}