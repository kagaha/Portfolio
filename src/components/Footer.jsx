import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner mono">
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </span>
        <span>Built with React + Vite</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
