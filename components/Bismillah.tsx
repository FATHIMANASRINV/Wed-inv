"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Bismillah() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 px-4 pattern-bg">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-arabic text-4xl md:text-5xl text-[#0f5132] mb-6 leading-loose">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>

        <div className="divider-ornament my-8">
          <span className="text-[#c9a961]">✦</span>
        </div>

        <p className="font-serif italic text-lg md:text-xl text-[#0f5132]/80 leading-relaxed">
          &ldquo;And among His signs is this, that He created for you mates from
          among yourselves, that you may dwell in tranquillity with them, and He
          has put love and mercy between your hearts.&rdquo;
        </p>
        <p className="font-serif text-sm tracking-widest text-[#c9a961] mt-4">
          — SURAH AR-RUM, 30:21
        </p>
      </motion.div>
    </section>
  );
}