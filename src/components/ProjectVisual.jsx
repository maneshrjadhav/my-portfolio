import {
  FileSearch,
  HeartPulse,
  Tractor,
  Compass,
  ShieldCheck,
  Bot,
  User,
  CheckCircle2,
  Vote,
} from 'lucide-react'

/**
 * CSS/React-generated UI mockups used as project previews.
 * Each project gets a distinct mini-interface instead of a flat color block.
 */

function ResumeVisual() {
  return (
    <div className="pv pv--resume">
      <div className="pv__doc">
        <span className="pv__doc-head" />
        {[92, 78, 85, 64, 88, 70].map((w, i) => (
          <span key={i} className="pv__line" style={{ width: `${w}%` }} />
        ))}
        <span className="pv__scan" />
      </div>
      <div className="pv__side">
        <div className="pv__ring">
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle className="pv__ring-bg" cx="18" cy="18" r="15" />
            <circle className="pv__ring-fg" cx="18" cy="18" r="15" strokeDasharray="76 100" />
          </svg>
          <span>82%</span>
        </div>
        <div className="pv__chips">
          <span>React</span>
          <span>Node.js</span>
          <span>NLP</span>
        </div>
        <FileSearch size={15} className="pv__side-icon" />
      </div>
    </div>
  )
}

function MedAssistVisual() {
  return (
    <div className="pv pv--chat">
      <div className="pv__chat-head">
        <HeartPulse size={14} />
        <span>MedAssist AI</span>
        <em>online</em>
      </div>
      <div className="pv__bubbles">
        <span className="pv__bubble pv__bubble--user">
          <User size={10} /> fever &amp; cough for 2 days
        </span>
        <span className="pv__bubble pv__bubble--ai">
          <Bot size={10} /> Rest, fluids &amp; monitor temperature…
        </span>
        <span className="pv__bubble pv__bubble--user pv__bubble--short">thanks!</span>
      </div>
      <div className="pv__langs">
        <span>EN</span>
        <span>HI</span>
        <span>MR</span>
      </div>
    </div>
  )
}

function TractorVisual() {
  return (
    <div className="pv pv--farm">
      <div className="pv__farm-head">
        <Tractor size={15} />
        <span>Tractor Mitra</span>
      </div>
      <div className="pv__tiles">
        {[
          ['Bookings', '12'],
          ['Services', '4'],
          ['Acres', '8.5'],
        ].map(([label, value]) => (
          <div key={label} className="pv__tile">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="pv__bars">
        {[70, 45, 88, 60].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

function CareerVisual() {
  return (
    <div className="pv pv--career">
      <div className="pv__career-head">
        <Compass size={14} />
        <span>Career Readiness</span>
      </div>
      <div className="pv__chart">
        {[
          ['Skills', 78],
          ['Projects', 66],
          ['Internships', 40],
          ['Certifications', 52],
        ].map(([label, v]) => (
          <div key={label} className="pv__chart-row">
            <span className="pv__chart-label">{label}</span>
            <span className="pv__chart-track">
              <i style={{ width: `${v}%` }} />
            </span>
          </div>
        ))}
      </div>
      <div className="pv__chips">
        <span>ML Engineer</span>
        <span>Full Stack</span>
      </div>
    </div>
  )
}

function VotingVisual() {
  return (
    <div className="pv pv--vote">
      <div className="pv__vote-head">
        <ShieldCheck size={15} />
        <span>Secure Ballot</span>
        <em>verified</em>
      </div>
      {[
        ['Candidate A', true],
        ['Candidate B', false],
        ['Candidate C', false],
      ].map(([name, picked]) => (
        <div key={name} className={`pv__ballot ${picked ? 'pv__ballot--picked' : ''}`}>
          <span className="pv__ballot-name">{name}</span>
          {picked ? <CheckCircle2 size={13} /> : <Vote size={13} />}
        </div>
      ))}
      <div className="pv__vote-foot">
        <span>Encrypted • SQLite ledger</span>
      </div>
    </div>
  )
}

const VISUALS = {
  'ai-resume-screening': ResumeVisual,
  'medassist-ai': MedAssistVisual,
  'tractor-mitra': TractorVisual,
  'careersense-ai': CareerVisual,
  'secure-voting-system': VotingVisual,
}

export default function ProjectVisual({ project, large = false }) {
  const Visual = VISUALS[project.id] || ResumeVisual
  return (
    <div
      className={`pvisual ${large ? 'pvisual--large' : ''}`}
      style={{ background: project.gradient }}
      aria-hidden="true"
    >
      <div className="pvisual__grid" />
      <div className="pvisual__window">
        <div className="pvisual__bar">
          <span />
          <span />
          <span />
        </div>
        <Visual />
      </div>
    </div>
  )
}
