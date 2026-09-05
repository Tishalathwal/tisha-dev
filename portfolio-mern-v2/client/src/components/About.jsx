const skills = [
  'React.js', 'Node.js', 'Express.js', 'JavaScript', 'MongoDB',
  'Python', 'Tailwind CSS', 'Firebase', 'Git', 'GitHub', 'VS Code', 'Postman',
];

function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl">
              <img src="/photo.jpeg" alt="Tisha Lathwal — Full Stack Developer" loading="lazy" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">About me</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
              A bit about<br />who I am
            </h2>
            <p className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              I'm Tisha Lathwal, a Full Stack Developer and final year MCA
              student. I specialize in the MERN stack, with hands-on
              experience in Python for automation and ML-based projects. I
              thrive at the intersection of clean design and solid code.
            </p>
            <p className="reveal d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              I believe great interfaces are invisible — they get out of
              the user's way. My work is fast, accessible, and built to
              last. When I'm not coding, you'll find me exploring new
              technologies or working on side projects.
            </p>
            <div className="reveal d4">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                Stack &amp; tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
