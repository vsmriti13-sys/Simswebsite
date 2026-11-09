// Small hand-made illustrations, drawn in SVG so they stay crisp and light.

export function ExpertiseIcon({ index }: { index: number }) {
  const common = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none", "aria-hidden": true } as const;
  switch (index) {
    case 0: // Inclusion: three overlapping circles
      return (
        <svg {...common} stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="13" r="8" />
          <circle cx="22" cy="13" r="8" />
          <circle cx="17" cy="21.5" r="8" />
        </svg>
      );
    case 1: // Methodologies: a spark
      return (
        <svg {...common} fill="currentColor">
          <path d="M17 2c1 7.5 3.5 10 11 11-7.5 1-10 3.5-11 11-1-7.5-3.5-10-11-11 7.5-1 10-3.5 11-11Z" />
          <circle cx="28" cy="27" r="3" />
        </svg>
      );
    case 2: // Technology & AI: a small network
      return (
        <svg {...common} stroke="currentColor" strokeWidth="2">
          <path d="M8 8 17 17M26 8 17 17M17 17v10M8 8h18" />
          <circle cx="8" cy="8" r="4" fill="var(--card)" />
          <circle cx="26" cy="8" r="4" fill="var(--card)" />
          <circle cx="17" cy="17" r="4.5" fill="currentColor" />
          <circle cx="17" cy="28" r="3.5" fill="var(--card)" />
        </svg>
      );
    default: // Professional development: rising steps
      return (
        <svg {...common} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 28h8v-7h8v-7h8V6" />
          <path d="m23 9 5-4 4 5" />
        </svg>
      );
  }
}

export function Orbit({ words }: { words: string[] }) {
  const text = words.map((w) => `${w}  ·  `).join("").repeat(2);
  return (
    <svg className="portrait-orbit" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <path id="orbit-path" d="M200,200 m-182,0 a182,182 0 1,1 364,0 a182,182 0 1,1 -364,0" />
      </defs>
      <circle cx="200" cy="200" r="168" fill="none" stroke="var(--line)" strokeDasharray="2 7" />
      <text>
        <textPath href="#orbit-path" textLength="1135" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

export function SparkLabArt() {
  // A field of experiment traces: waves, particles and a grid, suggesting variables being changed.
  const dots = Array.from({ length: 26 }, (_, i) => {
    const x = 70 + ((i * 137) % 1060);
    const y = 90 + ((i * 89) % 450);
    const r = 3 + (i % 4) * 2;
    const fills = ["#d9a441", "#e9846a", "#7fc4bd", "#f7f2ea"];
    return <circle key={i} cx={x} cy={y} r={r} fill={fills[i % 4]} opacity={0.85} />;
  });
  return (
    <svg viewBox="0 0 1200 630" role="img" aria-label="Abstract illustration of waves and particles for SparkLab">
      <rect width="1200" height="630" fill="#1d2433" />
      <g stroke="#2e3648" strokeWidth="1">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="630" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100 + 15} x2="1200" y2={i * 100 + 15} />
        ))}
      </g>
      <path d="M0 400 C 150 250, 300 250, 450 400 S 750 550, 900 400 S 1100 250, 1200 330" fill="none" stroke="#d9a441" strokeWidth="5" />
      <path d="M0 330 C 200 180, 350 480, 600 330 S 1000 160, 1200 300" fill="none" stroke="#e9846a" strokeWidth="3" strokeDasharray="10 10" />
      <path d="M0 470 C 250 420, 400 560, 650 470 S 1000 380, 1200 450" fill="none" stroke="#7fc4bd" strokeWidth="3" />
      {dots}
      <g transform="translate(600 210)">
        <circle r="78" fill="none" stroke="#f7f2ea" strokeWidth="2" opacity="0.4" />
        <circle r="46" fill="none" stroke="#d9a441" strokeWidth="2" />
        <path d="M0-30c2 18 10 26 28 30-18 4-26 12-28 30-2-18-10-26-28-30 18-4 26-12 28-30Z" fill="#d9a441" />
      </g>
    </svg>
  );
}

export function Thread() {
  // A loose, hand-drawn line that runs under the hero: the learning journey.
  return (
    <svg className="hero-thread" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M-20 80 C 180 20, 320 120, 520 70 S 860 10, 1040 70 S 1300 110, 1460 40"
        fill="none"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function IdeaShape({ index }: { index: number }) {
  const colors = ["var(--terracotta)", "var(--teal)", "var(--ochre-bright)", "var(--plum)"];
  const c = colors[index % 4];
  const shapes = [
    <circle key="a" cx="17" cy="17" r="15" fill={c} />,
    <rect key="b" x="3" y="3" width="28" height="28" rx="6" fill={c} />,
    <path key="c" d="M17 2 32 30H2Z" fill={c} />,
    <path key="d" d="M2 17a15 15 0 0 1 30 0Z" fill={c} />,
  ];
  return (
    <svg className="idea-shape" viewBox="0 0 34 34" aria-hidden="true">
      {shapes[index % 4]}
    </svg>
  );
}

export function Rings() {
  return (
    <svg className="contact-rings" viewBox="0 0 520 520" aria-hidden="true">
      {[250, 200, 150, 100, 50].map((r) => (
        <circle key={r} cx="260" cy="260" r={r} fill="none" stroke="#fff8f2" strokeWidth="2" />
      ))}
    </svg>
  );
}
