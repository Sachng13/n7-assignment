import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import PhoneUI from "../ui/PhoneUI";
import { TRUSTED_BRANDS } from "../../constants/data";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(80px,10vw,120px) var(--section-px) 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero__grid"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Copy */}
        <div style={{ flex: 1, maxWidth: 580 }}>
          <FadeIn>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(99,102,241,0.09)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "var(--radius-full)",
                padding: "5px 14px",
                fontSize: 11,
                color: "#818cf8",
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  animation: "pulse-dot 2s infinite",
                }}
              />
              Next-gen banking infrastructure
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px,5.5vw,68px)",
                fontWeight: 700,
                lineHeight: 1.07,
                letterSpacing: "-2.5px",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              The new foundation
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#6366f1,#a78bfa,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                of modern banking
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: 16,
                color: "var(--color-text-secondary)",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 460,
              }}
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence — trusted by leading
              financial institutions worldwide.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button>Request Demo</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div style={{ marginTop: 52 }}>
              <p
                style={{
                  fontSize: 10,
                  color: "#444",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Trusted by
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                {TRUSTED_BRANDS.map((brand) => (
                  <span
                    key={brand}
                    style={{
                      fontSize: 11,
                      color: "#383848",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Phone mockup */}
        <div
          className="hero__phone"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: 460,
          }}
        >
          <div style={{ animation: "float 6s ease-in-out infinite" }}>
            <PhoneUI />
          </div>
          {/* Orbit rings */}
          {[340, 440].map((size) => (
            <div
              key={size}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: size,
                height: size,
                borderRadius: "50%",
                border: "1px solid rgba(99,102,241,0.08)",
                animation: "spin-slow 24s linear infinite",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
