import MoleculeGraphic from './MoleculeGraphic.jsx';

export default function PageHead({ eyebrow, title, lead }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <div className="page-head-text">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
        <div className="page-head-accent">
          <MoleculeGraphic className="page-head-graphic" />
        </div>
      </div>
    </section>
  );
}
