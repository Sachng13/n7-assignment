import { INSIGHTS } from '../../constants/data';
import FadeIn from '../ui/FadeIn';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

function InsightCard({ insight, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          transition: 'border-color var(--transition-base)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
      >
        {/* Thumbnail */}
        <div style={{
          background: 'linear-gradient(135deg,#1a1a2e,#0f0f1f)',
          height: 140,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 48, height: 48,
            borderRadius: 12,
            background: 'rgba(99,102,241,0.14)',
            border: '1px solid rgba(99,102,241,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20,
          }}>
            📰
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p style={{
            fontSize: 10, color: 'var(--color-accent)',
            fontWeight: 600, letterSpacing: 1.2,
            textTransform: 'uppercase', marginBottom: 8,
          }}>
            {insight.category}
          </p>
          <h3 style={{
            fontSize: 14, fontWeight: 600,
            color: 'var(--color-text-primary)',
            lineHeight: 1.5, marginBottom: 'auto',
          }}>
            {insight.title}
          </h3>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginTop: 20,
          }}>
            <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
              {insight.author} · {insight.brand}
            </span>
            <a href="#" style={{
              fontSize: 11, color: 'var(--color-accent)',
              fontWeight: 600,
              transition: 'opacity var(--transition-fast)',
            }}>
              read more →
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Insights() {
  return (
    <section
      id="insights"
      className="section"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="section-inner">
        <FadeIn>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48,
          }}>
            <div>
              <SectionLabel>Resources</SectionLabel>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px,3vw,36px)',
                fontWeight: 700, color: '#fff', letterSpacing: -1,
              }}>
                Get yourself up-to-speed on<br />all the things happening in fintech
              </h2>
            </div>
            <Button size="sm">Insights</Button>
          </div>
        </FadeIn>

        <div
          className="insights__grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20, marginBottom: 36 }}
        >
          {INSIGHTS.map((ins, i) => (
            <InsightCard key={ins.id} insight={ins} delay={i * 0.08} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button variant="outline" size="sm">read all insights</Button>
        </div>
      </div>
    </section>
  );
}
