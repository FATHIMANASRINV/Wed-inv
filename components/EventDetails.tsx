"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, MapPin, Calendar } from "lucide-react";

const events = [
  {
    title: "Nikah Ceremony",
    time: "4:00 PM",
    date: "Saturday, 14 September 2026",
    location: "Jamia Masjid",
    address: "123 Main Street, Boston, MA",
  },
  {
    title: "Walima Reception",
    time: "7:00 PM",
    date: "Saturday, 14 September 2026",
    location: "The Grand Ballroom",
    address: "456 Park Avenue, Boston, MA",
  },
];

export default function EventDetails() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 pattern-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-serif text-[#c9a961] tracking-[0.4em] text-sm mb-4">
            INSHA&apos;ALLAH
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-[#0f5132]">
            Wedding Events
          </h2>
          <div className="divider-ornament my-6">
            <span className="text-[#c9a961]">❁</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              className="relative bg-[#fdfbf6] border border-[#c9a961]/40 rounded-lg p-8 shadow-lg"
            >
              <h3 className="font-script text-4xl md:text-5xl text-[#0f5132] text-center mb-6">
                {event.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="text-[#c9a961] flex-shrink-0 mt-1" size={20} />
                  <p className="font-serif text-lg text-[#0f5132]">{event.date}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#c9a961] flex-shrink-0 mt-1" size={20} />
                  <p className="font-serif text-lg text-[#0f5132]">{event.time}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#c9a961] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-serif font-semibold text-[#0f5132]">
                      {event.location}
                    </p>
                    <p className="text-sm text-[#0f5132]/70">{event.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}