import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 {siteConfig.name}</span>
        <span>{siteConfig.theme}</span>
      </div>
    </footer>
  );
}
