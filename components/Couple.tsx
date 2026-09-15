"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Couple() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 bg-[#f8f4e9]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-serif text-[#c9a961] tracking-[0.4em] text-sm mb-4">
            WITH THE BLESSINGS OF ALLAH
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-[#0f5132]">
            The Bride &amp; Groom
          </h2>
          <div className="divider-ornament my-6">
            <span className="text-[#c9a961]">❁</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="relative inline-block mb-6">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600"
                alt="Bride"
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#c9a961] mx-auto"
              />
            </div>
            <p className="font-serif text-sm tracking-[0.3em] text-[#c9a961] mb-2">
              THE BRIDE
            </p>
            <h3 className="font-script text-5xl md:text-6xl text-[#0f5132] mb-3">
              Ayesha
            </h3>
            <p className="font-serif text-lg text-[#0f5132]/80">Daughter of</p>
            <p className="font-serif text-lg font-semibold text-[#0f5132]">
              Mr. &amp; Mrs. Abdul Rahman
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="relative inline-block mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                alt="Groom"
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#c9a961] mx-auto"
              />
            </div>
            <p className="font-serif text-sm tracking-[0.3em] text-[#c9a961] mb-2">
              THE GROOM
            </p>
            <h3 className="font-script text-5xl md:text-6xl text-[#0f5132] mb-3">
              Ahmed
            </h3>
            <p className="font-serif text-lg text-[#0f5132]/80">Son of</p>
            <p className="font-serif text-lg font-semibold text-[#0f5132]">
              Mr. &amp; Mrs. Mohammed Yusuf
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}