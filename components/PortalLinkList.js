"use client";

import { useEffect, useState } from "react";

function getLinkStatus(item, now) {
  if (!item.enabled) {
    return {
      active: false,
      badge: "Tidak Tersedia",
      status: "disabled",
    };
  }

  const activeFrom = item.activeFrom
    ? new Date(item.activeFrom)
    : null;

  const activeUntil = item.activeUntil
    ? new Date(item.activeUntil)
    : null;

  if (activeFrom && now < activeFrom) {
    return {
      active: false,
      badge: "Segera Hadir",
      status: "upcoming",
    };
  }

  if (activeUntil && now > activeUntil) {
    return {
      active: false,
      badge: "Ditutup",
      status: "closed",
    };
  }

  return {
    active: true,
    badge: null,
    status: "active",
  };
}

export default function PortalLinkList({ links }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      setNow(new Date());
    };

    updateTime();

    const interval = setInterval(
      updateTime,
      60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  if (!now) {
    return null;
  }

  const visibleLinks = links.filter(
    (item) => item.show
  );

  return (
    <div className="portal-link-list">
      {visibleLinks.map((item) => {
        const linkStatus =
          getLinkStatus(item, now);

        const content = (
          <>
            <span className="portal-link-label">
              {item.label}
            </span>

            {linkStatus.badge && (
              <span
                className={`portal-link-status ${linkStatus.status}`}
              >
                {linkStatus.badge}
              </span>
            )}
          </>
        );

        if (linkStatus.active) {
          return (
            <a
              key={item.id}
              href={item.href}
              className="portal-link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={item.id}
            className={`portal-link-button disabled ${linkStatus.status}`}
            aria-disabled="true"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}