"use client";

import { useEffect, useState } from "react";

/* ✅ WEDDING date drives the countdown + hero arch */
const weddingDate = new Date("2026-11-22T11:00:00"); // Sun 22 Nov 2026, 11 AM

function pad(v: number) {
  return String(Math.max(0, v)).padStart(2, "0");
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden>
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 8) * 0.7}s`,
            animationDuration: `${7 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden>
      <span />
      <b>✦</b>
      <span />
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const tick = () => {
      const total = Math.max(
        0,
        Math.floor((weddingDate.getTime() - Date.now()) / 1000)
      );
      setT({
        d: Math.floor(total / 86400),
        h: Math.floor((total % 86400) / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60,
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const gcalLink = () => {
    const start = "20261122T110000";
    const end = "20261122T150000";
    const title = encodeURIComponent(
      "Wedding of Mohammed Ashiq & Fathima Najiya Nasrin"
    );
    const loc = encodeURIComponent("Firdouz Annexe Auditorium, Puthantheru");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${loc}`;
  };

  /* ✅ fixed share — works everywhere */
  const shareInvite = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: "Wedding Invitation — Ashiq & Najiya",
      text: "You're invited to the wedding of Mohammed Ashiq & Fathima Najiya Nasrin — 22 Nov 2026, Firdouz Annexe, Puthantheru.",
      url,
    };
    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return;
      }
    } catch {
      /* user cancelled — ignore */
    }
    /* fallback: copy link */
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  return (
    <main className="invite">
      <Sparkles />

      {/* ============ OPENING SCREEN ============ */}
      {!opened && (
        <section className="opening">
          <p className="arabic opening-arabic">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="kicker-script">The Wedding Of</p>
          <h1 className="script-names opening-names">
            Mohammed Ashiq <span>&amp;</span> Fathima Najiya Nasrin
          </h1>
          <p className="opening-date">22 · 11 · 2026</p>
          <button className="open-btn" onClick={() => setOpened(true)}>
            Open Invitation <span>→</span>
          </button>
        </section>
      )}

      {opened && (
        <div className="shell fade-in">

          {/* ============ HERO — 22 NOV ============ */}
          <header className="hero">
            <span className="brand">Invitely</span>

            <div className="floral floral-tl" />
            <div className="floral floral-tr" />
            <div className="floral floral-bl" />
            <div className="floral floral-br" />

            <div className="arch">
              <div className="arch-ornament arch-ornament-top">✦</div>
              <div className="arch-inner">
                <div className="big-day">22</div>
                <span className="dot">✦</span>
                <p className="month">NOVEMBER</p>
                <span className="dot small">◆</span>
                <p className="year">2026</p>
              </div>
              <div className="arch-ornament arch-ornament-bottom">✦</div>
            </div>

            <div className="pills">
              <div className="pill">
                <span className="pill-orn">✦</span>
                SUNDAY
                <span className="pill-orn">✦</span>
              </div>
              <div className="pill">
                <span className="pill-orn">✦</span>
                11.00 AM
                <span className="pill-orn">✦</span>
              </div>
            </div>

            {/* ✅ location shown prominently in hero */}
            <p className="hero-venue">
              Firdouz Annexe Auditorium · Puthantheru
            </p>

            <button className="scroll-btn" onClick={() => scrollTo("details")}>
              Scroll Down <span className="arrow-down">↓</span>
            </button>
          </header>

          {/* ============ COUPLE NAMES ============ */}
          <section className="names-sec">
            <p className="kicker">Together With Their Families</p>
            <h1 className="couple-name">Mohammed Ashiq</h1>
            <div className="amp-row">
              <span className="amp-line" />
              <span className="amp">&amp;</span>
              <span className="amp-line" />
            </div>
            <h1 className="couple-name">Fathima Najiya Nasrin</h1>
            <p className="family-note">
              Request the honour of your presence at their wedding celebration
            </p>
          </section>

          <Divider />

          {/* ============ QURAN VERSE ============ */}
          <section className="quote-sec">
            <div className="quote-mark">“</div>
            <p className="arabic quote-arabic">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            </p>
            <p className="quote">
              “And among His signs is that He created for you spouses from
              among yourselves, that you may find tranquillity in them.”
            </p>
            <span className="src">— Qur'an 30:21</span>
          </section>

          {/* ============ COUNTDOWN → WEDDING ============ */}
          <section id="details" className="details">
            <p className="kicker">Save The Date</p>
            <h2 className="h2">Counting Down To Our Wedding</h2>
            <p className="count-sub">Sunday · 22 November 2026 · 11:00 AM</p>
            <div className="countdown">
              <div><strong>{pad(t.d)}</strong><span>Days</span></div>
              <div><strong>{pad(t.h)}</strong><span>Hours</span></div>
              <div><strong>{pad(t.m)}</strong><span>Minutes</span></div>
              <div><strong>{pad(t.s)}</strong><span>Seconds</span></div>
            </div>

            <a
              className="cal-btn"
              href={gcalLink()}
              target="_blank"
              rel="noreferrer"
            >
              ✦ Add to Calendar
            </a>
          </section>

          <Divider />

          {/* ============ EVENTS ============ */}
          <section className="events">
            <p className="kicker">The Celebration</p>
            <h2 className="h2">Join Us</h2>

            <div className="event-grid">
              {/* ✅ WEDDING FIRST — with big venue block */}
              <article className="event event-featured">
                <div className="icon">♡</div>
                <p className="small">THE WEDDING</p>
                <h3>Wedding Reception</h3>
                <strong>22 NOVEMBER 2026</strong>
                <span>Sunday · 11:00 AM</span>
                <div className="venue-block">
                  <span className="venue">Firdouz Annexe Auditorium</span>
                  <span className="venue-sub">Puthantheru</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Firdouz+Annexe+Auditorium+Puthantheru"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Location →
                </a>
              </article>

              {/* NIKAH */}
              <article className="event">
                <div className="icon">☾</div>
                <p className="small">THE NIKAH</p>
                <h3>Nikah Ceremony</h3>
                <strong>20 NOVEMBER 2026</strong>
                <span>Friday · 4:00 PM</span>
                <div className="venue-block">
                  <span className="venue">Juma Masjid</span>
                  <span className="venue-sub">Nadakkav, Tanur</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Juma+Masjid+Nadakkav+Tanur"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Location →
                </a>
              </article>
            </div>
          </section>

          <Divider />

          {/* ============ OUR STORY ============ */}
          <section className="story-sec">
            <p className="kicker">With Love</p>
            <h2 className="h2">Our Story</h2>
            <p className="story-text">
              Two hearts brought together by Allah's perfect timing —
              beginning a beautiful journey of love, faith and companionship.
              We invite you to share in our joy as we begin our forever
              together, Insha'Allah.
            </p>
            <div className="story-sign">A &amp; N</div>
          </section>

          <Divider />

          {/* ============ DUA ============ */}
          <section className="dua-sec">
            <p className="kicker">Duas &amp; Blessings</p>
            <p className="arabic dua-arabic">
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="dua-text">
              “May Allah bless you both, shower His blessings upon you, and
              unite you in goodness.”
            </p>
          </section>

          <Divider />

          {/* ============ SHARE INVITATION ============ */}
          <section className="share-sec">
            <p className="kicker">Spread The Joy</p>
            <h2 className="h2">Share Our Invitation</h2>
            <p className="share-text">
              Help us spread the happiness — share this invitation with family
              and friends.
            </p>
            <button className="share-btn" onClick={shareInvite}>
              {copied ? "✓ Link Copied!" : "✦ Share Invitation"}
            </button>
          </section>

          {/* ============ THANK YOU ============ */}
          <section className="thanks-sec">
            <p className="arabic thanks-arabic">جَزَاكُمُ اللَّهُ خَيْرًا</p>
            <p className="thanks-text">
              Thank you for being part of our special day.
            </p>
          </section>

          {/* ============ FOOTER ============ */}
          <footer className="foot">
            <p className="arabic">
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
            </p>
            <h2 className="script-names small">Ashiq &amp; Najiya</h2>
            <p className="foot-note">
              May your life together be filled with love, mercy &amp; barakah.
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              ↑ Back to top
            </button>
          </footer>
        </div>
      )}
    </main>
  );
}