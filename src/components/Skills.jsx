import { skills } from "../data.js";
import SkillIcon from "./SkillIcon.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="eyebrow mono reveal">
          <i className="line" /> SKILLS
        </div>
        <h2 className="section-title reveal">
          Tools I <em>work with</em>
        </h2>

        <div className="skills-grid">
          {skills.map((g) => (
            <div className="skill-card reveal" key={g.group}>
              <div className="mono eyebrow-s">{g.group.toUpperCase()}</div>
              <ul className="skill-chips">
                {g.items.map((s) => (
                  <li key={s}>
                    <SkillIcon name={s} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}