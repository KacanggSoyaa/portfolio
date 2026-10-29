import { personalInfo } from './portfolio';

export interface CommandOutput {
  type: 'text' | 'success' | 'error' | 'info' | 'ascii' | 'list';
  content: string | string[];
}

export const bannerText = `
   ____              _       ____   _____ 
  |  _ \\  __ _ _ __ (_)___  / __ \\ / ____|
  | | | |/ _\` | '_ \\| / __|/ / _\` | (___  
  | |_| | (_| | | | | \\__ \\ | (_| |\\___ \\ 
  |____/ \\__,_|_| |_|_|___/ \\ \\__,_|____) |
                             \\____/      
  DanisOS [Version 1.0.4 - Web Edition]
  Type 'help' to view available commands or 'neofetch' for system info.
`;

export const neofetchText = `
       /\\_       danis@danis-workspace
      /  _\\      ---------------------
     /  /_/\\     OS: DanisOS v1.0.4 x86_64
    /  /\\_\\ \\    Host: Astro v7 / Tailwind v4
   /  /__/ \\ \\   Uptime: Diploma in IT (Final Year)
  /  /\\_\\  / /   Shell: Danis-ZSH (TypeScript)
 /  /__/ \\/ /    Terminal: React-WebTerm
/___________\\    Status: Open for Freelance Inquiries
                 Primary Focus: Web Development & IT Solutions
                 Hobbies: Building Websites, UI Animation, Linux
`;

export const handleCommand = (cmd: string): { output: CommandOutput; action?: string } => {
  const clean = cmd.trim().toLowerCase();

  switch (clean) {
    case 'help':
      return {
        output: {
          type: 'list',
          content: [
            'Available commands:',
            '  help        - Show this help menu',
            '  neofetch    - Show system specs & ASCII banner',
            '  about       - Read developer background & IT diploma',
            '  skills      - List programming languages & tools',
            '  projects    - View showcased client & portfolio projects',
            '  services    - View freelance offerings & capabilities',
            '  hire        - Open the Contact/Hire Me application',
            '  contact     - Display direct contact channels (Email, WhatsApp)',
            '  date        - Print current system date and time',
            '  clear       - Clear the terminal screen',
            '  gui         - Bring up the Command Palette (Ctrl+K)',
          ],
        },
      };

    case 'neofetch':
      return {
        output: {
          type: 'ascii',
          content: neofetchText,
        },
      };

    case 'about':
    case 'whoami':
      return {
        output: {
          type: 'info',
          content: [
            "👤 Danis - Web Developer & IT Specialist",
            "Diploma in Information Technology student finishing up internship.",
            "Passionate about building fast, responsive, and aesthetically pleasing websites for businesses and clients.",
            "Type 'hire' or click the Contact icon to start a project together!",
          ],
        },
      };

    case 'skills':
      return {
        output: {
          type: 'list',
          content: [
            "🚀 Frontend:  [TypeScript, Astro, React, Next.js, Tailwind CSS, HTML/CSS]",
            "⚙️ Backend:   [Node.js, Express, REST APIs, SQL, Supabase, Firebase]",
            "🌐 IT & Ops:  [Cloudflare, Vercel, DNS, Linux, Git, Network Troubleshooting]",
          ],
        },
      };

    case 'projects':
      return {
        output: {
          type: 'list',
          content: [
            "📁 1. PulseCommerce (Full-Stack Next.js Storefront with Stripe)",
            "📁 2. TaskFlow (Client Booking & Quote Portal in Astro/React)",
            "📁 3. NetHelp (IT Helpdesk & Asset Inventory Tracker)",
            "📁 4. BellaCucina (Artisanal Restaurant Showcase with Reservation)",
            "💡 Tip: Open the Projects.app window from the dock to view live previews!",
          ],
        },
        action: 'open_projects',
      };

    case 'services':
      return {
        output: {
          type: 'list',
          content: [
            "💼 1. High-Converting Landing Pages (Astro + Tailwind, Ultra-Fast SEO)",
            "💼 2. Custom Web Applications (Full-Stack Dashboards & Client Portals)",
            "💼 3. Website Redesign & Speed Optimization (Performance & UI Revamp)",
            "💼 4. IT Setup & Cloud Deployment (Domain, DNS, Email & Hosting)",
          ],
        },
        action: 'open_services',
      };

    case 'contact':
      return {
        output: {
          type: 'success',
          content: [
            "📬 Direct Inquiries:",
            `  Email:    ${personalInfo.email}`,
            `  WhatsApp: ${personalInfo.whatsapp}`,
            `  LinkedIn: ${personalInfo.linkedin}`,
            `  GitHub:   ${personalInfo.github}`,
          ],
        },
      };

    case 'hire':
      return {
        output: {
          type: 'success',
          content: "🚀 Opening Contact & Freelance Quote Application...",
        },
        action: 'open_contact',
      };

    case 'gui':
      return {
        output: {
          type: 'info',
          content: "Opening Command Palette...",
        },
        action: 'open_palette',
      };

    case 'date':
      return {
        output: {
          type: 'text',
          content: new Date().toString(),
        },
      };

    case 'sudo':
      return {
        output: {
          type: 'error',
          content: "sudo: Permission denied. Nice try, but you're a guest user on DanisOS!",
        },
      };

    case '':
      return {
        output: {
          type: 'text',
          content: '',
        },
      };

    default:
      return {
        output: {
          type: 'error',
          content: `zsh: command not found: ${cmd}. Type 'help' to see valid commands.`,
        },
      };
  }
};
