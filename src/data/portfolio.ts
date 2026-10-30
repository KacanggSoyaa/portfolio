import type { Project, Service, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: 'Danis Nazri',
  title: 'Full-Stack Web Developer & IT Solutions Specialist',
  status: 'Available for Select Freelance & Contract Projects',
  bio: 'Information Technology graduate (Diploma in Software & Applications Development) combining modern web engineering with robust IT systems infrastructure. Specializing in high-performance web applications, responsive landing pages, and cloud deployment pipelines.',
  location: 'Kuala Lumpur, Malaysia (Open to Global Remote)',
  email: 'danisnazri9@gmail.com',
  whatsapp: '+601139556225',
  github: 'https://github.com/KacanggSoyaa',
  linkedin: 'https://linkedin.com/in/danisdev',
  education: {
    degree: 'Diploma in Information Technology (Software & Applications)',
    school: 'Polytechnic Ungku Omar (PUO), Malaysia',
    period: '2023 - 2026',
    status: 'Graduating Class / Internship Completion Phase',
  },
};

export const services: Service[] = [
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    tagline: 'Modern, fast, and responsive sites that convert visitors into paying clients.',
    description: 'Perfect for businesses, product launches, or personal brands wanting a sleek digital presence. Built with Astro, Next.js, and Tailwind CSS for instant load speeds and perfect SEO.',
    deliverables: [
      'Responsive design (Mobile, Tablet, Desktop)',
      'SEO & OpenGraph social sharing optimization',
      'High-speed Google PageSpeed performance (95+ score)',
      'Contact form & WhatsApp click-to-chat integration',
      'Free domain & hosting setup assistance',
    ],
    icon: 'Layout',
    startingPrice: 'Starting from $150 / RM600',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    tagline: 'Dynamic dashboards, management portals, and full-stack solutions.',
    description: 'Tailored web software designed around your workflow. Whether you need an internal booking system, client portal, or database-backed web tool.',
    deliverables: [
      'Interactive React / TypeScript frontend',
      'RESTful API / Backend integration',
      'Database setup (PostgreSQL, Supabase, MySQL)',
      'User authentication & role-based access',
      'Secure deployment with automatic CI/CD',
    ],
    icon: 'Code2',
    startingPrice: 'Starting from $400 / RM1,500',
  },
  {
    id: 'redesign-optimization',
    title: 'Website Redesign & Speed Optimization',
    tagline: 'Revamp outdated designs and boost your website speed.',
    description: 'Is your existing website sluggish, broken on mobile, or looking outdated? I will overhaul your UI/UX, modernize the code, and dramatically cut load times.',
    deliverables: [
      'Complete visual facelift with modern aesthetics',
      'Core Web Vitals & performance tuning',
      'Mobile-first responsive bug fixes',
      'Migration to modern frameworks (WordPress/Wix to Astro/Next.js)',
      'Accessibility & browser cross-compatibility checks',
    ],
    icon: 'Zap',
    startingPrice: 'Starting from $120 / RM500',
  },
  {
    id: 'it-consulting',
    title: 'IT Setup & Cloud Deployment',
    tagline: 'Domain, DNS, email, and zero-downtime cloud hosting configuration.',
    description: 'Leveraging my IT systems background to handle the technical hurdles of getting your site online safely and reliably.',
    deliverables: [
      'Custom domain & SSL certificate setup',
      'Cloudflare DNS & CDN caching configuration',
      'Professional business email routing (e.g. Google Workspace / Zoho)',
      'Automated daily backups and uptime monitoring',
      'Post-launch maintenance & security guidelines',
    ],
    icon: 'Server',
    startingPrice: 'Starting from $80 / RM300',
  },
];

export const projects: Project[] = [
  {
    id: 'automate-procurement',
    title: 'AutoProcure — Office Procurement Automation Web App',
    description: 'A full-stack web application that digitizes and automates the end-to-end procurement workflow for companies, replacing manual purchase request forms and approval chains.',
    category: 'Full-Stack',
    tags: ['Web App', 'Automation', 'TypeScript', 'Full-Stack'],
    githubUrl: 'https://github.com/KacanggSoyaa/automate-procurement',
    problem: 'Companies rely on slow, paper-based or spreadsheet-driven procurement processes that are error-prone and hard to track across departments.',
    solution: 'Built a centralized procurement portal with digital purchase request submission, multi-level approval flows, and real-time status tracking for all requisitions.',
  },
  {
    id: 'homepage',
    title: 'Personal Homepage — Developer Profile & Showcase',
    description: 'A clean, fast personal homepage and developer profile site showcasing projects, skills, and contact info — live at kacanggsoyaa.ovh.',
    category: 'Web Dev',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://kacanggsoyaa.ovh',
    githubUrl: 'https://github.com/KacanggSoyaa/homepage',
    problem: 'Needed a fast, personal online presence to showcase identity and projects outside of a formal portfolio.',
    solution: 'Designed and deployed a lightweight homepage with a clean aesthetic, optimized for speed and linked to all major developer profiles.',
  },
  {
    id: 'xsoya-music',
    title: 'xSoya Music — Ad-Free Music Streaming App',
    description: 'A clean, ad-free music streaming web application built with Svelte and TypeScript, letting users listen to tracks without interruptions.',
    category: 'Frontend',
    tags: ['Svelte', 'TypeScript', 'Music Streaming', 'Web App'],
    githubUrl: 'https://github.com/KacanggSoyaa/xsoya-music',
    problem: 'Mainstream music platforms are cluttered with ads and paywalls that interrupt the listening experience.',
    solution: 'Developed a distraction-free, responsive music streaming interface using Svelte for reactive UI and TypeScript for type-safe audio state management.',
  },
  {
    id: 'moneytracker',
    title: 'Money Tracker — Personal Finance Mobile App',
    description: 'A cross-platform mobile application built with Flutter and Dart to help users record, categorize, and monitor daily income and expenses.',
    category: 'Mobile',
    tags: ['Flutter', 'Dart', 'Mobile App', 'Finance'],
    githubUrl: 'https://github.com/KacanggSoyaa/moneytracker',
    problem: 'Tracking daily spending manually in spreadsheets or notebooks is tedious and easy to abandon.',
    solution: 'Built a mobile-first finance tracker with intuitive transaction entry, category breakdowns, and a dashboard summary of monthly spending habits.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Web & Frontend Development',
    skills: [
      { name: 'TypeScript / JavaScript (ESNext)' },
      { name: 'Astro Framework' },
      { name: 'React / Next.js' },
      { name: 'Tailwind CSS / PostCSS' },
      { name: 'HTML5 Semantic & Modern CSS' },
      { name: 'Responsive Web Design & Mobile First' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js & Express' },
      { name: 'RESTful API Design & Integration' },
      { name: 'SQL (PostgreSQL, MySQL, SQLite)' },
      { name: 'Supabase & Firebase Authentication' },
    ],
  },
  {
    category: 'IT Infrastructure & DevOps',
    skills: [
      { name: 'Git & GitHub Version Control' },
      { name: 'Vercel / Netlify / Cloudflare Hosting' },
      { name: 'DNS, Domain & SSL Management' },
      { name: 'Linux Basics & Shell Scripting' },
      { name: 'Computer Networking & Troubleshooting' },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'IT & Web Developer Intern',
    company: 'Tech Solutions & Digital Agency',
    period: '2025 - Present (Internship Completion)',
    type: 'Internship',
    description: [
      'Developed and maintained client websites using Astro, React, and Tailwind CSS, improving average Lighthouse scores to 95+.',
      'Implemented responsive design systems, cross-browser compatibility, and integrated third-party APIs.',
      'Assisted in network setup, server deployments, and domain/DNS routing for enterprise clients.',
      'Collaborated in agile sprint meetings and resolved frontend bugs and performance bottlenecks.',
    ],
    skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Cloudflare', 'Git'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    type: 'Freelance',
    description: [
      'Designed and delivered high-impact landing pages and web apps for local small businesses and student organizations.',
      'Helped clients establish brand presence with custom domain setup, analytics integration, and fast loading speeds.',
      'Maintained clear delivery timelines, transparent client communication, and post-launch support.',
    ],
    skills: ['Web Design', 'Client Consultation', 'UI/UX', 'SEO', 'Deployment'],
  },
];
