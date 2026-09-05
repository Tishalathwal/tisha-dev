const services = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, pixel-perfect interfaces with React and modern CSS. Clean, fast, and accessible UI that works seamlessly across devices.',
    dark: false,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    ),
  },
  {
    title: 'Backend Development',
    desc: 'Designing robust APIs and server-side logic with Node.js, Express, and MongoDB. Secure, scalable systems that power real applications.',
    dark: true,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'Software Development with Python',
    desc: 'Building practical software solutions using Python — from automation scripts to ML-based tools like face recognition systems, solving real-world problems.',
    dark: false,
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">What I do</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal d${i + 1} card-h group rounded-2xl p-8 border hover:border-accent ${
                s.dark
                  ? 'bg-zinc-900 dark:bg-zinc-800 border-zinc-800'
                  : 'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'
              }`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 transition-colors ${
                  s.dark
                    ? 'bg-zinc-800 dark:bg-zinc-700 group-hover:bg-accent/20'
                    : 'bg-orange-50 dark:bg-zinc-800 group-hover:bg-accent/10'
                }`}
              >
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {s.icon}
                </svg>
              </div>
              <h3 className={`font-display font-bold text-xl mb-3 ${s.dark ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed ${s.dark ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
