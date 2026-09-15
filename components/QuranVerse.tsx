"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QuranVerse() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-24 px-4 bg-[#0f5132] text-white overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <p className="font-arabic text-3xl md:text-4xl text-[#e6d5a8] mb-8 leading-loose">
          اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ
        </p>
        <div className="divider-ornament my-8">
          <span className="text-[#c9a961] text-2xl">﷽</span>
        </div>
        <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed">
          &ldquo;O Allah, bless them, and shower Your blessings upon them, and
          unite them in goodness.&rdquo;
        </p>
        <p className="font-serif text-sm tracking-widest text-[#c9a961] mt-6">
          — PROPHETIC DUA
        </p>
      </motion.div>
    </section>
  );
}