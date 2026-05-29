import Button from './Button';

export default function CTABanner({ title, subtitle }) {
  return (
    <div className="cta-banner">
      <div style={{ maxWidth: 480 }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.5vw, 30px)',
          fontWeight: 700,
          color: 'var(--color-white)',
          letterSpacing: -0.5,
          lineHeight: 1.25,
          marginBottom: 8,
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="cta-banner__actions">
        <Button variant="outline" size="sm">Contact Us</Button>
        <Button variant="primary" size="sm">Request Demo</Button>
      </div>
    </div>
  );
}
