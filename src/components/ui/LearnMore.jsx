export default function LearnMore({ href = '#' }) {
  return (
    <a href={href} className="learn-more">
      learn more <span>→</span>
    </a>
  );
}
