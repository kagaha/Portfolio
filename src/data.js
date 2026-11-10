// All portfolio content lives here — edit this file to update the site.

export const profile = {
  firstName: "Sai Ruthik",
  lastName: "Kandimalla",
  initials: "SR",
  // role: "Full Stack Developer",
  stackLine: "Java / Spring Boot / React",
  tagline:
    "I build fast, considered web applications — from the data model and APIs to the interface people actually use.",
  email: "ksairuthik2004@gmail.com",
  phone: "+91 96038 39698",
  location: "Anantapur, Andhra Pradesh, India",
  workLocation: "Hyderabad, Telangana",
  relocation: "Open to relocate anywhere in India",
  preferredCities: "Hyderabad · Bengaluru · Chennai · Coimbatore",
  timezone: "IST (UTC+5:30)",
  utcOffsetMinutes: 330,
  tzLabel: "IST (UTC+5:30)",
  linkedin: "https://linkedin.com/in/kandimalla-sai-ruthik",
  github: "https://github.com/kagaha",
  resume: "/SaiRuthik_Kandimalla_Resume.pdf",
  summary:
    "Full Stack Developer with 1+ year of experience building enterprise microservices applications using Java 21, Spring Boot, React.js, TypeScript, SQL Server and Redis. Delivered 50+ REST APIs and 10+ database tables, integrated SSO across 9 applications, and reduced feature delivery time by 60%+ through spec-driven, AI-assisted development.",
};

export const stats = [
  { value: "1+", label: "Year of experience" },
  { value: "50+", label: "REST APIs delivered" },
  { value: "9", label: "Apps with SSO integrated" },
  { value: "60%+", label: "Faster feature delivery" },
];

export const roles = [
  "Associate Software Engineer I",
  "Java Full Stack Developer",
  "Software Engineer I",
  "Backend Developer",
  "React Developer",
  "Spring Boot Developer",
];

export const hiring = {
  status: "Open to full-time roles",
  roles: "Java Full Stack · Backend · Software Engineer",
  location: "Anantapur · Open to relocate anywhere in India",
  preferred: "Hyderabad, Bengaluru, Chennai, Coimbatore",
  mode: "On-site · Hybrid · Remote",
  notice: "Immediate joiner",
  reply: "Within 24 hours",
};

export const quickFacts = [
  ["Looking for", "Full-time roles"],
  ["Role", "Java Full Stack Developer"],
  ["Experience", "1+ year"],
  ["Based in", "Anantapur, India"],
  ["Relocation", "Anywhere in India"],
  ["Preferred", "Hyderabad, Bengaluru, Chennai, Coimbatore"],
];

export const experience = {
  company: "Solera Holdings, LLC.",
  title: "Associate Software Engineer",
  place: "Hyderabad, Telangana",
  period: "Jun 2025 – Sep 2026",
  intro:
    "Full-stack engineer in an Agile enterprise team, working with managers, engineering leads, architects and product owners.",
  highlights: [
    { value: "70+", label: "Pull requests" },
    { value: "50+", label: "Code reviews" },
    { value: "20+", label: "Deployments (DEV, QAE, LTE)" },
    { value: "3", label: "Products shipped" },
  ],
  projects: [
    {
      name: "ARIIA – Automotive Retail Intelligence and Insights Agent",
      summary:
        "Greenfield microservices product for automotive retail, covering user management, dealer appointments and notifications.",
      stack: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Microservices",
        "React",
        "TypeScript",
        "SQL Server",
        "Redis",
        "RabbitMQ",
        "Docker",
      ],
      points: [
        "Cut User CRUD module delivery from 3–4 days to **1 day (60%+ faster)** using spec-driven development with Spec Kit and GitHub Copilot, shipped production-ready.",
        "Built full-stack features for a greenfield microservices application in Java 21, Spring Boot, React.js, TypeScript, SQL Server and Redis.",
        "Built responsive RBAC interfaces in React and TypeScript, with backend APIs for user management, entitlements, user import and audit workflows.",
        "Designed **10+ SQL Server tables** for appointments and dealer schedulers, and built the APIs for booking and managing dealer appointments.",
        "Implemented event-driven web and email notifications with RabbitMQ, and evaluated SSE for real-time browser updates.",
        "Implemented secure PII handling and structured application logging to improve traceability and troubleshooting.",
        "Tested APIs with Postman and Swagger, wrote JUnit and Mockito tests, containerised local development with Docker, and supported Jenkins deployments across DEV, QAE and LTE.",
      ],
    },
    {
      name: "Titling Platform",
      summary: "Single sign-on for the dealership titling applications.",
      stack: ["Azure AD B2C", "SSO", "OAuth 2.0", "Java"],
      points: [
        "Integrated Azure AD B2C SSO across **9 titling applications**, removing repeated logins and making authentication consistent across dealership workflows.",
        "Enabled seamless navigation from Solera Intelligence Center (SIC) to the titling applications with no repeated credential entry.",
        "Worked with architects, leads and product owners to adapt one common authentication approach to each application's requirements.",
      ],
    },
    {
      name: "SIC Project (Solera Intelligence Center)",
      summary:
        "Internal platform with global search, login and user management, plus integrations with external systems.",
      stack: [
        "Java",
        "Spring Boot",
        "React",
        "REST APIs",
        "Spring Security",
        "SQL Server",
      ],
      points: [
        "Built Java and Spring Boot backend services and React functionality for Global Search, login and user management.",
        "Designed a configuration-driven external API integration model, so new services can be registered with minimal changes to the core framework.",
        "Integrated and transformed customer data from external CRM and marketing systems into standardised SIC responses, with authentication and authorization controls.",
        "Presented an AI knowledge-sharing session to **20+ engineers, architects and managers**, speeding up adoption of MCP, Spec Kit and AI-assisted workflows.",
      ],
    },
  ],
};

// Add screenshots to /public/projects/ and set `image` (e.g. "/projects/flipkart.jpg").
// If the image is missing, a gradient placeholder is shown automatically.
export const projects = [
  {
    title: "Aftersales Intelligence Agent",
    tag: "Company Hackathon · Jun 2026 – Jul 2026",
    description:
      "An agent that analyzes dealership data to identify retention risks, service gaps and upsell opportunities, backed by a Signal Intelligence Engine that scores and prioritizes actionable events and trends. Designed as a multi-agent solution with Auth, RBAC, Premium UI, Simulator and Onboarding agents, providing secure access, polished dashboards, dealership validation and a branded customer experience.",
    stack: [
      "Multi-Agent Architecture",
      "Java",
      "React.js",
      "Ollama",
      "Qwen 3 14B",
      "Groq",
      "SDD",
    ],
    image: "/projects/aftersales.png",
    live: "",
    github: "",
  },
  {
    title: "Flipkart Clone",
    tag: "Full-stack e-commerce",
    description:
      "A Flipkart clone with a visually appealing UI built using React.js and Tailwind CSS. Includes user authentication, forgot-password flow and an Exclusive Cart feature so each user has a dedicated shopping cart. RESTful APIs built with Express.js and Node.js, with MongoDB Atlas for secure data storage, dynamic product listing, cart management and a responsive design.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Express.js",
      "MongoDB Atlas",
    ],
    image: "/projects/flipkart.jpg",
    live: "",
    github: "https://github.com/kagaha/Flipkart-Project",
  },
  {
    title: "WanderLust",
    tag: "Listings website · MVC",
    description:
      "A responsive listings website built with CSS, JavaScript, EJS, Express, Mongoose and MongoDB, deployed with MongoDB Atlas and Render. It follows the MVC (Model-View-Controller) architecture to keep the code modular, organized and efficient.",
    stack: ["CSS", "JavaScript", "EJS", "Express", "Node.js", "MongoDB"],
    image: "/projects/Wanderlust.jpeg",
    live: "https://wanderlust-hg1a.onrender.com/listings",
    github: "https://github.com/kagaha/WanderLust",
  },
  {
    title: "Simon Says Game",
    tag: "JavaScript mini project",
    description:
      "A memory game where players repeat a growing sequence of colours. Press any key to start; one of four colours flashes at random and you have to copy the pattern as it gets longer — one mistake ends the game. Includes bright flash effects, difficulty levels, a competitive mode and a high-score tracker.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/miniproject.jpeg",
    live: "/MiniProject/index.html",
    github: "https://github.com/kagaha/JS-MiniProject-Simons-game-",
  },
];

export const skills = [
  { group: "Languages", items: ["Java 21", "JavaScript", "TypeScript", "SQL"] },
  {
    group: "Backend",
    items: [
      "Spring Boot 3.x",
      "Spring Security",
      "Spring Data JPA",
      "RESTful APIs",
      "Hibernate",
      "Microservices",
    ],
  },
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  {
    group: "Database & Messaging",
    items: [
      "SQL Server",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Apache Kafka",
      "Server-Sent Events",
    ],
  },
  {
    group: "Build & Testing",
    items: ["Maven", "Gradle", "JUnit", "Mockito", "Postman", "Swagger"],
  },
  {
    group: "Security & Observability",
    items: [
      "RBAC",
      "OAuth 2.0",
      "SSO",
      "PII data handling",
      "Application Logging",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (Cloud Practitioner)", "Docker", "Jenkins", "CI/CD"],
  },
  {
    group: "AI & Productivity",
    items: [
      "LLMs",
      "RAG (exploratory)",
      "MCP",
      "AI Agents",
      "Spec Kit",
      "GitHub Copilot",
      "Microsoft Copilot",
      "Claude",
    ],
  },
  {
    group: "Practices",
    items: [
      "Agile",
      "Sprint-based development",
      "Spec-Driven Development",
      "Code Reviews",
      "Jira",
      "Git",
      "GitHub",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Engineering, Computer Science and Engineering",
    place: "G. Pullaiah College of Engineering and Technology, Kurnool",
    period: "Nov 2021 – Jun 2025",
    note: "CGPA: 9.3/10",
  },
  {
    title: "Intermediate",
    place: "Narayana Junior College, Hyderabad",
    period: "Jun 2019 – Apr 2021",
    note: "96.6%",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner (CLF-C02)",
  "NPTEL Java Certification",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
