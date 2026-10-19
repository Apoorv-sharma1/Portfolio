export const profile = {
  name: "Apoorv Sharma",
  headline: "Web Developer & AI Builder",
  subHeadline: "Agentic AI • MERN Stack • Scalable Web Systems",
  tagline: "Helping businesses automate 70% manual work & scaling modern web platforms.",
  about: `I’m a Web Developer and AI Builder focused on helping businesses save time and scale faster. I build full-stack web applications, SaaS platforms, and AI-powered systems that automate repetitive workflows. 

Currently, I'm building Webnetic Studios (crafting high-performance digital solutions for growing brands) and co-founding FuseOne Studios (architecting agentic AI-driven automation workflows). 

Beyond code, I am a published self-help author of "A Guide to Resisting Peer Pressure"—believing that great engineering begins with strong, independent decision-making.`,
  location: "Jaipur, Rajasthan, India",
  university: "JK Lakshmipat University (JKLU)",
  degree: "Bachelor of Engineering (B.E.) in Computer Science",
  gradYear: "2024 - 2028",
  primaryEmail: "sharma2006apoorv@gmail.com",
  workEmail: "webneticstudios@gmail.com",
  linkedin: "https://www.linkedin.com/in/apoorvsh001",
  github: "https://github.com/apoorvsh001",
  portfolioUrl: "https://apoorvsh.netlify.app",
  status: "Available for MERN Stack & AI Engineering Collaborations",
  stats: [
    { label: "Manual Work Automated", value: "70%" },
    { label: "Ventures Founded / Co-Founded", value: "2" },
    { label: "Years Engineering Experience", value: "3+" },
    { label: "Published Books", value: "1" }
  ]
};

export const projects = [
  {
    id: "webnetic-studios",
    title: "Webnetic Studios — Scalable Digital Ecosystem",
    category: "Full Stack / SaaS",
    description: "Enterprise digital agency platform and client portal designed for high-conversion web deployment, SEO automation, and seamless business system integrations.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    features: [
      "Modular dashboard architecture for client onboarding",
      "Dynamic SEO metadata generation and analytics integration",
      "End-to-end responsive design with custom UI tokens",
      "Automated inquiry routing and lead qualification"
    ],
    github: "https://github.com/apoorvsh001/webnetic-platform",
    liveDemo: "https://apoorvsh.netlify.app/",
    highlight: "Agency Platform",
    accentColor: "#78F52B"
  },
  {
    id: "fuseone-ai",
    title: "FuseOne Studios — Agentic AI Automation Engine",
    category: "AI & Automation",
    description: "Autonomous multi-agent platform designed to orchestrate business workflows, customer engagement pipelines, and automated real-time task execution.",
    technologies: ["Node.js", "Agentic AI", "Express.js", "MongoDB", "React", "OpenAI / Claude APIs"],
    features: [
      "Multi-agent autonomous pipeline coordination",
      "Automated document processing and data extraction",
      "Reduces manual administrative effort by up to 70%",
      "Real-time websocket execution monitoring"
    ],
    github: "https://github.com/apoorvsh001/fuseone-ai-engine",
    liveDemo: "https://apoorvsh.netlify.app/",
    highlight: "Multi-Agent System",
    accentColor: "#8B5CF6"
  },
  {
    id: "codec-enterprise-mern",
    title: "Codec Tech — MERN Administrative Portal",
    category: "Full Stack",
    description: "Full-stack enterprise administrative management portal engineered during MERN Stack Developer tenure at Codec Technologies India.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "JWT Auth"],
    features: [
      "Role-based access control with secure JWT authentication",
      "Mongoose schema validation with optimized indexing",
      "Centralized error handling and rate-limited REST endpoints",
      "Interactive data visualizations and audit logging"
    ],
    github: "https://github.com/apoorvsh001/mern-enterprise-system",
    liveDemo: "https://apoorvsh.netlify.app/",
    highlight: "MERN Stack",
    accentColor: "#69C9FF"
  },
  {
    id: "ecommerce-automation",
    title: "High-Conversion E-Commerce Engine",
    category: "E-Commerce",
    description: "Performance-driven e-commerce platform with automated product catalog synchronization, checkout optimization, and payment gateway integration.",
    technologies: ["React.js", "Node.js", "Shopify API", "WooCommerce", "Tailwind CSS"],
    features: [
      "Sub-second page loads with progressive image loading",
      "Frictionless checkout UX increasing conversion rate",
      "Automated order notification pipeline",
      "Cross-platform inventory synchronization"
    ],
    github: "https://github.com/apoorvsh001/ecommerce-automation-suite",
    liveDemo: "https://apoorvsh.netlify.app/",
    highlight: "E-Commerce",
    accentColor: "#F59E0B"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: "Advanced", proficiency: "Comfortable", desc: "Hooks, Context, Custom Hooks, Performance tuning" },
    { name: "Next.js", level: "Intermediate", proficiency: "Working Knowledge", desc: "Server components, App Router, SSR/SSG" },
    { name: "JavaScript (ES6+)", level: "Advanced", proficiency: "Comfortable", desc: "Async/await, Event Loop, Closures, DOM APIs" },
    { name: "TypeScript", level: "Intermediate", proficiency: "Working Knowledge", desc: "Types, Interfaces, Generics, Type safety" },
    { name: "Tailwind CSS", level: "Advanced", proficiency: "Comfortable", desc: "Custom themes, Glassmorphism, Responsive grids" },
    { name: "Three.js / R3F", level: "Intermediate", proficiency: "Working Knowledge", desc: "3D scene composition, Lighting, Canvas shaders" },
    { name: "HTML5 & Modern CSS", level: "Advanced", proficiency: "Comfortable", desc: "Semantic structure, Flexbox, Grid, Animations" },
    { name: "Framer Motion", level: "Intermediate", proficiency: "Working Knowledge", desc: "Layout transitions, Scroll reveals, Micro-interactions" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced", proficiency: "Comfortable", desc: "Event-driven runtime, Streams, File I/O, Clustering" },
    { name: "Express.js", level: "Advanced", proficiency: "Comfortable", desc: "RESTful architecture, Middleware pipelines, Routing" },
    { name: "MongoDB", level: "Advanced", proficiency: "Comfortable", desc: "Document modeling, Aggregation pipelines, Atlas" },
    { name: "Mongoose", level: "Advanced", proficiency: "Comfortable", desc: "Schema validation, Middleware hooks, Indexing" },
    { name: "REST APIs", level: "Advanced", proficiency: "Comfortable", desc: "API design principles, Status codes, Rate limiting" },
    { name: "Authentication", level: "Intermediate", proficiency: "Working Knowledge", desc: "JWT tokens, Bcrypt hashing, Protected routes" }
  ],
  aiAndAutomation: [
    { name: "Agentic AI", level: "Advanced", proficiency: "Comfortable", desc: "Multi-agent workflows, autonomous execution" },
    { name: "LLM Orchestration", level: "Intermediate", proficiency: "Working Knowledge", desc: "OpenAI, Claude, Prompt engineering, Tool calling" },
    { name: "Workflow Automation", level: "Advanced", proficiency: "Comfortable", desc: "70% manual task reduction systems, Webhooks" },
    { name: "API Integrations", level: "Advanced", proficiency: "Comfortable", desc: "Third-party services, Payment gateways, CRM hooks" }
  ],
  toolsAndDevOps: [
    { name: "Git & GitHub", level: "Advanced", proficiency: "Comfortable", desc: "Version control, PRs, Branching strategies, Actions" },
    { name: "Docker", level: "Beginner", proficiency: "Learning", desc: "Containerization fundamentals, Dockerfiles" },
    { name: "Postman", level: "Advanced", proficiency: "Comfortable", desc: "API testing, Collections, Environment configs" },
    { name: "Vite / Vercel / Render", level: "Advanced", proficiency: "Comfortable", desc: "Modern bundling, Continuous deployment, SPA fallbacks" },
    { name: "Figma & UI/UX", level: "Intermediate", proficiency: "Working Knowledge", desc: "Wireframing, Component design, Design systems" }
  ]
};

export const experiences = [
  {
    role: "Founder",
    company: "Webnetic Studios",
    period: "Jan 2022 - Present",
    location: "Remote / India",
    description: "Develop responsive, SEO-optimized web applications and scalable digital solutions. Combine front-end artistry with robust back-end APIs to establish high-impact digital presence for growing businesses.",
    badges: ["Full Stack", "MERN", "SEO", "E-Commerce", "UI/UX"]
  },
  {
    role: "Co-Founder",
    company: "FuseOne Studios",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: "Architecting Agentic AI-driven platforms and SaaS focused on business workflow automation. Designed multi-agent execution pipelines reducing manual operational overhead by up to 70%.",
    badges: ["Agentic AI", "Automation", "SaaS Architecture", "Product Strategy"]
  },
  {
    role: "Brand & Growth Strategist",
    company: "turtlehead.store",
    period: "Jul 2026 - Present",
    location: "India",
    description: "Working closely with leadership to shape brand positioning, B2B content strategies, and cross-platform performance tracking.",
    badges: ["Brand Strategy", "B2B Marketing", "Storytelling"]
  },
  {
    role: "MERN Stack Developer (Intern)",
    company: "Codec Technologies India",
    period: "May 2026 - Jul 2026",
    location: "India",
    description: "Built scalable React interfaces and Express REST microservices. Implemented schema validation, data pagination, and token-based auth.",
    badges: ["MERN Stack", "Express.js", "MongoDB", "React"]
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "Sep 2025 - Nov 2025",
    location: "Remote",
    description: "National-level open source program. Collaborated on real-world repositories, implemented UI improvements, and fixed algorithmic issues.",
    badges: ["Open Source", "Git Collaboration", "Code Quality"]
  },
  {
    role: "Web Developer",
    company: "Skynoch Business Solutions",
    period: "Aug 2025 - Nov 2025",
    location: "Jaipur, India",
    description: "Developed modern responsive web applications, improved client website loading speeds, and assisted in full-stack feature delivery.",
    badges: ["Web Development", "Performance", "Frontend"]
  },
  {
    role: "Design Coordinator",
    company: "Competitive Programming Club — JKLU",
    period: "Oct 2024 - Aug 2025",
    location: "Jaipur, India",
    description: "Led visual identity, event branding, and promotional design for university coding hackathons and competitive programming contests.",
    badges: ["Graphic Design", "Leadership", "Event Branding"]
  },
  {
    role: "Technical Consultant",
    company: "Me and Daughter",
    period: "Sep 2024 - Aug 2025",
    location: "Jaipur, India",
    description: "Consulted on e-commerce optimization, digital architecture, and sales onboarding processes.",
    badges: ["Consulting", "E-Commerce", "Digital Strategy"]
  }
];

export const education = [
  {
    institution: "JK Lakshmipat University, Jaipur",
    degree: "Bachelor of Engineering (B.E.) — Computer Science",
    period: "Aug 2024 - Jul 2028",
    status: "Currently Pursuing (Semester 5)",
    coursework: "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Computer Networks",
    highlights: "Active member in Google Developers Group (GDG) campus chapter & Competitive Programming Club."
  },
  {
    institution: "Maheshwari Public School / Board of Secondary Education Rajasthan",
    degree: "Higher Secondary Education (Class XII) — Physics, Chemistry, Mathematics (PCM)",
    period: "2018 - 2019",
    status: "Completed",
    highlights: "Strong foundational focus in mathematical reasoning and sciences."
  }
];

export const certifications = [
  {
    title: "Red Hat System Administration I (RH124 - RHA)",
    issuer: "Red Hat",
    category: "Systems & Linux",
    icon: "Server",
    description: "Core Linux system administration skills, command line tools, file system hierarchy, permissions, and service management."
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning / Tech Academy",
    category: "AI & Machine Learning",
    icon: "Cpu",
    description: "Foundations of Large Language Models, generative architectures, prompt engineering, and ethical AI deployment."
  },
  {
    title: "Online Dispute Resolution (ODR) Mechanism",
    issuer: "Verified Credential",
    category: "Legal Tech & Systems",
    icon: "ShieldCheck",
    description: "Digital arbitration systems, dispute resolution frameworks, and online process workflows."
  },
  {
    title: "Copywriting with ChatGPT: Crafting High-Quality Blog Content",
    issuer: "Verified Credential",
    category: "AI Communication",
    icon: "PenTool",
    description: "Effective utilization of LLMs for structured, high-engagement written communication and content strategy."
  },
  {
    title: "Published Book Author — 'A Guide to Resisting Peer Pressure'",
    issuer: "Self-Published Work",
    category: "Publication & Leadership",
    icon: "BookOpen",
    description: "Published book exploring independent decision-making, social influence, self-awareness, and mindset development written at age 16."
  }
];
