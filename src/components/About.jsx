import { profile, quickFacts, education, certifications } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="eyebrow mono reveal">
          <i className="line" /> ABOUT
        </div>
        <h2 className="section-title reveal">
          About <em>Ruthik</em>
        </h2>

        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-lead">
              Java full-stack developer with 1+ year of experience building enterprise microservices with Spring Boot and
              React. I'm looking for a full-time role where I can own features end to end.
            </p>
            <p>
              At <strong>Solera Holdings</strong> I worked on a greenfield microservices product, <strong>ARIIA</strong>,
              building RBAC user interfaces, appointment APIs, event-driven notifications with RabbitMQ and the SQL Server
              schema underneath. I also integrated Azure AD B2C-based SSO across <strong>9 titling applications</strong> and
              built backend services for the <strong>Solera Intelligence Center</strong>.
            </p>
            <p>
              I use spec-driven, AI-assisted development (Spec Kit, GitHub Copilot, Claude) to cut delivery time without
              dropping review standards: a production-ready User CRUD module in 1 day instead of 3–4.
            </p>
            <p>
              I graduated in Computer Science and Engineering in 2025 with a 9.3 CGPA. I'm based in Anantapur and open to
              relocating anywhere in India, with a preference for Hyderabad, Bengaluru, Chennai and Coimbatore.
            </p>
          </div>

          <aside className="about-side reveal">
            <div className="id-card">
              <div className="id-top mono">
                <span>DEVELOPER ID</span>
                <span className="active-pill">
                  <i className="dot" /> OPEN TO WORK
                </span>
              </div>
              <div className="orbit">
                <div className="ring r1" />
                <div className="ring r2" />
                <span className="mono-initials">{profile.initials}</span>
                <span className="chip c1" title="React" aria-label="React">Re</span>
                <span className="chip c2" title="Java" aria-label="Java">Jv</span>
                <span className="chip c3" title="Spring Boot" aria-label="Spring Boot">Sp</span>
                <span className="chip c4" title="TypeScript" aria-label="TypeScript">TS</span>
              </div>
              <h3>
                {profile.firstName} {profile.lastName}
              </h3>
              <p className="mono muted small">Full-Stack Developer · Open to relocate</p>
            </div>

            <div className="facts">
              <div className="mono eyebrow-s">QUICK FACTS</div>
              {quickFacts.map(([k, v]) => (
                <div className="fact" key={k}>
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="edu-grid reveal">
          <div>
            <div className="mono eyebrow-s">EDUCATION</div>
            {education.map((e) => (
              <div className="edu" key={e.title}>
                <h4>{e.title}</h4>
                <p>{e.place}</p>
                <p className="mono muted small">
                  {e.period} · {e.note}
                </p>
              </div>
            ))}
          </div>
          <div>
            <div className="mono eyebrow-s">CERTIFICATIONS</div>
            {certifications.map((c) => (
              <div className="edu" key={c}>
                <h4>{c}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
