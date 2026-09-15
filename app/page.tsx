"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 480);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2600);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (stage !== 1) return;
    const delays = [0, 180, 360, 540, 720, 900, 1080, 1260, 1440, 1620, 1800];
    const timers = delays.map((ms, i) =>
      setTimeout(() => setRevealed(i + 1), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  const reveal = (at) => ({
    opacity: revealed >= at ? 1 : 0,
    transform: revealed >= at ? "translateY(0)" : "translateY(28px)",
    transition:
      "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
  });

  const nameSize = isMobile ? "clamp(42px, 14vw, 62px)" : "62px";
  const dividerLineWidth = isMobile ? "32px" : "60px";

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at top, #f6faf7 0%, #e6efe9 60%, #d3e0d8 100%)",
        padding: "16px 12px",
        fontFamily: "'Jost', system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Top glow — responsive */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(700px, 100vw)",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(150,190,170,0.32) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom glow — responsive */}
      <div
        style={{
          position: "absolute",
          bottom: "-160px",
          right: "-120px",
          width: "min(520px, 100vw)",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(201,169,97,0.28) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "460px",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-10px",
            border: "1px solid rgba(201,169,97,0.55)",
            borderRadius: "2px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            background: "#ffffff",
            padding: isMobile ? "48px 20px 40px" : "56px 42px 48px",
            textAlign: "center",
            borderRadius: "1px",
            boxShadow:
              "0 30px 80px rgba(60,90,75,0.18), 0 8px 24px rgba(0,0,0,0.05)",
            position: "relative",
            minHeight: stage === 0 ? "420px" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "min-height 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "14px",
              border: "1px solid rgba(30,70,60,0.28)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "20px",
              border: "1px solid rgba(201,169,97,0.55)",
              pointerEvents: "none",
            }}
          />

          {/* STAGE 0 */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: stage >= 1 ? 0 : 1,
              transform: stage >= 1 ? "scale(1.05)" : "scale(1)",
              transition:
                "opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
              pointerEvents: "none",
              padding: "0 20px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(22px, 6.5vw, 32px)",
                color: "#1e463c",
                margin: 0,
                direction: "rtl",
                fontFamily: "'Amiri', serif",
                lineHeight: "2",
              }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <p
              style={{
                fontSize: "10px",
                letterSpacing: isMobile ? "4px" : "8px",
                color: "#c9a961",
                marginTop: "22px",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
              }}
            >
              In the Name of Allah
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, transparent, #c9a961)" }} />
              <span style={{ width: "6px", height: "6px", background: "#1e463c", transform: "rotate(45deg)" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a961" }} />
              <span style={{ width: "6px", height: "6px", background: "#d8a8b0", transform: "rotate(45deg)" }} />
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, #c9a961, transparent)" }} />
            </div>
          </div>

          {/* STAGE 1 */}
          <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <p
              style={{
                ...reveal(1),
                fontSize: "clamp(14px, 4.5vw, 18px)",
                color: "#1e463c",
                margin: "0 0 8px",
                direction: "rtl",
                fontFamily: "'Amiri', serif",
                lineHeight: "2",
              }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <p
              style={{
                ...reveal(2),
                fontSize: "9px",
                letterSpacing: isMobile ? "4px" : "7px",
                color: "#c9a961",
                margin: "0 0 26px",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
              }}
            >
              In the Name of Allah
            </p>

            <div
              style={{
                ...reveal(3),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "26px",
              }}
            >
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, transparent, #c9a961)" }} />
              <span style={{ width: "6px", height: "6px", background: "#1e463c", transform: "rotate(45deg)" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a961" }} />
              <span style={{ width: "6px", height: "6px", background: "#d8a8b0", transform: "rotate(45deg)" }} />
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, #c9a961, transparent)" }} />
            </div>

            <p
              style={{
                ...reveal(4),
                fontSize: "10px",
                letterSpacing: isMobile ? "4px" : "7px",
                color: "#5a7a6a",
                margin: "0 0 22px",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
              }}
            >
              The Wedding Of
            </p>

            <h1
              style={{
                ...reveal(5),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: nameSize,
                lineHeight: "1.05",
                color: "#1e463c",
                margin: 0,
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              Ayesha
            </h1>

            <p
              style={{
                ...reveal(6),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "24px",
                color: "#c9a961",
                margin: "10px 0",
                lineHeight: 1,
              }}
            >
              &amp;
            </p>

            <h1
              style={{
                ...reveal(7),
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: nameSize,
                lineHeight: "1.05",
                color: "#1e463c",
                margin: 0,
                letterSpacing: "0.5px",
                wordBreak: "break-word",
              }}
            >
              Ahmed
            </h1>

            <div
              style={{
                ...reveal(8),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                margin: "30px 0 24px",
              }}
            >
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, transparent, #c9a961, transparent)" }} />
              <span style={{ width: "6px", height: "6px", background: "#1e463c", transform: "rotate(45deg)" }} />
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a961" }} />
              <span style={{ width: "6px", height: "6px", background: "#d8a8b0", transform: "rotate(45deg)" }} />
              <span style={{ width: dividerLineWidth, height: "1px", background: "linear-gradient(90deg, transparent, #c9a961, transparent)" }} />
            </div>

            <div style={reveal(9)}>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: isMobile ? "3px" : "6px",
                  color: "#1e463c",
                  margin: "0 0 8px",
                }}
              >
                14 · 09 · 2026
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  color: "#7a8f82",
                  margin: "0 0 24px",
                }}
              >
                Saturday · 4:00 PM
              </p>
            </div>

            <div
              style={{
                ...reveal(10),
                paddingTop: "22px",
                borderTop: "1px solid rgba(30,70,60,0.22)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: isMobile ? "3px" : "5px",
                  color: "#1e463c",
                  margin: "0 0 8px",
                  textTransform: "uppercase",
                }}
              >
                Jamia Masjid
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#7a8f82",
                  letterSpacing: "1.5px",
                  margin: 0,
                }}
              >
                123 Main Street · Boston, MA
              </p>
            </div>

            <p
              style={{
                ...reveal(11),
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "9px",
                letterSpacing: isMobile ? "4px" : "7px",
                color: "#c9a961",
                marginTop: "28px",
                textTransform: "uppercase",
              }}
            >
              Barakallahu Lakuma
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}