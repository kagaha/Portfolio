import { useState } from "react";
import { skillIcons } from "../data/skillIcons.js";

export default function SkillIcon({ name }) {
  const icon = skillIcons[name];
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return <span className="ico ico-mono" aria-hidden="true">{name.trim()[0]}</span>;
  }
  return (
    <img
      className={`ico ${icon.invert ? "ico-invert" : ""}`}
      src={icon.src}
      alt=""
      loading="lazy"
      width="22"
      height="22"
      onError={() => setFailed(true)}
    />
  );
}