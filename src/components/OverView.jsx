function OverView() {
  return (
    <section id="about" className="min-h-[calc(100vh-74px)] flex items-center justify-center px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 rounded-4xl">
        <div className="left rounded-4xl p-4 lg:mr-16 shrink-0">
          <svg className="w-70 h-70 sm:w-87.5 sm:h-87.5 md:w-105 md:h-105" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">

            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="420" y2="320">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2"/>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Background */}
            <rect width="420" height="420" rx="20" fill="url(#grad1)" />

            {/* CENTERED GROUP */}
            <g transform="translate(0, 40)">

              {/* Frontend */}
              <rect x="40" y="60" width="120" height="90" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2"/>
              <circle cx="55" cy="75" r="4" fill="#38bdf8"/>
              <circle cx="70" cy="75" r="4" fill="#38bdf8"/>
              <circle cx="85" cy="75" r="4" fill="#38bdf8"/>
              <rect x="55" y="95" width="90" height="10" rx="3" fill="#1e293b"/>
              <rect x="55" y="110" width="60" height="10" rx="3" fill="#1e293b"/>

              {/* Backend */}
              <rect x="260" y="50" width="120" height="110" rx="10" fill="#0f172a" stroke="#22c55e" strokeWidth="2"/>
              <rect x="280" y="70" width="80" height="12" rx="4" fill="#1e293b"/>
              <rect x="280" y="90" width="80" height="12" rx="4" fill="#1e293b"/>
              <rect x="280" y="110" width="80" height="12" rx="4" fill="#1e293b"/>

              {/* Database */}
              <ellipse cx="210" cy="230" rx="60" ry="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="2"/>
              <rect x="150" y="210" width="120" height="40" fill="#0f172a" stroke="#a78bfa" strokeWidth="2"/>
              <ellipse cx="210" cy="210" rx="60" ry="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="2"/>

              {/* Connections */}
              <line x1="160" y1="105" x2="260" y2="105" stroke="#38bdf8" strokeWidth="2" filter="url(#glow)" strokeDasharray="5,5"/>
              <line x1="320" y1="160" x2="240" y2="210" stroke="#22c55e" strokeWidth="2" filter="url(#glow)" strokeDasharray="5,5"/>

              {/* Labels */}
              <text x="60" y="50" fill="#38bdf8" fontSize="12" fontFamily="monospace">Frontend</text>
              <text x="280" y="40" fill="#22c55e" fontSize="12" fontFamily="monospace">Backend</text>
              <text x="175" y="270" fill="#a78bfa" fontSize="12" fontFamily="monospace">Database</text>
            </g>
          </svg>
        </div>
        <div className="right max-w-xl lg:max-w-160 flex flex-col gap-4 text-center lg:text-left">
          <p className="uppercase tracking-widest text-primary text-lg sm:text-xl font-medium">the developer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading">Building end-to-end solutions for modern web apps</h2>
          <p className="text-body text-shadow-primary text-shadow-2xs">
            Versatile full stack developer focused on crafting seamless experiences across both frontend and backend. I specialize in building scalable applications, designing efficient APIs, and delivering intuitive, high-performance user interfaces.
          </p>
          <p className="text-body text-shadow-primary text-shadow-2xs">
            I thrive on turning complex ideas into elegant, functional products—ensuring everything from data flow to user interaction is fast, secure, and reliable.
          </p>
          <p className="text-body text-shadow-primary text-shadow-2xs">
            Passionate about modern technologies, I build clean, maintainable systems that balance performance with great user experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OverView;
