import { useInView } from '../../hooks/useInView';

/**
 * Wraps children in a div that fades up into view on scroll.
 * @param {number} delay  - CSS transition delay in seconds
 * @param {string} className
 * @param {object} style  - extra inline styles on the wrapper
 */
export default function FadeIn({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
