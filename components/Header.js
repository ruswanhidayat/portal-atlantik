"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { siteConfig } from "@/data/site-config";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Jadwal",
    href: "/jadwal",
  },
  {
    label: "Pengumuman",
    href: "/pengumuman",
  },
  {
    label: "Permainan",
    href: "/permainan",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
  },
  {
    label: "Guide Book",
    href: "/guidebook/guidebook_atlantik_2026.pdf",
    external: true,
  },
  {
    label: "Portal Link",
    href: "/portal-link",
    external: true,
  },
];

function isActiveNavigation(pathname, item) {
  if (item.external) {
    return false;
  }

  if (item.href === "/") {
    return pathname === "/";
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const mobileNavigation = (
    <>
      <button
        type="button"
        className={`mobile-menu-overlay ${
          isMenuOpen ? "visible" : ""
        }`}
        aria-label="Tutup menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-menu-drawer ${
          isMenuOpen ? "open" : ""
        }`}
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

        <nav
          className="mobile-nav"
          aria-label="Navigasi mobile"
        >
          {navItems.map((item) => {
            const isActive = isActiveNavigation(pathname, item);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span>{item.label}</span>

                <span aria-hidden="true">
                  {item.external ? "↗" : "→"}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Atlantik 2026"
          >
            <Image
              src="/logo/logo-atlantik-header.png"
              alt={siteConfig.name}
              width={220}
              height={56}
              priority
              className="brand-logo"
            />
          </Link>

          <nav
            className="nav desktop-nav"
            aria-label="Navigasi utama"
          >
            {navItems.map((item) => {
              const isActive = isActiveNavigation(pathname, item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span>{item.label}</span>

                  {item.external && (
                    <span
                      className="desktop-nav-external-icon"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={`mobile-menu-toggle ${
              isMenuOpen ? "active" : ""
            }`}
            aria-label={
              isMenuOpen ? "Tutup menu" : "Buka menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isMounted &&
        createPortal(
          mobileNavigation,
          document.body
        )}
    </>
  );
}
