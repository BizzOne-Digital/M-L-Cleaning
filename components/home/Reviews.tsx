"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Maria Gonzalez",
    location: "Lake Wales, FL",
    rating: 5,
    text: "M&L Cleaning is absolutely amazing! My house has never looked this clean. They were on time, professional, and paid attention to every detail. I booked them for monthly cleaning and couldn't be happier!",
    initials: "MG",
  },
  {
    name: "James Thompson",
    location: "Winter Haven, FL",
    rating: 5,
    text: "Hired them for a move-out clean and they did a phenomenal job. The landlord was impressed and I got my full deposit back. Highly recommend M&L to anyone in the area!",
    initials: "JT",
  },
  {
    name: "Priya Sharma",
    location: "Haines City, FL",
    rating: 5,
    text: "I use them for my Airbnb and the turnaround is always fast and the quality is hotel-level. My guests consistently mention how clean the space is. 5 stars every time!",
    initials: "PS",
  },
  {
    name: "Robert Davis",
    location: "Davenport, FL",
    rating: 5,
    text: "Best cleaning company in Polk County, hands down. They are thorough, reliable, and use great products. My office has never been cleaner. Will not use anyone else.",
    initials: "RD",
  },
  {
    name: "Linda Morales",
    location: "Bartow, FL",
    rating: 5,
    text: "Called them for a deep clean before a family gathering. They arrived on time, worked hard, and left the house spotless. Very fair pricing too. Definitely booking again!",
    initials: "LM",
  },
  {
    name: "Carlos Rivera",
    location: "Lake Wales, FL",
    rating: 5,
    text: "Trusted, reliable, and always deliver. I've had many cleaning companies before but M&L is on another level. They truly care about the quality of their work.",
    initials: "CR",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "100px 24px", background: "#f9f4ff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{
          textAlign: "center", marginBottom: "64px",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease"
        }}>
          {/* Google Reviews Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#fff", border: "1px solid #e5e7eb",
            borderRadius: "12px", padding: "12px 24px", marginBottom: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <svg viewBox="0 0 48 48" width="28" height="28">
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a2e" }}>Google Reviews</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontWeight: 800, fontSize: "15px", color: "#1a1a2e" }}>5.0</span>
                <StarRating count={5} />
                <span style={{ color: "#6b7280", fontSize: "13px" }}>(50+ reviews)</span>
              </div>
            </div>
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, color: "#2D0050",
            marginBottom: "16px",
          }}>
            What Our Clients Say
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Hundreds of satisfied customers across Polk County trust M&L for reliable, premium cleaning.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal card-hover"
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "28px",
                border: "1px solid rgba(75,0,130,0.08)",
                boxShadow: "0 4px 20px rgba(75,0,130,0.06)",
                opacity: 0, transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: "20px", right: "24px",
                fontFamily: "Georgia", fontSize: "60px", color: "rgba(75,0,130,0.08)",
                lineHeight: 1, fontWeight: 900,
              }}>&ldquo;</div>

              <StarRating count={r.rating} />

              <p style={{
                color: "#374151", fontSize: "14px", lineHeight: 1.75,
                margin: "16px 0 20px", fontStyle: "italic",
              }}>
                &ldquo;{r.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#FFD700", fontWeight: 700, fontSize: "15px",
                  flexShrink: 0,
                }}>
                  {r.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "14px" }}>{r.name}</div>
                  <div style={{ color: "#6b7280", fontSize: "12px" }}>{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
