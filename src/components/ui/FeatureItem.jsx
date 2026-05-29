export default function FeatureItem({ children }) {
  return (
    <div className="feature-item">
      <span className="feature-item__icon">✓</span>
      <span>{children}</span>
    </div>
  );
}
