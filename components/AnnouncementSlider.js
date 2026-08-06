"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_DURATION = 6000;

export default function AnnouncementSlider({ announcements = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = announcements.length;

  useEffect(() => {
    if (totalItems <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === totalItems - 1 ? 0 : currentIndex + 1
      );
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [isPaused, totalItems]);

  if (totalItems === 0) {
    return (
      <div className="announcement-slider-empty">
        Belum ada pengumuman terbaru.
      </div>
    );
  }

  const activeAnnouncement = announcements[activeIndex];

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalItems - 1 : currentIndex - 1
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === totalItems - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div
      className={`announcement-slider announcement-theme-${activeAnnouncement.theme}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <button
        type="button"
        className="announcement-slider-arrow previous"
        aria-label="Lihat pengumuman sebelumnya"
        onClick={showPrevious}
        disabled={totalItems <= 1}
      >
        ‹
      </button>

      <div className="announcement-slider-content">
        <div className="announcement-slider-copy">
          <span className="announcement-slider-label">
            {activeAnnouncement.label}
          </span>

          <div className="announcement-slider-text">
            <h3>{activeAnnouncement.title}</h3>
            <p>{activeAnnouncement.summary}</p>
          </div>
        </div>

        {activeAnnouncement.href && (
          <Link
            className="announcement-slider-link"
            href={activeAnnouncement.href}
          >
            {activeAnnouncement.linkLabel || "Lihat informasi"}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      <button
        type="button"
        className="announcement-slider-arrow next"
        aria-label="Lihat pengumuman berikutnya"
        onClick={showNext}
        disabled={totalItems <= 1}
      >
        ›
      </button>

      {totalItems > 1 && (
        <div
          className="announcement-slider-dots"
          aria-label="Pilih pengumuman"
        >
          {announcements.map((item, index) => (
            <button
              type="button"
              className={index === activeIndex ? "active" : ""}
              aria-label={`Tampilkan pengumuman ${index + 1}: ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              key={item.id}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
