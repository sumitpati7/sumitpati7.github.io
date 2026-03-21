function OverView() {
  return (
    <section id="about" className="min-h-[calc(100vh-74px)] flex items-center justify-center">
      <div className="flex rounded-4xl">
        <div className="left rounded-4xl p-4 mr-16">
          <svg width="460" height="420" viewBox="0 0 460 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg" x1="0" y1="0" x2="460" y2="220">
                <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.15"/>
                <stop offset="100%" stop-color="#22c55e" stop-opacity="0.15"/>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <rect width="460" height="220" rx="16" fill="url(#bg)" />
            <rect x="30" y="70" width="110" height="80" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <text x="45" y="60" fill="#38bdf8" font-size="12" font-family="monospace">Frontend</text>
            <rect x="45" y="95" width="80" height="10" rx="3" fill="#1e293b"/>
            <rect x="45" y="110" width="50" height="10" rx="3" fill="#1e293b"/>
            <rect x="175" y="60" width="110" height="100" rx="10" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
            <text x="195" y="50" fill="#22c55e" font-size="12" font-family="monospace">Backend</text>
            <rect x="195" y="90" width="70" height="10" rx="3" fill="#1e293b"/>
            <rect x="195" y="105" width="70" height="10" rx="3" fill="#1e293b"/>
            <rect x="195" y="120" width="70" height="10" rx="3" fill="#1e293b"/>
            <ellipse cx="380" cy="90" rx="45" ry="15" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
            <rect x="335" y="90" width="90" height="50" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
            <ellipse cx="380" cy="140" rx="45" ry="15" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
            <text x="350" y="55" fill="#a78bfa" font-size="12" font-family="monospace">Database</text>
            <line x1="140" y1="110" x2="175" y2="110" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" filter="url(#glow)"/>
            <line x1="285" y1="110" x2="335" y2="110" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow)" filter="url(#glow)"/>
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
              </marker>
            </defs>

          </svg>
        </div>
        <div className="right max-w-145 flex flex-col gap-4">
          <p className="uppercase tracking-widest text-primary text-xl font-medium">the developer</p>
          <h2 className="text-5xl font-bold text-heading">Building end-to-end solutions for modern web apps</h2>
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
