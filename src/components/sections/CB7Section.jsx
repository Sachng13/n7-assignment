import { CB7_FEATURES } from '../../constants/data';
import FadeIn from '../ui/FadeIn';
import SectionLabel from '../ui/SectionLabel';
import LearnMore from '../ui/LearnMore';
import FeatureItem from '../ui/FeatureItem';
import Button from '../ui/Button';

export default function CB7Section() {
  return (
    <section style={{
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border-light)',
      borderBottom: '1px solid var(--color-border-light)',
      padding: 'clamp(60px,8vw,100px) var(--section-px)',
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div
          className="cb7__grid"
          style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}
        >
          {/* Left — intro */}
          <FadeIn style={{ flex: 1 }}>
            <div>
              <SectionLabel>CB7</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px,3vw,38px)',
                fontWeight: 700, color: '#fff',
                letterSpacing: -1, lineHeight: 1.2, marginBottom: 20,
              }}>
                A complete cloud-based<br />core banking.
              </h2>
              <p style={{
                fontSize: 14, color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: 28, maxWidth: 360,
              }}>
                Faster time to market with our cloud-based core banking services.
              </p>
              <LearnMore />
            </div>
          </FadeIn>

          {/* Right — feature checklist */}
          <FadeIn delay={0.15} style={{ flex: 1.5 }}>
            <div style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
            }}>
              <p style={{
                fontSize: 14, color: 'var(--color-text-secondary)',
                lineHeight: 1.7, marginBottom: 28,
              }}>
                Run a more efficient, flexible, and digitally connected core banking system
              </p>

              <p style={{
                fontSize: 10, color: 'var(--color-text-muted)',
                fontWeight: 600, letterSpacing: 1.2,
                textTransform: 'uppercase', marginBottom: 16,
              }}>
                What you will get:
              </p>

              <div
                className="features__grid"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px', marginBottom: 28 }}
              >
                {CB7_FEATURES.map((f, i) => (
                  <FeatureItem key={i}>{f}</FeatureItem>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="outline" size="sm">Contact Us</Button>
                <Button size="sm">Request Demo</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
