import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const navItems = [
  ["Beranda", "/"],
  ["Jadwal", "/jadwal"],
  ["Pengumuman", "/pengumuman"],
  ["Permainan", "/permainan"],
  ["Leaderboard", "/leaderboard"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Atlantik 2026">
          <span className="brand-mark">A</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>Event Portal</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Navigasi utama">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
