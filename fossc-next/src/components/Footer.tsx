import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>FOSSCU.</h2>
          <p>Free and Open Source Software Community United.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Community</h4>
            <a href="https://dub.sh/fosscu" target="_blank" rel="noreferrer">Join Us</a>
            <a href="https://github.com/FOSS-Community" target="_blank" rel="noreferrer">Contribute</a>
            <a href="https://docs.fosscu.org/docs/values" target="_blank" rel="noreferrer">Core Values</a>
            <a href="https://docs.fosscu.org/docs/code-of-conduct" target="_blank" rel="noreferrer">Code of Conduct</a>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <a href="https://docs.fosscu.org" target="_blank" rel="noreferrer">Docs</a>
            <a href="https://github.com/FOSS-Community" target="_blank" rel="noreferrer">Guides</a>
            <a href="https://blog.fosscu.org" target="_blank" rel="noreferrer">Blog</a>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="link-group">
            <h4>About</h4>
            <Link href="/about">About Us</Link>
            <a href="https://docs.fosscu.org/docs/getting-started" target="_blank" rel="noreferrer">What is FOSS</a>
            <a href="https://status.fosscu.org" target="_blank" rel="noreferrer">API Status</a>
            <a href="https://fosscu.org/terms" target="_blank" rel="noreferrer">Terms</a>
          </div>
          <div className="link-group">
            <h4>Social</h4>
            <a href="https://github.com/FOSS-Community" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://x.com/fosscuk" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://dub.sh/fosscu" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://www.linkedin.com/company/fosscu/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 FOSSCU. All rights reserved.</p>
        <div className="legal-links">
          <Link href="/about">About Us</Link>
          <a href="https://fosscu.org/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
