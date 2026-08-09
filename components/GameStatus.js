"use client";

import { useEffect, useState } from "react";

import { getGameStatus } from "@/lib/game-status";

export default function GameStatus({
  schedulePeriod,
}) {
  const [status, setStatus] = useState(() =>
    getGameStatus(schedulePeriod)
  );

  useEffect(() => {
    const updateStatus = () => {
      setStatus(
        getGameStatus(schedulePeriod)
      );
    };

    updateStatus();

    const interval = window.setInterval(
      updateStatus,
      60 * 1000
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [schedulePeriod]);

  return (
    <span className="status">
      {status}
    </span>
  );
}