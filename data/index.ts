export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/prashan.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always learning new technologies and improving my development skills.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building real-world projects to grow as a software engineer.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building projects and sharpening my software engineering skills.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Contact me",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 5,
    title: "Ghost AI — Real-Time Collaborative System Design Tool",
    des: "An AI-powered tool for designing system architecture on an infinite canvas with real-time multiplayer collaboration, an AI chat sidebar, and one-click generation of a full technical specification document from the canvas and conversation.",
    longDes:
      "Ghost AI is a real-time collaborative system design tool powered by AI. It gives users an infinite canvas to sketch out system architecture — nodes for services, databases, and queues, connected by edges representing data flow — while multiple people work on the same board simultaneously and see each other's changes live. Alongside the canvas sits an AI chat sidebar, so instead of designing in isolation, users can talk through trade-offs, ask questions about their architecture, and iterate on the design conversationally. The standout feature is one-click spec generation: the AI reads the entire canvas state plus the full chat history and produces a complete Markdown technical specification — covering the system overview, architecture, individual components, data flow, key design decisions, and open questions — which can be previewed in a scrollable modal and downloaded as a .md file. Spec generation runs as a background job via Trigger.dev so it doesn't block the UI, and the project is organized around a dashboard for managing multiple design projects at once. It was built to explore how real-time collaboration (Liveblocks), structured LLM output (the Vercel AI SDK with Gemini 2.5 Flash Lite via OpenRouter), and a canvas-based UI (React Flow) can combine into a single cohesive workflow that goes from whiteboarding an idea to a shareable spec document in minutes.",
    img: "/ghostai.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/git.svg"],
    tech: ["Next.js 16", "TypeScript", "React Flow", "Liveblocks", "Vercel AI SDK", "Trigger.dev", "Prisma", "Clerk", "Tailwind CSS"],
    features: [
      "Infinite canvas for system architecture diagrams with real-time multiplayer collaboration",
      "AI chat sidebar for discussing and iterating on the design",
      "One-click generation of a full technical specification (Markdown) from the canvas and chat history",
      "Spec preview modal with Markdown rendering and download to .md",
      "Project dashboard for managing multiple design projects",
    ],
    liveLink: "https://ghostai-git-main-prashan1.vercel.app",
    repoLink: "https://github.com/Prashan33/ghostai",
  },
  {
    id: 1,
    title: "Cryptrix — Crypto Dashboard",
    des: "A professional cryptocurrency dashboard with real-time market data, interactive candlestick charts, global search (Cmd+K), live price polling, and a full trading terminal UI — all powered by the CoinGecko API.",
    longDes:
      "Cryptrix is a professional-grade cryptocurrency dashboard built to feel like a real trading terminal rather than a simple price tracker. It pulls real-time market data from the CoinGecko API and keeps it fresh with live price polling, so prices, market caps, and volume figures stay current without a manual refresh. The dashboard centers on interactive candlestick charts for technical analysis, alongside a global search powered by a Cmd+K command palette for quickly jumping between coins. Data fetching and caching are handled with SWR to keep the UI responsive under frequent polling, and the interface is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components for a clean, consistent design system throughout the trading terminal UI.",
    img: "/Cryptrix.png",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg", "/git.svg"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "SWR", "CoinGecko API"],
    features: [
      "Real-time market data and live price polling via the CoinGecko API",
      "Interactive candlestick charts for technical analysis",
      "Global search with a Cmd+K command palette",
      "Full trading terminal UI",
    ],
    liveLink: "https://cryptrix-phi.vercel.app/",
    repoLink: "https://github.com/Prashan33/cryptrix",
  },
  {
    id: 2,
    title: "BookAid — Book Discovery Website",
    des: "A responsive book discovery app with AI chat that lets users have conversations with any book, plus subscription plans for premium access. Built with React and Vite, integrated with a books REST API and an LLM for interactive Q&A.",
    longDes:
      "BookAid is a responsive book discovery platform built around an unusual idea: letting users have a conversation with a book instead of just reading a summary of it. Users can search and browse titles through an integrated books REST API, then open an AI chat interface that uses an LLM to answer questions about the book's plot, themes, and characters as if the book itself were responding. The app also includes subscription plans that gate premium access to the AI chat feature, giving it a real product shape beyond a single demo interaction. It's built with React and Vite for a fast development and build experience, with the frontend and AI integration wired together through REST APIs for both book data and chat responses.",
    img: "/bookaid.png",
    iconLists: ["/re.svg", "/tail.svg", "/git.svg"],
    tech: ["React", "Vite", "JavaScript", "REST APIs", "AI Integration"],
    features: [
      "AI chat that lets users have conversations with any book",
      "Subscription plans for premium access",
      "Integrated with a books REST API for discovery",
      "LLM-powered interactive Q&A",
    ],
    liveLink: "https://book-aid.vercel.app/",
    repoLink: "https://github.com/Prashan33/BookAid",
  },
  {
    id: 3,
    title: "VistaTribe — Travel Listing Platform",
    des: "A full-stack travel listing platform where users can create, explore, and manage listings. Features RESTful APIs, dynamic data handling, and user authentication.",
    longDes:
      "VistaTribe is a full-stack travel listing platform modeled after real-world listing sites like Airbnb, letting users create, browse, and manage their own travel listings. It's built with a classic MVC structure using Node.js and Express on the backend, MongoDB with Mongoose for data modeling, and server-rendered EJS templates on the frontend. The platform includes user authentication so listings are tied to accounts, RESTful routes for full CRUD functionality on listings, and dynamic data handling to support features like filtering and detail views. It was built to get hands-on experience with the traditional server-rendered full-stack pattern, laying the groundwork before moving toward API-first and React-based architectures in later projects.",
    img: "/VistaTribe.png",
    iconLists: ["/next.svg", "/re.svg", "/git.svg"],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "REST APIs"],
    features: [
      "Create, explore, and manage travel listings",
      "RESTful API architecture with dynamic data handling",
      "User authentication and authorization",
      "Server-rendered views with EJS templating",
    ],
    liveLink: "https://vistatribe.onrender.com/listings",
    repoLink: "https://github.com/Prashan33/VistaTribe",
  },
  {
    id: 4,
    title: "PrashanGPT — AI Chatbot Website",
    des: "A full-stack AI chatbot enabling real-time conversations through API integration. Built with React and Node.js, using Context API for global state management.",
    longDes:
      "PrashanGPT is a full-stack AI chatbot website that enables real-time conversational interactions through direct API integration with a language model. The frontend is built with React and Vite, using the Context API for global state management so chat history and UI state stay in sync across components without prop drilling. The backend, built with Node.js and Express, exposes REST APIs that proxy requests to the AI provider, keeping API keys and request logic off the client. It was an early full-stack project focused on building a clean, real-time chat UI and understanding how to structure state management across a React frontend and an Express backend.",
    img: "/PrashanGPT.png",
    iconLists: ["/re.svg", "/next.svg", "/git.svg"],
    tech: ["React", "Vite", "Node.js", "Express.js", "Context API", "REST APIs"],
    features: [
      "Real-time AI conversations via API integration",
      "Full-stack architecture with a React frontend and Node/Express backend",
      "Global state management using Context API",
    ],
    liveLink: "https://prashangpt-1.onrender.com/",
    repoLink: "https://github.com/Prashan33/PrashanGPT",
  },
];

export const testimonials = [
  {
    quote:
      "Prashan is a driven and curious developer who consistently brings energy and creativity to his work. His ability to pick up new technologies quickly and apply them to real-world projects stands out. He has a strong foundation in full-stack development and a genuine passion for building software. I have no doubt he will make a meaningful impact wherever he goes next.",
    name: "Raunak Raj Rauniyar",
    title: "Founder & CEO • CallNetwork | Lead at Superteam Nepal",
    img: "/profile.jpeg",
  },
  {
    quote:
      "Prashan demonstrates a strong desire to understand the 'why' behind the technologies he uses, not just the 'how'. In my courses, he showed consistent curiosity, a methodical approach to problem solving, and the initiative to go beyond the material. Those qualities are exactly what distinguish great engineers from good ones.",
    name: "Jacob Hochstetler",
    title: "Clinical Assistant Professor • Computer Science & Engineering, UNT",
    img: "/jacob.jpg",
  },
  {
    quote:
      "Prashan is a driven and curious developer who consistently brings energy and creativity to his work. His ability to pick up new technologies quickly and apply them to real-world projects stands out. He has a strong foundation in full-stack development and a genuine passion for building software. I have no doubt he will make a meaningful impact wherever he goes next.",
    name: "Raunak Raj Rauniyar",
    title: "Founder & CEO • CallNetwork | Lead at Superteam Nepal",
    img: "/profile.jpeg",
  },
  {
    quote:
      "Prashan demonstrates a strong desire to understand the 'why' behind the technologies he uses, not just the 'how'. In my courses, he showed consistent curiosity, a methodical approach to problem solving, and the initiative to go beyond the material. Those qualities are exactly what distinguish great engineers from good ones.",
    name: "Jacob Hochstetler",
    title: "Clinical Assistant Professor • Computer Science & Engineering, UNT",
    img: "/jacob.jpg",
  },
  {
    quote:
      "Prashan has a genuine interest in understanding how distributed systems and computing workflows come together at scale. He approaches complex topics with patience and intellectual curiosity, and brings that same rigour to his own projects. I expect him to continue growing into a well-rounded software engineer.",
    name: "Tong Shu",
    title: "Assistant Professor • Computer Science & Engineering, UNT",
    img: "/tong_shu.jpg",
  },
];

export const companies: {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}[] = [];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    desc: "Built multiple full-stack projects using React, Node.js, Express, and MongoDB — handling everything from REST API design to responsive front-end UI.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI-Powered Web Applications",
    desc: "Developed AI-integrated web apps using React and Node.js, connecting front-end interfaces to LLM APIs for conversational and generative features.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    desc: "Actively practising DSA problems on LeetCode and competitive platforms to strengthen problem-solving skills and prepare for technical interviews.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Independent Software Development",
    desc: "Self-directed learner shipping personal projects end-to-end — from ideation and system design through to deployment and iteration.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Prashan33",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/prashan-adhikari-902915242/",
  },
];
