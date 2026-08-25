"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { siteConfig } from "@/data/site-config";

/* =========================================================
   MOBILE NAVIGATION
   Tetap menggunakan struktur lama.
   ========================================================= */

const mobileNavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Schedule",
    href: "/jadwal",
  },
  {
    label: "Disciplines",
    href: "/permainan",
  },
  {
    label: "Standings",
    href: "/leaderboard",
  },
  {
    label: "Gallery",
    href: "https://kemenkeu-my.sharepoint.com/:f:/r/personal/hendra_hadisaputro_kemenkeu_go_id/Documents/dokumentasi%20atlantik%202026?d=wa825e5d7508a4144b33d37055baf7bc6&csf=1&web=1&e=mZYmJS",
    external: true,
  },
  {
    label: "Release",
    href: "/pengumuman",
  },
  {
    label: "Portal Link",
    href: "/portal-link",
  },
  {
    label: "Guide Book",
    href: "/guidebook/guidebook_atlantik_2026.pdf",
    external: true,
  },
];

/* =========================================================
   DESKTOP NAVIGATION
   ========================================================= */

const desktopNavItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Games",
    children: [
      {
        label: "Schedule",
        href: "/jadwal",
      },
      {
        label: "Disciplines",
        href: "/permainan",
      },
      {
        label: "Standings",
        href: "/leaderboard",
      },
    ],
  },
  {
    label: "Gallery",
    href: "https://kemenkeu-my.sharepoint.com/:f:/r/personal/hendra_hadisaputro_kemenkeu_go_id/Documents/dokumentasi%20atlantik%202026?d=wa825e5d7508a4144b33d37055baf7bc6&csf=1&web=1&e=mZYmJS",
    external: true,
  },
  {
    label: "Release",
    href: "/pengumuman",
  },

  {
    label: "More",
    children: [
      {
        label: "Portal Link",
        href: "/portal-link",
      },
      {
        label: "Guide Book",
        href: "/guidebook/guidebook_atlantik_2026.pdf",
        external: true,
      },
    ],
  },
];

function isActiveNavigation(pathname, item) {
  if (!item.href || item.external) {
    return false;
  }

  if (item.href === "/") {
    return pathname === "/";
  }

  return (
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`)
  );
}

function isActiveNavigationGroup(
  pathname,
  children
) {
  if (!children) {
    return false;
  }

  return children.some((item) =>
    isActiveNavigation(pathname, item)
  );
}

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isMounted, setIsMounted] =
    useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle(
      "mobile-menu-open",
      isMenuOpen
    );

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.classList.remove(
        "mobile-menu-open"
      );

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isMenuOpen]);

  /* =======================================================
     MOBILE
     ======================================================= */

  const mobileNavigation = (
    <>
      <button
        type="button"
        className={`mobile-menu-overlay ${
          isMenuOpen ? "visible" : ""
        }`}
        aria-label="Tutup menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() =>
          setIsMenuOpen(false)
        }
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
            onClick={() =>
              setIsMenuOpen(false)
            }
          >
            ×
          </button>
        </div>

        <nav
          className="mobile-nav"
          aria-label="Navigasi mobile"
        >
          {mobileNavItems.map(
            (item) => {
              const isActive =
                isActiveNavigation(
                  pathname,
                  item
                );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "active"
                      : undefined
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  target={
                    item.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  tabIndex={
                    isMenuOpen ? 0 : -1
                  }
                >
                  <span>
                    {item.label}
                  </span>

                  <span aria-hidden="true">
                    {item.external
                      ? "↗"
                      : "→"}
                  </span>
                </Link>
              );
            }
          )}
        </nav>
      </aside>
    </>
  );

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          {/* BRAND */}

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

          {/* ===============================================
              DESKTOP NAV
              =============================================== */}

          <nav
            className="nav desktop-nav"
            aria-label="Navigasi utama"
          >
            {desktopNavItems.map(
              (item) => {
                /* Direct link */

                if (item.href) {
                  const isActive =
                    isActiveNavigation(
                      pathname,
                      item
                    );

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        isActive
                          ? "active"
                          : undefined
                      }
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      target={
                        item.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <span>
                        {item.label}
                        {item.external ? " ↗" : ""}
                      </span>
                    </Link>
                  );
                }

                /* Dropdown group */

                const isGroupActive =
                  isActiveNavigationGroup(
                    pathname,
                    item.children
                  );

                return (
                  <div
                    key={item.label}
                    className={`desktop-nav-group ${
                      isGroupActive
                        ? "is-active"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="desktop-nav-trigger"
                      aria-haspopup="true"
                    >
                      <span>
                        {item.label}
                      </span>

                      <span
                        className="desktop-nav-chevron"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </button>

                    <div className="desktop-nav-dropdown">
                      <div className="desktop-nav-dropdown-inner">
                        {item.children?.map(
                          (child) => {
                            const isActive =
                              isActiveNavigation(
                                pathname,
                                child
                              );

                            return (
                              <Link
                                key={
                                  child.href
                                }
                                href={
                                  child.href
                                }
                                className={
                                  isActive
                                    ? "active"
                                    : undefined
                                }
                                aria-current={
                                  isActive
                                    ? "page"
                                    : undefined
                                }
                                target={
                                  child.external
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  child.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={(event) => {
                                  event.currentTarget.blur();
                                }}
                              >
                                <span>
                                  {
                                    child.label
                                  }
                                </span>

                                <span
                                  className="desktop-nav-dropdown-arrow"
                                  aria-hidden="true"
                                >
                                  {child.external
                                    ? "↗"
                                    : "→"}
                                </span>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </nav>

          {/* ===============================================
              MOBILE TOGGLE
              =============================================== */}

          <button
            type="button"
            className={`mobile-menu-toggle ${
              isMenuOpen
                ? "active"
                : ""
            }`}
            aria-label={
              isMenuOpen
                ? "Tutup menu"
                : "Buka menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMenuOpen(
                (current) => !current
              )
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