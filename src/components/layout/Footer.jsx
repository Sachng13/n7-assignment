import { OFFICES, FOOTER_LINKS } from '../../constants/data';

export default function Footer() {
  return (
    <footer style={{
      background: '#060610',
      borderTop: '1px solid var(--color-border-light)',
      padding: 'clamp(48px,6vw,80px) var(--section-px) 32px',
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Big logo */}
        <div style={{ marginBottom: 48 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(60px,9vw,96px)',
            color: '#fff',
            letterSpacing: -4,
            lineHeight: 1,
          }}>
            N<span style={{ color: 'var(--color-accent)' }}>7</span>
          </span>
        </div>

        {/* Offices */}
        <div
          className="footer__offices"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 48 }}
        >
          {OFFICES.map(({ city, address }) => (
            <div key={city + address} style={{
              padding: '20px 22px',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border-light)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <p style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 700, marginBottom: 8 }}>
                {city}
              </p>
              <p style={{ fontSize: 11, color: 'var(--color-text-faint)', lineHeight: 1.75 }}>
                {address}
              </p>
            </div>
          ))}
        </div>

        {/* Link columns */}
        <div
          className="footer__links"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, marginBottom: 48 }}
        >
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <p style={{
                fontSize: 10,
                color: 'var(--color-text-muted)',
                fontWeight: 600,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                {heading}
              </p>
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: 'block',
                    fontSize: 12,
                    color: 'var(--color-text-faint)',
                    marginBottom: 10,
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={e => (e.target.style.color = '#aaa')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-faint)')}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: 24,
          fontSize: 11,
          color: '#2e2e3a',
        }}>
          Copyright by Linktia Infosystems Limited. CB7 and D7 as Commercial Brand Registered
          under the Companies Act in England and Wales.
        </div>
      </div>
    </footer>
  );
}
