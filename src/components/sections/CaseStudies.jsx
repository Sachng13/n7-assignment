import { CASE_STUDIES } from '../../constants/data';
import FadeIn from '../ui/FadeIn';
import LearnMore from '../ui/LearnMore';
import Button from '../ui/Button';

function CaseCard({ cs, delay }) {
  return (
    <FadeIn delay={delay} style={{ flex: '1 1 300px' }}>
      <div
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 28,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color var(--transition-base), transform var(--transition-base)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--color-accent)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <p style={{
          fontSize: 11, color: 'var(--color-accent)',
          fontWeight: 700, letterSpacing: 0.5, marginBottom: 8,
        }}>
          {cs.brand}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 16, fontWeight: 700,
          color: '#fff', lineHeight: 1.4, marginBottom: 14,
        }}>
          {cs.title}
        </h3>
        <p style={{
          fontSize: 12, color: 'var(--color-text-muted)',
          lineHeight: 1.75, flex: 1,
        }}>
          {cs.desc}
        </p>
        <div style={{ marginTop: 22 }}>
          <LearnMore />
        </div>
      </div>
    </FadeIn>
  );
}

export default function CaseStudies() {
  return (
    <section className="section" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="section-inner">
        <FadeIn>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px,3vw,38px)',
            fontWeight: 700, color: '#fff',
            letterSpacing: -1, marginBottom: 48, textAlign: 'center',
          }}>
            Our Case Studies
          </h2>
        </FadeIn>

        <div
          className="cases__grid"
          style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}
        >
          {CASE_STUDIES.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} delay={i * 0.1} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button variant="outline" size="sm">view all</Button>
        </div>
      </div>
    </section>
  );
}
