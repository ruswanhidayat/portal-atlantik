export function getCompetitionPeriod(competition) {
  if (!competition?.sessions) {
    return null;
  }

  const sessions = Object.entries(competition.sessions).flatMap(
    ([date, items]) =>
      items.map((session) => ({
        start: new Date(
          `${date}T${session.startTime}:00+07:00`
        ),
        end: new Date(
          `${date}T${session.endTime}:00+07:00`
        ),
      }))
  );

  if (!sessions.length) {
    return null;
  }

  const starts = sessions.map((session) =>
    session.start.getTime()
  );

  const ends = sessions.map((session) =>
    session.end.getTime()
  );

  return {
    start: new Date(Math.min(...starts)),
    end: new Date(Math.max(...ends)),
  };
}

export function getScheduleStatus(
  period,
  now = new Date()
) {
  if (!period) {
    return "upcoming";
  }

  const currentTime = now.getTime();
  const startTime = new Date(period.start).getTime();
  const endTime = new Date(period.end).getTime();

  if (currentTime < startTime) {
    return "upcoming";
  }

  if (currentTime > endTime) {
    return "completed";
  }

  return "ongoing";
}

export function getGameStatus(
  period,
  now = new Date()
) {
  const status = getScheduleStatus(period, now);

  if (status === "completed") {
    return "Selesai";
  }

  if (status === "ongoing") {
    return "Berlangsung";
  }

  return "Segera hadir";
}