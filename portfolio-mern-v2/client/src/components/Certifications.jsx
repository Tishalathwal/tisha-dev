const certifications = [
  {
    title: 'React Certificate',
    issuer: 'HackerRank',
    desc: 'Certified in React.js, covering component-based development and modern frontend practices.',
    logo: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
    dark: false,
  },
  {
    title: 'Node.js (Intermediate)',
    issuer: 'HackerRank',
    desc: 'Certified in Node.js and REST APIs, demonstrating proficiency in building server-side applications.',
    logo: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
    dark: true,
  },
  {
    title: 'Python Programming',
    issuer: 'Infosys Springboard',
    desc: 'Completed coursework covering Python programming fundamentals and core concepts.',
    logo: null,
    dark: false,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            My certifications
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Achievements &amp; Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`reveal d${i + 1} rounded-2xl p-7 border ${
                cert.dark
                  ? 'bg-zinc-900 dark:bg-zinc-800 border-zinc-800'
                  : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'
              }`}
            >
              <p className={`text-sm leading-relaxed mb-6 ${cert.dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {cert.desc}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 bg-white flex items-center justify-center overflow-hidden">
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issuer} className="w-6 h-6" />
                  ) : (
                    <span className="text-accent font-bold text-sm">IS</span>
                  )}
                </div>
                <div>
                  <p className={`font-medium text-sm ${cert.dark ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                    {cert.title}
                  </p>
                  <p className="text-xs text-zinc-500">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
