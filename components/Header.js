"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site-config";

const navItems = [
  ["Beranda", "/"],
  ["Jadwal", "/jadwal"],
  ["Pengumuman", "/pengumuman"],
  ["Permainan", "/permainan"],
  ["Leaderboard", "/leaderboard"],
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Atlantik 2026">
          <Image
            src="/logo/logo-atlantik-header.png"
            alt={siteConfig.name}
            width={220}
            height={56}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="nav desktop-nav" aria-label="Navigasi utama">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className={`mobile-menu-overlay ${isMenuOpen ? "visible" : ""}`}
        aria-label="Tutup menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-head">
          <span>Menu</span>

          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Tutup menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Navigasi mobile">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : undefined}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>{label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
