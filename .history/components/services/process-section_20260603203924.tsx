"use client";

const process = [
  {
    step: "01",
    title: "Consultation",
  },
  {
    step: "02",
    title: "Assessment",
  },
  {
    step: "03",
    title: "Investigation",
  },
  {
    step: "04",
    title: "Resolution",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            How We Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="text-5xl font-bold text-teal-400">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}