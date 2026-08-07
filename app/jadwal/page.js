import ScheduleBoard from "@/components/ScheduleBoard";

import {
  competitionSchedules,
  scheduleDates,
} from "@/data/schedule";

export const metadata = {
  title: "Jadwal",
};

export default function SchedulePage() {
  return (
    <section className="page-section schedule-page">
      <div className="container">
        <div className="schedule-page-intro">
          <span className="eyebrow">Agenda Atlantik 2026</span>

          <h1>Jadwal kegiatan</h1>

          <p className="lead">
            Lihat rangkaian jadwal seluruh cabang permainan. Klik
            salah satu kotak untuk melihat waktu, pertandingan, dan
            lokasi kegiatan.
          </p>
        </div>

        <ScheduleBoard
          dates={scheduleDates}
          competitions={competitionSchedules}
        />
      </div>
    </section>
  );
}
