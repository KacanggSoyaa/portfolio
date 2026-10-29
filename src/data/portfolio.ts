import type { Project, Service, SkillCategory, Experience } from '../types';

export const personalInfo = {
  name: 'Danis',
  title: 'Web Developer & IT Specialist',
  status: '🟢 Available for Freelance & Contract Projects',
  bio: 'Diploma in IT (Software and Applications Development) graduate completing an internship with a passion for crafting fast, responsive, and intuitive web experiences. Specializing in modern web development, UI/UX implementation, and IT deployment solutions.',
  location: 'Kuala Lumpur, Malaysia (Open to Global Remote)',
  email: 'danisnazri9@gmail.com',
  whatsapp: '+601139556225', // customizable
  github: 'https://github.com/KacanggSoyaa',
  linkedin: 'https://linkedin.com/in/danisdev',
  education: {
    degree: 'Diploma in Information Technology',
    school: 'Polytechnic Ungku Omar (PUO), Malaysia',
    period: '2023 - 2026',
    status: 'Final Year / Internship Completion Phase',
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
    id: 'pro-ecommerce',
    title: 'PulseCommerce — High Performance E-Commerce Store',
    description: 'A lightning-fast e-commerce storefront with cart persistence, Stripe checkout integration, and an admin inventory management dashboard.',
    category: 'Full-Stack',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://pulsecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/danisdev/pulse-commerce',
    featured: true,
    problem: 'Small retail merchants struggle with sluggish WooCommerce setups that lose customers during mobile checkouts.',
    solution: 'Engineered a headless storefront achieving sub-second page transitions, instant search filtering, and frictionless checkout flow.',
  },
  {
    id: 'service-booking',
    title: 'TaskFlow — Freelancer Client Booking Portal',
    description: 'Client onboarding and project tracking platform with calendar scheduling, invoice tracking, and live WhatsApp notifications.',
    category: 'Full-Stack',
    tags: ['Astro', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://taskflow-portal.vercel.app',
    githubUrl: 'https://github.com/danisdev/taskflow-portal',
    featured: true,
    problem: 'Freelance agencies spend hours exchanging emails for quotes and availability.',
    solution: 'Automated the booking pipeline into a single-link portal with interactive quote calculation and appointment booking.',
  },
  {
    id: 'it-ticket-sys',
    title: 'NetHelp — Internal IT Helpdesk & Asset Tracker',
    description: 'A comprehensive IT ticketing and network device inventory system developed during internship for streamlined support dispatch.',
    category: 'IT Systems',
    tags: ['TypeScript', 'Express', 'SQLite', 'Tailwind CSS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://nethelp-demo.vercel.app',
    githubUrl: 'https://github.com/danisdev/nethelp-system',
    featured: false,
    problem: 'Internal IT departments face ticket backlogs and untracked hardware across office departments.',
    solution: 'Built an intuitive dashboard with SLA timers, automated ticket escalation, and QR-code hardware tagging.',
  },
  {
    id: 'restaurant-landing',
    title: 'BellaCucina — Artisanal Restaurant Showcase',
    description: 'An appetizing, animated web experience with online reservation module, interactive digital menu, and location map.',
    category: 'Web Dev',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://bellacucina.vercel.app',
    githubUrl: 'https://github.com/danisdev/bella-cucina',
    featured: false,
    problem: 'Local restaurant was losing dine-in reservations due to an unreadable PDF menu on mobile screens.',
    solution: 'Designed a fast, responsive digital menu with instant filtering for dietary preferences and table reservations.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Web & Frontend Development',
    skills: [
      { name: 'TypeScript / JavaScript (ESNext)', level: 90 },
      { name: 'Astro Framework', level: 92 },
      { name: 'React / Next.js', level: 85 },
      { name: 'Tailwind CSS / PostCSS', level: 95 },
      { name: 'HTML5 Semantic & Modern CSS', level: 98 },
      { name: 'Responsive Web Design & Mobile First', level: 95 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js & Express', level: 80 },
      { name: 'RESTful API Design & Integration', level: 85 },
      { name: 'SQL (PostgreSQL, MySQL, SQLite)', level: 78 },
      { name: 'Supabase & Firebase Authentication', level: 82 },
    ],
  },
  {
    category: 'IT Infrastructure & DevOps',
    skills: [
      { name: 'Git & GitHub Version Control', level: 88 },
      { name: 'Vercel / Netlify / Cloudflare Hosting', level: 92 },
      { name: 'DNS, Domain & SSL Management', level: 85 },
      { name: 'Linux Basics & Shell Scripting', level: 78 },
      { name: 'Computer Networking & Troubleshooting', level: 82 },
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
      'Maintained 100% on-time delivery rate with clear client communication and post-launch support.',
    ],
    skills: ['Web Design', 'Client Consultation', 'UI/UX', 'SEO', 'Deployment'],
  },
];
