// Ambient page background: navy gradient, animated grid, drifting
// gradient blobs, floating particles and a very subtle noise texture.
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61 + 13) % 100,
  top: (i * 37 + 7) % 100,
  delay: (i * 0.9) % 9,
  duration: 10 + (i % 5) * 3,
  size: 2 + (i % 3),
  emerald: i % 4 === 0,
}))

export default function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob--cyan" />
      <div className="bg-blob bg-blob--emerald" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`bg-particle ${p.emerald ? 'bg-particle--emerald' : ''}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <div className="bg-noise" />
    </div>
  )
}
