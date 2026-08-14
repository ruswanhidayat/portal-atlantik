import { competitionSchedules } from "@/data/schedule";

const GRAND_CHAMPION_ID =
  "mission-grand-champion";

function createSessionDate(date, time) {
  return new Date(
    `${date}T${time}:00+07:00`
  );
}

function getGrandChampionSchedule() {
  return competitionSchedules.find(
    (schedule) =>
      schedule.id === GRAND_CHAMPION_ID
  );
}

function getPhaseSessions(phase) {
  const schedule =
    getGrandChampionSchedule();

  if (!schedule || !phase.scheduleTitle) {
    return [];
  }

  const sessions = [];

  Object.entries(
    schedule.sessions ?? {}
  ).forEach(([date, daySessions]) => {
    daySessions.forEach((session) => {
      if (
        session.title ===
        phase.scheduleTitle
      ) {
        sessions.push({
          ...session,
          date,
        });
      }
    });
  });

  return sessions;
}

function getPhasePeriod(phase) {
  const sessions =
    getPhaseSessions(phase);

  if (sessions.length === 0) {
    return null;
  }

  const starts = sessions.map(
    (session) =>
      createSessionDate(
        session.date,
        session.startTime
      )
  );

  const ends = sessions.map(
    (session) =>
      createSessionDate(
        session.date,
        session.endTime
      )
  );

  return {
    start: new Date(
      Math.min(
        ...starts.map((date) =>
          date.getTime()
        )
      )
    ),

    end: new Date(
      Math.max(
        ...ends.map((date) =>
          date.getTime()
        )
      )
    ),
  };
}

export function hasGrandChampionPhaseResults(
  phase
) {
  if (phase.type === "rapid-rush") {
    const snapshots =
      Array.isArray(phase.snapshots)
        ? phase.snapshots
        : [];

    const latestSnapshot =
      snapshots.length > 0
        ? snapshots[
            snapshots.length - 1
          ]
        : null;

    const rapidRushResults =
      latestSnapshot?.results ??
      phase.results ??
      {};

    return Object.values(
      rapidRushResults
    ).some(
      (rows) =>
        Array.isArray(rows) &&
        rows.length > 0
    );
  }

  return (
    Array.isArray(phase.results) &&
    phase.results.length > 0
  );
}

export function getGrandChampionPhaseStatus(
  phase,
  now = new Date()
) {
  if (phase.finalized) {
    return "final";
  }

  const period =
    getPhasePeriod(phase);

  const hasResults =
    hasGrandChampionPhaseResults(
      phase
    );

  if (!period) {
    return hasResults
      ? "ongoing"
      : "waiting";
  }

  if (now < period.start) {
    return "waiting";
  }

  if (
    now >= period.start &&
    now <= period.end
  ) {
    return "ongoing";
  }

  if (hasResults) {
    return "ongoing";
  }

  return "waiting";
}