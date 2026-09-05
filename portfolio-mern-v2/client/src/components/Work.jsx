const projects = [
  {
    title: 'Job Application Tracker',
    desc: 'A full-stack web app to track job applications, built with React, Redux Toolkit, and Firebase Auth + Firestore. Includes charts for tracking progress with Recharts.',
    tags: ['React', 'Redux Toolkit', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Tishalathwal/job-application-tracker',
    live: 'https://tisha-job-tracker-25f6bc.netlify.app/login',
  },
  {
    title: 'Face Recognition Attendance System',
    desc: 'A Python-based attendance system using face recognition, built with OpenCV, dlib, and a Tkinter desktop interface, backed by SQLite.',
    tags: ['Python', 'OpenCV', 'dlib', 'SQLite', 'Tkinter'],
    github: 'https://github.com/Tishalathwal/face-recognition-attendance-system',
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'personal portfolio built with the MERN stack — React and Tailwind CSS on the frontend, Express and MongoDB on the backend to handle contact form submissions.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Tishalathwal',
    live: 'https://tishalathwalportfolio.netlify.app',
  },
  {
    title: 'Spydy — Desktop Pet App',
    desc: 'A Windows desktop pet app where a spider appears periodically on screen, built with Python and PySide6, with a tray icon and autostart support.',
    tags: ['Python', 'PySide6'],
    github: 'https://github.com/Tishalathwal/spydy-py',
  },
];

function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">My work</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`reveal d${(i % 4) + 1} card-h bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent`}
            >
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-900 dark:text-white hover:text-accent transition-colors"
                >
                  GitHub →
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-900 dark:text-white hover:text-accent transition-colors"
                  >
                    Live Preview →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
