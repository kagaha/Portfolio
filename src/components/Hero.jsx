import { useEffect, useState } from "react";
import { profile, stats, roles } from "../data.js";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  // Always show IST regardless of the visitor's own time zone
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() + profile.utcOffsetMinutes) * 60000);
  const hh = String(ist.getHours()).padStart(2, "0");
  const mm = String(ist.getMinutes()).padStart(2, "0");
  return `${hh}:${mm} ${profile.tzLabel}`;
}

export default function Hero() {
  const time = useClock();
  const role = useTypewriter(roles);

  function useTypewriter(words, typeMs = 70, deleteMs = 35, holdMs = 1600, gapMs = 300) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Respect users who prefer reduced motion: show the first role, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    const word = words[index];
    let t;

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, gapMs);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteMs : typeMs
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs, gapMs]);

  return text;
}

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-top mono">
          <span className="eyebrow">
            <i className="line" /> JAVA FULL STACK DEVELOPER · SPRING BOOT / REACT
          </span>
          <span className="available">
            <i className="dot" /> OPEN TO FULL-TIME ROLES · RELOCATE ANYWHERE IN INDIA
          </span>
        </div>

        <div className="hero-main">
          <h1 className="hero-name">
            <span className="n1">{profile.firstName}</span>
            <em className="n2">{profile.lastName}</em>
          </h1>

          <div className="terminal mono">
            <p>
              <span className="path">~/ruthik</span> <span className="chev">❯</span> whoami
            </p>
            <p className="t-out">
              {role}
              <span className="caret" aria-hidden="true" />
            </p>
            <p>
              <span className="path">~/ruthik</span> <span className="chev">❯</span> date
            </p>
            <p className="t-dim">{time}</p>
          </div>
        </div>

        <div className="hero-rule" />

        <div className="hero-bottom">
          <div>
            <p className="lead">
              {profile.tagline.split("actually use")[0]}
              <em>actually use.</em>
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-light">
                View projects
              </a>
              <a href={profile.resume} download className="btn btn-ghost">
                Download resume ↓
              </a>
            </div>
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="code-card mono" aria-label="profile.ts">
            <div className="code-tabs">
              <span className="tab active">
                <b className="ts">TS</b> profile.ts
              </span>
              <span className="tab">
                <b className="js">JS</b> stack.json
              </span>
              <span className="lights">
                <i />
                <i />
                <i />
              </span>
            </div>
            <pre className="code-body">
              <span className="ln">1</span> <span className="c">// profile.ts</span>
              {"\n"}
              <span className="ln">2</span> <span className="k">const</span> <span className="v">developer</span> = {"{"}
              {"\n"}
              <span className="ln">3</span>   name: <span className="s">"Sai Ruthik Kandimalla"</span>,{"\n"}
              <span className="ln">4</span>   role: <span className="s">"Full Stack Developer"</span>,{"\n"}
              <span className="ln">5</span>   backend: [<span className="s">"Java 21"</span>, <span className="s">"Spring Boot"</span>],{"\n"}
              <span className="ln">6</span>   frontend: [<span className="s">"React"</span>, <span className="s">"TypeScript"</span>],{"\n"}
              <span className="ln">7</span>   data: [<span className="s">"SQL Server"</span>, <span className="s">"Redis"</span>],{"\n"}
              <span className="ln">8</span>   aiAssisted: <span className="k">true</span>,{"\n"}
              <span className="ln">9</span> {"}"};
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
