// import { useState } from "react";
// import { profile } from "../data.js";

// const topics = ["A job opportunity", "A freelance project", "Something else"];

// export default function Contact() {
//   const [topic, setTopic] = useState(topics[0]);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   // No backend needed: opens the visitor's mail app with the message pre-filled.
//   // To use a real form service (Formspree, EmailJS, etc.), replace this handler.
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const subject = encodeURIComponent(`${topic} — from ${form.name}`);
//     const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
//     window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
//     setSent(true);
//   };

//   return (
//     <section className="section" id="contact">
//       <div className="container">
//         <div className="eyebrow mono reveal">
//           <i className="line" /> CONTACT
//         </div>
//         <h2 className="section-title reveal">
//           Let's <em>talk</em>
//         </h2>

//         <div className="contact-grid">
//           <form className="form reveal" onSubmit={onSubmit}>
//             <h3>Send a message</h3>
//             <p className="muted">All fields are required.</p>

//             <div className="row">
//               <label>
//                 <span className="mono eyebrow-s">YOUR NAME</span>
//                 <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
//               </label>
//               <label>
//                 <span className="mono eyebrow-s">EMAIL</span>
//                 <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
//               </label>
//             </div>

//             <div>
//               <span className="mono eyebrow-s">WHAT IS IT ABOUT?</span>
//               <div className="pills" role="radiogroup">
//                 {topics.map((t) => (
//                   <button type="button" key={t} role="radio" aria-checked={topic === t} className={`pill ${topic === t ? "on" : ""}`} onClick={() => setTopic(t)}>
//                     {t}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <label>
//               <span className="mono eyebrow-s">MESSAGE</span>
//               <textarea
//                 name="message"
//                 rows="5"
//                 value={form.message}
//                 onChange={onChange}
//                 required
//                 placeholder="A few lines about the role or project, timelines, and how to reach you."
//               />
//             </label>

//             <div className="form-foot">
//               <button className="btn btn-light" type="submit">
//                 Send message
//               </button>
//               {sent && <span className="muted small">Opening your mail app…</span>}
//             </div>
//           </form>

//           <aside className="direct reveal">
//             <div className="mono eyebrow-s">DIRECT</div>
//             <a className="direct-row" href={`mailto:${profile.email}`}>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <rect x="3" y="5" width="18" height="14" rx="2" />
//                 <path d="M3 7l9 6 9-6" />
//               </svg>
//               {profile.email}
//             </a>
//             <a className="direct-row" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
//                 <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
//               </svg>
//               {profile.phone}
//             </a>
//             <div className="direct-row">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
//                 <circle cx="12" cy="10" r="2.5" />
//               </svg>
//               {profile.location} · {profile.tzLabel}
//             </div>

//             <div className="mono eyebrow-s" style={{ marginTop: 40 }}>
//               ELSEWHERE
//             </div>
//             <a className="direct-row" href={profile.github} target="_blank" rel="noreferrer">
//               GitHub ↗
//             </a>
//             <a className="direct-row" href={profile.linkedin} target="_blank" rel="noreferrer">
//               LinkedIn ↗
//             </a>
//             <a className="direct-row" href={profile.resume} download>
//               Download resume ↓
//             </a>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import { profile, hiring } from "../data.js";

const details = [
  ["Looking for", hiring.roles],
  ["Location", hiring.location],
  ["Preferred cities", hiring.preferred],
  ["Work mode", hiring.mode],
  ["Availability", hiring.notice],
  ["Response time", hiring.reply],
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Full-time opportunity${form.role ? ` - ${form.role}` : ""}${form.company ? ` at ${form.company}` : ""}`;
    const body = `Hi ${profile.firstName},\n\n${form.message}\n\n${form.name}\n${form.company}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="eyebrow mono reveal">
          <i className="line" /> CONTACT
        </div>
        <h2 className="section-title reveal">
          Hiring? <em>Let's talk.</em>
        </h2>

        <div className="hire-grid">
          {/* Left: status + actions */}
          <div className="reveal">
            <div className="status-card">
              <div className="status-top mono">
                <span className="available">
                  <i className="dot" /> {hiring.status.toUpperCase()}
                </span>
              </div>
              <p className="hire-lead">
                I'm looking for a full-time role where I can build enterprise Java and React products.
              </p>

              <dl className="detail-list">
                {details.map(([k, v]) => (
                  <div className="detail-row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="cta-row">
              <a
                className="btn btn-light"
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Full-time opportunity")}`}
              >
                Email me
              </a>
              <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                {copied ? "Copied ✓" : "Copy email"}
              </button>
              <a className="btn btn-ghost" href={profile.resume} download>
                Resume ↓
              </a>
            </div>

            <div className="link-row mono">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </div>
          </div>

          {/* Right: short recruiter form */}
          <form className="recruiter-form reveal" onSubmit={onSubmit}>
            <h3>Send a role</h3>
            <p className="muted small">Share the role and I'll get back to you.</p>

            <div className="field-row">
              <label>
                <span className="mono eyebrow-s">YOUR NAME</span>
                <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              </label>
              <label>
                <span className="mono eyebrow-s">COMPANY</span>
                <input name="company" value={form.company} onChange={onChange} required autoComplete="organization" />
              </label>
            </div>
            <div className="field-row">
              <label>
                <span className="mono eyebrow-s">WORK EMAIL</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
              </label>
              <label>
                <span className="mono eyebrow-s">ROLE TITLE</span>
                <input name="role" value={form.role} onChange={onChange} placeholder="e.g. Software Engineer" />
              </label>
            </div>
            <label>
              <span className="mono eyebrow-s">MESSAGE OR JOB LINK</span>
              <textarea name="message" rows={4} value={form.message} onChange={onChange} required
                placeholder="Role details, location, and next steps." />
            </label>
            <button type="submit" className="btn btn-light">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}