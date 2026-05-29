/**
 * Reusable button.
 * variant: 'primary' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['btn', `btn-${variant}`, size !== 'md' ? `btn-${size}` : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
