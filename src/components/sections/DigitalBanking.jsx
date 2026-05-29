import { DIGITAL_ROWS } from '../../constants/data';
import FadeIn from '../ui/FadeIn';
import SectionLabel from '../ui/SectionLabel';
import FeatureItem from '../ui/FeatureItem';
import Button from '../ui/Button';
import LearnMore from '../ui/LearnMore';
import PhoneUI from '../ui/PhoneUI';

function DigitalRow({ row, index }) {
  const isReverse = row.reverse;

  return (
    <FadeIn delay={index * 0.1}>
      <div
        className={isReverse ? 'digital__row digital__row--reverse' : 'digital__row'}
        style={{
          display: 'flex',
          gap: 52,
          alignItems: 'center',
          marginBottom: 72,
          flexDirection: isReverse ? 'row-reverse' : 'row',
        }}
      >
        {/* Phone */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ animation: `float ${6 + index}s ease-in-out infinite`, animationDelay: `${index * 0.8}s` }}>
            <PhoneUI />
          </div>
        </div>

        {/* Copy */}
        <div style={{ flex: 1.3 }}>
          <SectionLabel>{row.tag}</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
            {row.features.map((f, fi) => (
              <FeatureItem key={fi}>{f}</FeatureItem>
            ))}
          </div>
          <p style={{
            fontSize: 13, color: 'var(--color-text-muted)',
            lineHeight: 1.75, marginBottom: 24,
          }}>
            {row.desc}
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Button size="sm">Request Demo</Button>
            <LearnMore />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function DigitalBanking() {
  return (
    <section
      id="digital"
      style={{
        padding: 'clamp(60px,8vw,100px) var(--section-px)',
        background: 'linear-gradient(180deg,var(--color-bg-primary) 0%,#0c0c1a 50%,var(--color-bg-primary) 100%)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <FadeIn>
          <SectionLabel>D7</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px,3.5vw,48px)',
            fontWeight: 700, color: '#fff',
            letterSpacing: -1.5, marginBottom: 16,
          }}>
            Digital banking<br />out-of-the-box
          </h2>
          <p style={{
            fontSize: 14, color: 'var(--color-text-secondary)',
            maxWidth: 440, lineHeight: 1.75, marginBottom: 64,
          }}>
            D7 helps your financial institution improve the client experience,
            automate and optimize procedures.
          </p>
        </FadeIn>

        {DIGITAL_ROWS.map((row, i) => (
          <DigitalRow key={row.id} row={row} index={i} />
        ))}
      </div>
    </section>
  );
}
