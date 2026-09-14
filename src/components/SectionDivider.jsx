export default function SectionDivider({ variant = '' }) {
  return (
    <svg
      className={`section-divider${variant ? ` ${variant}` : ''}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z"></path>
    </svg>
  );
}
