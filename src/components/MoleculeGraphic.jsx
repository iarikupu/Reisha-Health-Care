export default function MoleculeGraphic({ className }) {
  return (
    <svg className={className} viewBox="0 0 380 380" aria-hidden="true">
      <defs>
        <linearGradient id="moleculeGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ec9dc9" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#moleculeGradLight)" strokeWidth="2" opacity="0.5">
        <line x1="190" y1="190" x2="190" y2="72" />
        <line x1="190" y1="190" x2="298" y2="150" />
        <line x1="190" y1="190" x2="278" y2="288" />
        <line x1="190" y1="190" x2="92" y2="258" />
        <line x1="190" y1="190" x2="82" y2="120" />
        <line x1="298" y1="150" x2="278" y2="288" />
      </g>
      <circle className="molecule-node" cx="190" cy="190" r="26" fill="url(#moleculeGradLight)" opacity="0.9" />
      <circle className="molecule-node" cx="190" cy="72" r="15" fill="url(#moleculeGradLight)" opacity="0.75" />
      <circle className="molecule-node" cx="298" cy="150" r="13" fill="url(#moleculeGradLight)" opacity="0.65" />
      <circle className="molecule-node" cx="278" cy="288" r="17" fill="url(#moleculeGradLight)" opacity="0.7" />
      <circle className="molecule-node" cx="92" cy="258" r="11" fill="url(#moleculeGradLight)" opacity="0.6" />
      <circle cx="82" cy="120" r="9" fill="url(#moleculeGradLight)" opacity="0.5" />
    </svg>
  );
}
