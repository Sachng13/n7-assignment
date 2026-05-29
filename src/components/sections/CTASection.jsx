import FadeIn from '../ui/FadeIn';
import CTABanner from '../ui/CTABanner';

const CTA_COPY = {
  title: 'Take the full advantage of\ngoing paper-less now.',
  subtitle:
    'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.',
};

export default function CTASection() {
  return (
    <section style={{ padding: '0 var(--section-px) clamp(48px,7vw,80px)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <FadeIn>
          <CTABanner
            title={CTA_COPY.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
            subtitle={CTA_COPY.subtitle}
          />
        </FadeIn>
      </div>
    </section>
  );
}
