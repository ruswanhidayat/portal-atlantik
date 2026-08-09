import {
  divisions,
} from "@/data/leaderboard";

import {
  competitionSchedules,
} from "@/data/schedule";

import {
  getCompetitionPeriod,
  getScheduleStatus,
} from "@/lib/game-status";

export function getCompetitionSchedule(
  competitionId
) {
  return competitionSchedules.find(
    (schedule) =>
      schedule.id === competitionId
  );
}

export function getCompetitionScheduleStatus(
  competition,
  now = new Date()
) {
  const schedule =
    getCompetitionSchedule(
      competition.id
    );

  const period =
    getCompetitionPeriod(schedule);

  return getScheduleStatus(
    period,
    now
  );
}

export function hasCompleteResults(
  competition
) {
  return (
    Array.isArray(competition.results) &&
    competition.results.length ===
      divisions.length
  );
}

export function hasResultData(
  competition
) {
  const hasResults =
    Array.isArray(competition.results) &&
    competition.results.length > 0;

  const hasStandings =
    Array.isArray(
      competition.standings?.rows
    ) &&
    competition.standings.rows.length > 0;

  const hasScoreDetails =
    Array.isArray(
      competition.scoreDetails?.rows
    ) &&
    competition.scoreDetails.rows.length > 0;

  return (
    hasResults ||
    hasStandings ||
    hasScoreDetails
  );
}

export function isCompetitionFinal(
  competition,
  now = new Date()
) {
  const scheduleStatus =
    getCompetitionScheduleStatus(
      competition,
      now
    );

  return (
    scheduleStatus === "completed" &&
    hasCompleteResults(competition)
  );
}

export function getCompetitionResultStatus(
  competition,
  now = new Date()
) {
  const scheduleStatus =
    getCompetitionScheduleStatus(
      competition,
      now
    );

  const hasData =
    hasResultData(competition);

  const isFinal =
    isCompetitionFinal(
      competition,
      now
    );

  if (scheduleStatus === "upcoming") {
    return "waiting";
  }

  if (isFinal) {
    return "final";
  }

  if (hasData) {
    return "ongoing";
  }

  return "waiting";
}