// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — edit everything about your site in this file
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Manesh Jadhav',
  firstName: 'Manesh',
  logo: 'MJ',
  headline: "Hi, I'm Manesh Jadhav",
  subheadline: 'B.Tech Computer Engineering Student & Aspiring Software Developer',
  heroDescription:
    'I build modern web applications, intelligent software solutions and user-focused digital experiences.',
  badge: 'Available for Internships & Software Opportunities',
  // Roles shown in the rotating animated text in the hero section
  roles: ['Software Developer', 'Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver'],
  email: 'manesh.r.jadhav@gmail.com',
  phone: '+91 8275933781',
  phoneHref: 'tel:+918275933781',
  location: 'Chhatrapati Sambhajinagar, Maharashtra, India',
  mapsUrl: 'https://maps.google.com/?q=Chhatrapati+Sambhajinagar,+Maharashtra,+India',
  resumeUrl: import.meta.env.VITE_RESUME_URL || '/resume.pdf',
  avatar: '/images/profile.jpg', // put your photo in public/images/profile.jpg
}

export const about = {
  title: 'Turning Ideas Into Digital Solutions',
  bio: 'I am a B.Tech Computer Engineering student passionate about software development, web technologies, artificial intelligence and building real-world applications. I enjoy learning new technologies and converting ideas into practical digital solutions.',
  cards: [
    {
      label: 'Career Goal',
      value:
        'To grow into a skilled software developer who builds meaningful, scalable products that solve real-world problems.',
      icon: 'Target',
    },
    { label: 'Education', value: 'B.Tech — Computer Engineering, MIT Chhatrapati Sambhajinagar', icon: 'GraduationCap' },
    { label: 'Current Status', value: 'Open to internships & entry-level software roles', icon: 'Sparkles' },
    { label: 'Focus Areas', value: 'Web Development • AI / ML • Problem Solving', icon: 'Layers' },
  ],
}

// Skill level guide (honest & realistic):
//   Familiar  ≈ 30-45%  |  Comfortable ≈ 50-70%  |  Proficient ≈ 70-85%
// Each skill can use a lucide-react icon name (see utils/icons.js for the map).
export const skillCategories = [
  {
    title: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'HTML5', level: 85, icon: 'Code' },
      { name: 'CSS3', level: 80, icon: 'Palette' },
      { name: 'JavaScript', level: 70, icon: 'Braces' },
      { name: 'React', level: 65, icon: 'Atom' },
      { name: 'Bootstrap', level: 70, icon: 'LayoutGrid' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 60, icon: 'Server' },
      { name: 'Python', level: 75, icon: 'Terminal' },
      { name: 'Flask', level: 65, icon: 'FlaskConical' },
      { name: 'PHP', level: 50, icon: 'FileCode' },
    ],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 70, icon: 'Database' },
      { name: 'MongoDB', level: 60, icon: 'DatabaseZap' },
      { name: 'SQLite', level: 65, icon: 'HardDrive' },
      { name: 'Firebase', level: 55, icon: 'Flame' },
    ],
  },
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 75, icon: 'Terminal' },
      { name: 'Java', level: 60, icon: 'Coffee' },
      { name: 'C++', level: 65, icon: 'Code' },
      { name: 'JavaScript', level: 70, icon: 'Braces' },
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 70, icon: 'GitBranch' },
      { name: 'GitHub', level: 75, icon: 'Github' },
      { name: 'VS Code', level: 85, icon: 'SquareCode' },
      { name: 'Android Studio', level: 60, icon: 'Smartphone' },
      { name: 'Flutter', level: 50, icon: 'Feather' },
    ],
  },
  {
    title: 'AI / ML',
    icon: 'Bot',
    skills: [
      { name: 'Machine Learning', level: 60, icon: 'BrainCircuit' },
      { name: 'NLP', level: 50, icon: 'MessagesSquare' },
      { name: 'AI Chatbots', level: 55, icon: 'Bot' },
      { name: 'Data Analysis', level: 60, icon: 'LineChart' },
    ],
  },
]

// Project categories used by the filter buttons — keep in sync with `category` values.
export const projectCategories = ['All', 'AI / ML', 'Full Stack', 'Mobile', 'Web']

export const projects = [
  {
    id: 'ai-resume-screening',
    title: 'AI-Based Resume Screening & Skill Gap Analyzer',
    category: 'AI / ML',
    categories: ['AI / ML', 'Full Stack', 'Web'],
    shortDescription:
      'An AI-powered web application that analyzes resumes, identifies candidate skills, detects skill gaps and provides placement-oriented insights.',
    description:
      'An AI-powered web application that analyzes resumes, identifies candidate skills, detects skill gaps and provides placement-oriented insights. Built with a React frontend, a Node.js/Express API and MongoDB storage, it parses resume text, extracts skills with NLP techniques and maps them against role requirements to generate actionable placement reports.',
    highlights: [
      'Resume parsing and skill extraction using NLP',
      'Skill-gap detection against role-specific requirement maps',
      'Placement-oriented insight reports for candidates',
      'REST API with MongoDB persistence',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    gradient: 'linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)',
    accentIcon: 'FileSearch',
    github: 'https://github.com/maneshrjadhav/ai-resume-screening',
    demo: '',
  },
  {
    id: 'medassist-ai',
    title: 'MedAssist AI',
    category: 'AI / ML',
    categories: ['AI / ML', 'Mobile'],
    shortDescription:
      'An AI-based multilingual medical assistant designed to provide conversational assistance and intelligent health-related information.',
    description:
      'An AI-based multilingual medical assistant designed to provide conversational assistance and intelligent health-related information. The Android app (Kotlin) communicates with a Python Flask ML backend, uses SQLite for on-device history and supports multiple Indian languages for wider accessibility.',
    highlights: [
      'Multilingual conversational medical assistant',
      'Kotlin Android client with clean Material UI',
      'Flask backend serving ML inference endpoints',
      'SQLite storage for offline conversation history',
    ],
    technologies: ['Android', 'Kotlin', 'Python', 'Flask', 'Machine Learning', 'SQLite'],
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    accentIcon: 'HeartPulse',
    github: 'https://github.com/maneshrjadhav/medassist-ai',
    demo: '',
  },
  {
    id: 'tractor-mitra',
    title: 'Tractor Mitra',
    category: 'Mobile',
    categories: ['Mobile'],
    shortDescription:
      'A modern agriculture-focused platform designed to help farmers manage tractor-related services and agricultural activities.',
    description:
      'A modern agriculture-focused platform designed to help farmers manage tractor-related services and agricultural activities. Built with Flutter for a single cross-platform codebase and Firebase for authentication, real-time data and cloud storage.',
    highlights: [
      'Cross-platform Flutter app for farmers',
      'Tractor service booking & management workflows',
      'Firebase auth, Firestore and storage integration',
      'Simple, rural-user-friendly interface',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
    gradient: 'linear-gradient(135deg, #0D9488 0%, #22D3EE 100%)',
    accentIcon: 'Tractor',
    github: 'https://github.com/maneshrjadhav/tractor-mitra',
    demo: '',
  },
  {
    id: 'careersense-ai',
    title: 'CareerSenseAI',
    category: 'AI / ML',
    categories: ['AI / ML', 'Web'],
    shortDescription:
      'An AI-powered career assistance platform designed to help students understand skills, career opportunities and improve career readiness.',
    description:
      'An AI-powered career assistance platform designed to help students understand skills, career opportunities and improve career readiness. Built with Python, Streamlit and machine learning, it recommends career paths based on student interests, skills and assessment inputs.',
    highlights: [
      'ML-driven career path recommendations',
      'Student-friendly Streamlit web interface',
      'Skill and readiness assessment flow',
      'Career opportunity exploration module',
    ],
    technologies: ['Python', 'Streamlit', 'Machine Learning'],
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #34D399 100%)',
    accentIcon: 'Compass',
    github: 'https://github.com/maneshrjadhav/careersense-ai',
    demo: '',
  },
  {
    id: 'secure-voting-system',
    title: 'Secure Voting System',
    category: 'Web',
    categories: ['Web', 'Full Stack'],
    shortDescription:
      'A secure digital voting system designed to simplify election processes while maintaining authentication and data integrity.',
    description:
      'A secure digital voting system designed to simplify election processes while maintaining authentication and data integrity. Built with Python and Flask on the server side and SQLite for lightweight, reliable storage, with role-based access for voters and administrators.',
    highlights: [
      'Role-based authentication for voters & admins',
      'Tamper-resistant vote recording with SQLite',
      'Automated result tallying dashboard',
      'Lightweight Flask deployment',
    ],
    technologies: ['Python', 'Flask', 'SQLite'],
    gradient: 'linear-gradient(135deg, #0E7490 0%, #10B981 100%)',
    accentIcon: 'Vote',
    github: 'https://github.com/maneshrjadhav/secure-voting-system',
    demo: '',
  },
]

// Development journey — academic & personal growth, NOT employment.
// No companies, jobs, internships or dates are claimed anywhere here.
export const journey = [
  {
    title: 'Building AI-Powered Applications',
    category: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    description:
      'Developed and explored AI/ML-based applications including resume analysis, career guidance and intelligent conversational systems.',
    highlights: [
      'Applied Python and machine learning concepts to practical applications.',
      'Worked with NLP, TF-IDF, classification and data-driven features.',
      'Focused on converting AI concepts into useful software experiences.',
    ],
    projects: [
      'AI-Based Resume Screening & Skill Gap Analyzer',
      'CareerSenseAI',
      'MedAssist AI',
    ],
  },
  {
    title: 'Full-Stack & Web Development',
    category: 'Web Development',
    icon: 'Globe',
    description:
      'Built end-to-end software applications while learning how frontend interfaces, backend services, APIs and databases work together.',
    stack: [
      'React',
      'JavaScript',
      'Node.js',
      'Flask',
      'PHP',
      'MySQL',
      'MongoDB',
      'SQLite',
      'Firebase',
    ],
  },
  {
    title: 'Mobile Application Development',
    category: 'Mobile Development',
    icon: 'Smartphone',
    description:
      'Expanded my development experience into mobile applications using Flutter, Dart, Kotlin and Android technologies.',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Android', 'Firebase', 'API integration'],
    projects: ['Tractor Mitra', 'MedAssist AI'],
  },
  {
    title: 'Continuous Learning & Problem Solving',
    category: 'Computer Engineering',
    icon: 'BookOpen',
    description:
      'Continuously strengthening software engineering and computer science fundamentals through coursework, development and hands-on projects.',
    topics: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'AI',
      'Machine Learning',
      'Web Development',
    ],
  },
]

// Academic journey, displayed oldest → newest (SSC → Diploma → B.Tech).
// The SSC institution is intentionally empty — add your real school name here.
export const education = [
  {
    degree: 'SSC / 10th Standard',
    institution: '', // ← add your school name here
    score: '83%',
    status: 'Completed',
    icon: 'School',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'MIT Polytechnic, Rotegaon',
    score: '83%',
    status: 'Completed',
    icon: 'BookOpen',
  },
  {
    degree: 'B.Tech — Computer Engineering',
    institution: 'Maharashtra Institute of Technology, Chhatrapati Sambhajinagar',
    score: 'CGPA 7.25',
    status: 'Currently Pursuing',
    icon: 'GraduationCap',
    coursework: [
      'DBMS',
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Artificial Intelligence',
      'Machine Learning',
      'Web Development',
    ],
  },
]

// Add verified certificates here: { title, issuer, date, credentialId, url }.
// Until real entries exist the section renders a clean empty state — never fake credentials.
export const certifications = []

// Professional metrics — edit the `value` fields with your real numbers.
export const achievements = [
  { label: 'Projects Built', value: 5, suffix: '+', icon: 'Rocket' },
  { label: 'Technologies & Tools Explored', value: 20, suffix: '+', icon: 'Layers' },
  { label: 'Academic Milestones', value: 3, suffix: '', icon: 'GraduationCap' },
  { label: 'Core Development Areas', value: 3, suffix: '', icon: 'Compass' },
]

export const coreAreas = ['Web', 'Mobile', 'AI / ML']

export const github = {
  username: import.meta.env.VITE_GITHUB_USERNAME || 'maneshrjadhav',
  profileUrl: 'https://github.com/maneshrjadhav',
  repos: [
    {
      name: 'AI Resume Screening',
      slug: 'ai-resume-screening',
      description: 'AI-powered resume screening & skill gap analyzer — React, Node.js, MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB'],
      url: 'https://github.com/maneshrjadhav/ai-resume-screening',
    },
    {
      name: 'MedAssist AI',
      slug: 'medassist-ai',
      description: 'Multilingual AI medical assistant — Kotlin, Flask, ML, SQLite.',
      tech: ['Kotlin', 'Flask', 'ML'],
      url: 'https://github.com/maneshrjadhav/medassist-ai',
    },
    {
      name: 'CareerSenseAI',
      slug: 'careersense-ai',
      description: 'AI career assistance platform for students — Python, Streamlit, ML.',
      tech: ['Python', 'Streamlit', 'ML'],
      url: 'https://github.com/maneshrjadhav/careersense-ai',
    },
  ],
  codingTech: ['Python', 'JavaScript', 'Java', 'C++', 'Dart', 'Kotlin'],
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/maneshrjadhav', icon: 'Github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/manesh-jadhav-a243a72ba', icon: 'Linkedin' },
  { label: 'Email', url: 'mailto:manesh.r.jadhav@gmail.com', icon: 'Mail' },
  { label: 'Phone', url: 'tel:+918275933781', icon: 'Phone' },
]

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]
