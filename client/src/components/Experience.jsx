const experience = [
  {
    role: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    duration: 'June – July 2026',
    type: 'Remote',
    points: [
      'Developed responsive web pages using HTML, CSS, and JavaScript, ensuring compatibility across multiple devices and screen sizes.',
      'Built interactive user interface components through DOM manipulation to enhance usability and user engagement.',
      'Collaborated on front-end development tasks while following web development best practices and clean coding standards.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-15 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Experience</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Where I've Worked
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`reveal d${i + 1} bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-accent text-sm font-medium mt-1">
                    {exp.company} · {exp.type}
                  </p>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex gap-2">
                    <span className="text-accent">●</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;