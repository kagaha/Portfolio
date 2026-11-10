import { useState } from "react";
import { projects } from "../data.js";

function Cover({ project, index }) {
  const [failed, setFailed] = useState(false);
  const hue = (index * 67 + 225) % 360;
  if (!project.image || failed) {
    return (
      <div
        className="cover cover-fallback"
        style={{ background: `linear-gradient(135deg, hsl(${hue} 60% 30%), hsl(${(hue + 50) % 360} 70% 18%))` }}
      >
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <b>{project.title}</b>
      </div>
    );
  }
  return <img className="cover" src={project.image} alt={`${project.title} screenshot`} loading="lazy" onError={() => setFailed(true)} />;
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="eyebrow mono reveal">
          <i className="line" /> PROJECTS
        </div>
        <h2 className="section-title reveal">
          Selected <em>projects</em>
        </h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project reveal" key={p.title}>
              <Cover project={p} index={i} />
              <div className="project-body">
                <div className="mono muted small">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s} className="mono">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live site ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
