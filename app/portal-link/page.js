import Link from "next/link";

import { portalLinks } from "@/data/portal-links";

export const metadata = {
  title: "Portal Link",
};

export default function PortalLinkPage() {
  const visibleLinks = portalLinks.filter(
    (item) => item.show
  );

  return (
    <main className="portal-link-page">
      <section className="portal-link-section">
        <div className="portal-link-container">
          <div className="portal-link-icon" aria-hidden="true">
            🏆
          </div>

          <div className="portal-link-heading">
            <span className="eyebrow">
              ATLANTIK 2026
            </span>

            <h1>
              Portal Link
            </h1>

            <p>
              Pilih tautan yang tersedia.
            </p>
          </div>

          <div className="portal-link-list">
            {visibleLinks.map((item) =>
              item.enabled ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="portal-link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.label}</span>

                  <span
                    className="portal-link-more"
                    aria-hidden="true"
                  >
                    •••
                  </span>
                </Link>
              ) : (
                <div
                  key={item.id}
                  className="portal-link-button disabled"
                  aria-disabled="true"
                >
                  <span>{item.label}</span>

                  <span
                    className="portal-link-more"
                    aria-hidden="true"
                  >
                    •••
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}