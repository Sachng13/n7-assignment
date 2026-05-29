import { SOLUTIONS } from "../../constants/data";
import FadeIn from "../ui/FadeIn";
import SectionLabel from "../ui/SectionLabel";
import LearnMore from "../ui/LearnMore";
import Button from "../ui/Button";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-inner">
        <FadeIn>
          <SectionLabel>Our Platform</SectionLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 52,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px,3.5vw,42px)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: -1,
                lineHeight: 1.15,
              }}
            >
              All of our solutions are
              <br />
              tailor-made to your needs
            </h2>
            <Button size="sm">Request Demo</Button>
          </div>
        </FadeIn>

        <div
          className="solutions__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {SOLUTIONS.map((sol, i) => (
            <FadeIn key={sol.id} delay={i * 0.07}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{sol.icon}</div>
                <p
                  style={{
                    fontSize: 10,
                    color: sol.color,
                    fontWeight: 600,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {sol.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  {sol.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 22,
                    flex: 1,
                  }}
                >
                  {sol.desc}
                </p>
                <LearnMore />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
