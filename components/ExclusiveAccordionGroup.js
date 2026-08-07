"use client";

import { useEffect, useRef } from "react";

export default function ExclusiveAccordionGroup({
  children,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const detailsElements = Array.from(
      container.querySelectorAll(":scope > details")
    );

    const handleToggle = (event) => {
      const openedDetails = event.currentTarget;

      if (!openedDetails.open) {
        return;
      }

      detailsElements.forEach((details) => {
        if (details !== openedDetails && details.open) {
          details.open = false;
        }
      });
    };

    detailsElements.forEach((details) => {
      details.addEventListener("toggle", handleToggle);
    });

    return () => {
      detailsElements.forEach((details) => {
        details.removeEventListener("toggle", handleToggle);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
