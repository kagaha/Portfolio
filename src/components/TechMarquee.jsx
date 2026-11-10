import SkillIcon from "./SkillIcon.jsx";

const rowOne = ["Java 21", "Spring Boot 3.x", "Spring Data JPA", "Spring Security", "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"];
const rowTwo = ["SQL Server", "MySQL", "Redis", "RabbitMQ", "Apache Kafka", "Docker", "Jenkins", "Git", "GitHub", "Maven", "Postman", "AWS (Cloud Practitioner)"];

function Marquee({ items, reverse = false }) {
  const loop = [...items, ...items]; // doubled for a seamless loop
  return (
    <div className={`marquee ${reverse ? "rev" : ""}`}>
      <div className="marquee-track">
        {loop.map((name, idx) => (
          <span className="m-item" key={`${name}-${idx}`} aria-hidden={idx >= items.length}>
            <SkillIcon name={name} />
            {name.replace(" (Cloud Practitioner)", "").replace(" 3.x", "")}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="tech-strip" aria-label="Technologies I work with">
      <div className="container">
        <div className="eyebrow mono tech-label">
          <i className="line" /> TECH STACK
        </div>
      </div>
      <div className="marquee-wrap">
        <Marquee items={rowOne} />
        <Marquee items={rowTwo} reverse />
      </div>
    </div>
  );
}