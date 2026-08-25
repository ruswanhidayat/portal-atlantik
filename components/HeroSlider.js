"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSlider({
  slides,
  siteConfig,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) =>
        (current + 1) % slides.length
      );
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="hero">
      <div className="container hero-slider">
        <div className="hero-slider-track">
          {slides.map((slide, index) => {
            const panelTitle =
              slide.panel?.useSiteTheme
                ? siteConfig.theme
                : slide.panel?.title;

            const description =
              slide.description ??
              (slide.id === "main"
                ? siteConfig.description
                : null);

            return (
              <div
                key={slide.id}
                className={`hero-slide ${
                  activeSlide === index
                    ? "active"
                    : ""
                }`}
                aria-hidden={
                  activeSlide !== index
                }
              >
                <div className="hero-grid">
                  <div>
                    {slide.pill && (
                      <span className="pill">
                        {slide.pill}
                      </span>
                    )}

                    <h1>
                      {slide.title.map(
                        (line, lineIndex) => (
                          <span
                            key={`${slide.id}-${line}`}
                          >
                            {line}

                            {lineIndex <
                              slide.title.length -
                                1 && <br />}
                          </span>
                        )
                      )}
                    </h1>

                    {description && (
                      <p>{description}</p>
                    )}

                    <div className="actions">
                      {slide.primaryAction &&
                        (slide.primaryAction
                          .external ? (
                          <a
                            className="button primary"
                            href={
                              slide
                                .primaryAction
                                .href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {
                              slide
                                .primaryAction
                                .label
                            }{" "}
                            ↗
                          </a>
                        ) : (
                          <Link
                            className="button primary"
                            href={
                              slide
                                .primaryAction
                                .href
                            }
                          >
                            {
                              slide
                                .primaryAction
                                .label
                            }
                          </Link>
                        ))}

                      {slide.secondaryAction &&
                        (slide.secondaryAction
                          .external ? (
                          <a
                            className="button secondary"
                            href={
                              slide
                                .secondaryAction
                                .href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {
                              slide
                                .secondaryAction
                                .label
                            }{" "}
                            ↗
                          </a>
                        ) : (
                          <Link
                            className="button secondary"
                            href={
                              slide
                                .secondaryAction
                                .href
                            }
                          >
                            {
                              slide
                                .secondaryAction
                                .label
                            }
                          </Link>
                        ))}
                    </div>
                  </div>

                  {slide.panel && (
                    <div className="hero-panel">
                      {slide.panel.eyebrow && (
                        <span className="eyebrow">
                          {
                            slide.panel
                              .eyebrow
                          }
                        </span>
                      )}

                      {panelTitle && (
                        <h2>{panelTitle}</h2>
                      )}

                      {slide.panel
                        .description && (
                        <p>
                          {
                            slide.panel
                              .description
                          }
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {slides.length > 1 && (
          <div
            className="hero-slider-dots"
            aria-label="Navigasi hero"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  activeSlide === index
                    ? "active"
                    : undefined
                }
                aria-label={`Tampilkan slide ${
                  index + 1
                }`}
                aria-current={
                  activeSlide === index
                    ? "true"
                    : undefined
                }
                onClick={() =>
                  setActiveSlide(index)
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}