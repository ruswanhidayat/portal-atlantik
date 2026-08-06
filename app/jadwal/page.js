import { schedule } from "@/data/schedule";

export const metadata = {
  title: "Jadwal",
};

export default function SchedulePage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <span className="eyebrow">Agenda Atlantik 2026</span>

        <h1>Jadwal kegiatan</h1>

        <p className="lead">
          Jadwal akan diperbarui sesuai perkembangan rangkaian acara.
        </p>

        <div className="timeline large">
          {schedule.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div>
                <strong>{item.date}</strong>
                <span>{item.time}</span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <span className="meta">{item.location}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
