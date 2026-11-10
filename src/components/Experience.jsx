import { useState } from "react";
import { experience } from "../data.js";

// Renders **bold** segments inside a bullet
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="eyebrow mono reveal">
          <i className="line" /> EXPERIENCE
        </div>
        <h2 className="section-title reveal">
          Where I've <em>worked</em>
        </h2>

        <div className="exp reveal">
          <div className="exp-head">
            <div>
              <h3>{experience.title}</h3>
              <p className="exp-company">{experience.company}</p>
            </div>
            <div className="mono muted small exp-meta">
              <span>{experience.period}</span>
              <span>{experience.place}</span>
            </div>
          </div>

          <p className="exp-intro">{experience.intro}</p>

          <ul className="exp-stats">
            {experience.highlights.map((h) => (
              <li key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>

          <div className="acc">
            {experience.projects.map((p, i) => {
              const open = openIdx === i;
              return (
                <div key={p.name} className={`acc-item ${open ? "open" : ""}`}>
                  <button
                    className="acc-btn"
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`acc-panel-${i}`}
                  >
                    <span className="mono muted small">0{i + 1}</span>
                    <span className="acc-title">{p.name}</span>
                    <span className="acc-plus" aria-hidden="true">+</span>
                  </button>

                  <div className="acc-panel" id={`acc-panel-${i}`} role="region" aria-hidden={!open}>
                    <div className="acc-inner">
                      <p className="acc-summary">{p.summary}</p>
                      <ul className="tags">
                        {p.stack.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <ul className="acc-points">
                        {p.points.map((pt) => (
                          <li key={pt}>
                            <Rich text={pt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}