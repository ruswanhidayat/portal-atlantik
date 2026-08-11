import Link from "next/link";

import PortalLinkList from "@/components/PortalLinkList";
import { portalLinks } from "@/data/portal-links";

export const metadata = {
  title: "Portal Link",
};

export default function PortalLinkPage() {

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

        <PortalLinkList links={portalLinks} />
        </div>
      </section>
    </main>
  );
}