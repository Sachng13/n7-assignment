import { TICKER_ITEMS } from "../../constants/data";

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      style={{
        overflow: "hidden",
        background: "#0a0a12",
        borderTop: "1px solid var(--color-border-light)",
        borderBottom: "1px solid var(--color-border-light)",
        padding: "13px 0",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: 40,
          animation: "ticker 20s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              fontWeight: item.accent ? 700 : 400,
              color: item.accent
                ? "var(--color-accent)"
                : "var(--color-text-secondary)",
              letterSpacing: item.accent ? 0.5 : 0,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
