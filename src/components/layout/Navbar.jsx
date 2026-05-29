import { useScrolled } from '../../hooks/useScrolled';
import { NAV_LINKS } from '../../constants/data';
import Button from '../ui/Button';

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      padding: '0 var(--section-px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 22,
        color: '#fff',
        letterSpacing: -1,
      }}>
        N<span style={{ color: 'var(--color-accent)' }}>7</span>
      </a>

      {/* Nav links */}
      <div className="nav__links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: 13,
              color: 'var(--color-text-secondary)',
              fontWeight: 500,
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={e => (e.target.style.color = '#fff')}
            onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
          >
            {label}
          </a>
        ))}
        <Button size="sm">Request Demo</Button>
      </div>
    </nav>
  );
}
