import {
  competitions,
  divisions,
  pointRules,
} from "@/data/leaderboard";

import {
  isCompetitionFinal,
} from "@/lib/competition-status";


function isAtlantikRun(
  competition
) {
  return (
    competition.standings?.type ===
    "atlantik-run"
  );
}


function getAtlantikRunCategories(
  competition
) {
  return [
    {
      id: "male",
      label: "Putra",
      rows:
        competition.standings?.male ??
        [],
    },
    {
      id: "female",
      label: "Putri",
      rows:
        competition.standings?.female ??
        [],
    },
  ];
}


function validateDivisionIds(
  competition,
  rows,
  label
) {
  const seen =
    new Set();

  rows.forEach((row) => {
    const divisionId =
      row.divisionId;

    if (
      !divisions.some(
        (division) =>
          division.id ===
          divisionId
      )
    ) {
      throw new Error(
        `ID Subdit "${divisionId}" pada ${competition.name} ${label} tidak ditemukan.`
      );
    }

    if (
      seen.has(
        divisionId
      )
    ) {
      throw new Error(
        `Hasil ${competition.name} ${label} berisi Subdit yang sama lebih dari satu kali.`
      );
    }

    seen.add(
      divisionId
    );
  });
}


function validateCompetitionResults(
  competition
) {
  if (
    isAtlantikRun(
      competition
    )
  ) {
    getAtlantikRunCategories(
      competition
    ).forEach(
      (category) => {
        validateDivisionIds(
          competition,
          category.rows,
          category.label
        );
      }
    );

    return;
  }


  const uniqueResults =
    new Set(
      competition.results
    );


  if (
    uniqueResults.size !==
    competition.results.length
  ) {
    throw new Error(
      `Hasil ${competition.name} berisi Subdit yang sama lebih dari satu kali.`
    );
  }


  competition.results.forEach(
    (divisionId) => {
      if (
        !divisions.some(
          (division) =>
            division.id ===
            divisionId
        )
      ) {
        throw new Error(
          `ID Subdit "${divisionId}" pada ${competition.name} tidak ditemukan.`
        );
      }
    }
  );
}


function addPlacementToTotal(
  totals,
  divisionId,
  rank,
  points
) {
  const division =
    totals[divisionId];

  if (!division) {
    return;
  }


  division.totalPoints +=
    points;

  division.completedGames++;


  if (rank === 1) {
    division.firstPlaces++;
  }


  if (rank === 2) {
    division.secondPlaces++;
  }
}


export function getLeaderboard(
  now = new Date(),
  competitionList = competitions
) {
  const totals =
    Object.fromEntries(
      divisions.map(
        (division) => [
          division.id,
          {
            ...division,
            totalPoints: 0,
            firstPlaces: 0,
            secondPlaces: 0,
            completedGames: 0,
          },
        ]
      )
    );


  competitionList.forEach(
    (competition) => {
      validateCompetitionResults(
        competition
      );


      /*
       * Results hanya dihitung ke Juara Umum
       * jika pertandingan sudah selesai/final.
       *
       * Atlantik Run memakai status final dari API,
       * bukan hasil kalkulasi jadwal Portal.
       */
      if (
        !isCompetitionFinal(
          competition,
          now
        )
      ) {
        return;
      }


      const rule =
        pointRules[
          competition
            .scoringCategory
        ];


      if (!rule) {
        return;
      }


      /*
       * Atlantik Run mempunyai dua nomor penilaian:
       * Putra dan Putri.
       *
       * Keduanya memakai aturan poin Sports secara
       * independen, lalu dijumlahkan ke Juara Umum.
       */
      if (
        isAtlantikRun(
          competition
        )
      ) {
        getAtlantikRunCategories(
          competition
        ).forEach(
          (category) => {
            category.rows.forEach(
              (row) => {
                const rank =
                  Number(
                    row.rank
                  );

                if (
                  !Number.isInteger(
                    rank
                  ) ||
                  rank < 1
                ) {
                  return;
                }


                addPlacementToTotal(
                  totals,
                  row.divisionId,
                  rank,
                  rule.points[
                    rank - 1
                  ] ?? 0
                );
              }
            );
          }
        );

        return;
      }


      competition.results.forEach(
        (
          divisionId,
          index
        ) => {
          addPlacementToTotal(
            totals,
            divisionId,
            index + 1,
            rule.points[
              index
            ] ?? 0
          );
        }
      );
    }
  );


  return Object.values(
    totals
  )
    .sort(
      (a, b) =>
        b.totalPoints -
          a.totalPoints ||
        b.firstPlaces -
          a.firstPlaces ||
        b.secondPlaces -
          a.secondPlaces ||
        a.name.localeCompare(
          b.name
        )
    )
    .map(
      (
        division,
        index
      ) => ({
        ...division,
        rank: index + 1,
      })
    );
}


export function getCompetitionRows(
  competition
) {
  validateCompetitionResults(
    competition
  );


  /*
   * Atlantik Run dirender dengan tabel khusus
   * Putra dan Putri di halaman leaderboard.
   */
  if (
    isAtlantikRun(
      competition
    )
  ) {
    return [];
  }


  const rule =
    pointRules[
      competition
        .scoringCategory
    ];


  if (!rule) {
    return [];
  }


  return competition.results.map(
    (
      divisionId,
      index
    ) => ({
      division:
        divisions.find(
          (item) =>
            item.id ===
            divisionId
        ),

      rank:
        index + 1,

      resultLabel:
        `Juara ${
          index + 1
        }`,

      points:
        rule.points[
          index
        ] ?? 0,
    })
  );
}


export function getDivisionPointBreakdown(
  divisionId,
  now = new Date(),
  competitionList = competitions
) {
  return competitionList
    .filter(
      (competition) =>
        isCompetitionFinal(
          competition,
          now
        )
    )
    .flatMap(
      (competition) => {
        const rule =
          pointRules[
            competition
              .scoringCategory
          ];


        if (!rule) {
          return [];
        }


        /*
         * Atlantik Run tampil sebagai dua baris
         * pada modal rincian poin:
         *
         * Atlantik Run 2026 — Putra
         * Atlantik Run 2026 — Putri
         */
        if (
          isAtlantikRun(
            competition
          )
        ) {
          return getAtlantikRunCategories(
            competition
          )
            .map(
              (category) => {
                const row =
                  category.rows.find(
                    (item) =>
                      item.divisionId ===
                      divisionId
                  );


                if (!row) {
                  return null;
                }


                const rank =
                  Number(
                    row.rank
                  );


                if (
                  !Number.isInteger(
                    rank
                  ) ||
                  rank < 1
                ) {
                  return null;
                }


                return {
                  competitionId:
                    `${competition.id}-${category.id}`,

                  competitionName:
                    `${competition.name} — ${category.label}`,

                  rank,

                  resultLabel:
                    `Juara ${rank}`,

                  points:
                    rule.points[
                      rank - 1
                    ] ?? 0,
                };
              }
            )
            .filter(
              Boolean
            );
        }


        const index =
          competition.results.indexOf(
            divisionId
          );


        if (
          index === -1
        ) {
          return [];
        }


        return [
          {
            competitionId:
              competition.id,

            competitionName:
              competition.name,

            rank:
              index + 1,

            resultLabel:
              `Juara ${
                index + 1
              }`,

            points:
              rule.points[
                index
              ] ?? 0,
          },
        ];
      }
    );
}