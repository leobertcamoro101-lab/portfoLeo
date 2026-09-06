export const PROJECTS = [
  {
    id: 10,
    icon: "🗓️",
    iconBg: "bg-[#E4F2EB]",
    type: "personal",
    title: "TaskFlow",
    description:
      "Full-stack task manager with Laravel API backend, React frontend, JWT auth via Sanctum, and PostgreSQL database.",
    tags: ['React', 'Vite', 'Laravel', 'PostgreSQL', 'Sanctum', 'Zustand', 'React Query'],
    liveUrl: null,
    sourceUrl: "https://github.com/leobertcamoro101-lab/TaskFlow-react-laravel",
  },
  {
    id: 9,
    icon: "🗓️",
    iconBg: "bg-[#E4F2EB]",
    type: "github",
    title: "calcom/cal.diy",
    description:
      "Cal.diy is the community-driven, fully open-source scheduling platform — a fork of Cal.com with all enterprise/commercial code removed. Cal.diy is 100% MIT-licensed with no proprietary Enterprise Edition features. It's designed for individuals and self-hosters who want full control over their scheduling infrastructure without any commercial dependencies.",
    tags: [ "c8", "checkly", "dotenv-checker", "husky", "i18n-unused", "jest-diff", "jest-summarizing-reporter", "lint-staged", "mailhog", "next-router-mock", "node-gyp", "node-ical", "prismock", "resize-observer-polyfill", "tsc-absolute", "turbo", "typescript", "vitest", "vitest-fetch-mock", "vitest-mock-extended"
],
    liveUrl: null,
    sourceUrl: "https://github.com/leobertcamoro101-lab/cal.diy",
    role: "Open Source Contributor",
    pullRequests: [
      {
        id: 1,
        title: "Removed unused TokenHandler component and its test file after confirming it was not exported or imported anywhere in the codebase. #30078",
        status: "open",  // merged | open | closed
        url: "https://github.com/calcom/cal.diy/pull/30078",
      },
      {
        id: 2,
        title: "Fixed hardcoded data-testid in VerticalTabItem component, making it truly reusable. Updated component and test file. #30079",
        status: "open",
        url: "https://github.com/calcom/cal.diy/pull/30079",
      },
    ],
  },
  {
    id: 8,
    icon: "📊",
    iconBg: "bg-[#E4F2EB]",
    type: "personal",
    title: "Spendr",
    description:
      "Transaction form for adding new expenses, Transaction list for viewing all entries, Summary cards for financial overview, Charts powered by Recharts for data visualization, Filter bar for narrowing down transactions. It's an ideal tool for personal finance management and understanding spending habits over time.",
    tags: ["React", "Vite", "Tailwind CSS", "uuid", "recharts"],
    liveUrl: "https://spendr-lac.vercel.app/",
    sourceUrl: "https://github.com/leobertcamoro101-lab/react-play.git",
  },
  {
    id: 7,
    icon: "▶️",
    iconBg: "bg-[#E4F2EB]",
    type: "github",
    title: "ReactPlay",
    description:
      "react-play is an open-source web app that helps you learn ReactJS faster with a hands-on practice model. It is a collection of ReactJS projects that you can use to learn ReactJS. Is that all? Nope. You can also create your projects and share them with the world. The best part is that the ReactJS experts will review your project code before it gets part of the ReactPlay app. Isn't that a pure WIN-WIN?",
    tags: ["add", "axios", "browser-image-compression", "classnames", "codemirror", "date-fns", "dom-to-image", "dompurify", "downloadjs", "file-saver", "firebase", "git-repo-api", "graphql", "highlight.js", "html-to-image", "html2canvas", "json-graphql-parser", "jspdf", "leaflet", "lodash", "lodash.memoize", "mathjs", "p5", "react", "react-chatbot-kit", "react-codemirror2", "react-color", "react-confetti", "react-countdown", "react-dom", "react-dropzone", "react-error-boundary", "react-helmet", "react-hot-toast", "react-icons", "react-infinite-scroll-component", "react-infinite-scroll-hook", "react-infinite-scroller", "react-leaflet", "react-loader-spinner", "react-organizational-chart", "react-p5", "react-qr-code", "react-redux", "react-router-dom", "react-scripts", "react-shimmer-effect", "react-simple-maps", "react-toastify", "react-twitter-widgets", "react-webcam", "redux", "redux-persist", "remarkable", "reselect", "sass", "styled-components", "swiper", "url", "web-vitals", "workbox-cacheable-response", "workbox-core", "workbox-expiration", "workbox-precaching", "workbox-routing", "workbox-strategies", "workbox-window", "yarn"],
    liveUrl: null,
    sourceUrl: "https://github.com/leobertcamoro101-lab/react-play.git",
    role: "Open Source Contributor",
    pullRequests: [
      {
        id: 1,
        title: "fix: remove unused imports and fix prettier formatting- #1721",
        status: "open",  // merged | open | closed
        url: "https://github.com/reactplay/react-play/pull/1721",
      },
      {
        id: 2,
        title: "[Play] Expense Tracker #1722",
        status: "open",
        url: "https://github.com/reactplay/react-play/issues/1722",
      },
      {
        id: 3,
        title: "feat: add expense tracker pro play- #1723",
        status: "open",
        url: "https://github.com/reactplay/react-play/pull/1723",
      },
    ],
  },
  {
    id: 6,
    icon: "🎥",
    iconBg: "bg-[#E4F2EB]",
    type: "personal",
    title: "ReelScout",
    description:
      "MovieSearch is a React movie discovery app built with Vite, Tailwind CSS, and the TMDB API. It displays weekly trending movies on startup and lets users search for films with debounced live search. Results appear as poster cards showing the title, release year, and rating. Users can load more search results and open any movie to view its synopsis, genres, runtime, rating, trailer, and cast in a modal.",
    tags: ["React", "Vite", "axios", "Tailwind CSS", "TMDB API"],
    liveUrl: 'https://reel-scout-eight.vercel.app/',
    sourceUrl: "https://github.com/leobertcamoro101-lab/ReelScout.git",
  },
  {
    id: 5,
    icon: "🌧️",
    iconBg: "bg-[#E4F2EB]",
    type: "personal",
    title: "WeatherNow",
    description:
      "WeatherNow is a React weather application built with Vite. Users can: Search for weather by city, View current temperature, conditions, humidity, wind, and other details, See a short-term forecast, Use their current location to get local weather, Save recently searched cities in browser local storage, Remove saved cities, Receive loading states and helpful error messages, The app retrieves data from the OpenWeatherMap API and uses CSS Modules for component styling.",
    tags: ["React", "Vite", "axios", "Tailwind CSS", "OpenWeatherMap API"],
    liveUrl: 'https://weather-now-sigma-three.vercel.app/',
    sourceUrl: "https://github.com/leobertcamoro101-lab/WeatherNow.git",
  },
  {
    id: 4,
    icon: "🗓️",
    iconBg: "bg-[#E4F2EB]",
    type: "personal",
    title: "TaskFlow",
    description:
      "TaskFlow is a simple and user-friendly task management app built with React. It allows users to add tasks, mark tasks as completed, delete tasks, filter tasks by status, and save tasks in browser local storage so they remain available after refreshing the page.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: null,
    sourceUrl: "https://github.com/leobertcamoro101-lab/TaskFlow.git",
  },
  {
    id: 3,
    icon: "📍",
    iconBg: "bg-[#E4F2EB]",
    type: "udemy",
    title: "Placepulse",
    description:
      "A web app where users can create accounts and log in, Browse users and view their listed places, Create, update, and manage place entries, Use authentication-protected routes for private actions. Updated to latest version and libraries.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel", "clsx", "Lucide React", "Nprogress", "Open Layer", "React Router DOM", "serve", "Tailwind Merge", "axios", "bcryptjs", "body-parser", "Cloudinary", "express", "Express Validator", "Jsonwebtoken", "Mongoose", "Multer", "Streamifier", "UUID", "express-mongo-sanitize", "express-rate-limit", "helmet", "Sendinblue API v3 SDK", "vitest", "@vitest/coverage-v8", "supertest", "ts-node-dev", "mongodb-memory-server", "@playwright/test", "pino"],
    liveUrl: "https://placepulse-updated.vercel.app/",
    sourceUrl: "https://github.com/leobertcamoro101-lab/placepulse-updated",
  },
  {
    id: 2,
    icon: "💰",
    iconBg: "bg-[#E4F2EB]",
    type: "udemy",
    title: "Investly",
    description:
      "A React investment calculator app with Tailwind CSS v4, Framer Motion animations, and responsive design.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel", "React Hook Form"],
    liveUrl: "https://investly-eight.vercel.app/",
    sourceUrl: "https://github.com/leobertcamoro101-lab/investly",
  },
  {
    id: 1,
    icon: "🌐",
    iconBg: "bg-[#EDEAE3]", 
    type: "personal",
    title: "Portfolio Website",
    description:
      "My first personal portfolio website built with React, showcasing my projects and skills. It features a clean design, smooth animations, and responsive layout.",
    tags: ["React", "React Router", "Tailwind CSS", "Vite", "Netlify", "Vercel", "Framer Motion", "i18next"],
    liveUrl: "https://portfo-leo-puce.vercel.app/",      // ← live demo
    sourceUrl: "https://github.com/leobertcamoro101-lab/portfoLeo",
  },

];

export const SKILLS = [
  { category: "Frontend", items: ["HTML", "CSS", "Javascript","React", "TypeScript", "Tailwind CSS", "Framer Motion", "i18next", "Zod", "clsx", "Lucide React", "nprogress", "ol", "React Router DOM", "serve", "Tailwind Merge",] },
  { category: "Backend",  items: ["Node.js", "Express.js", "Mongoose", "Multer", "Axios", "bcryptjs", "body-parser", "Express Validator", "Jsonwebtoken", "Streamifier", "UUID", "express-mongo-sanitize", "express-rate-limit", "helmet", "Sendinblue API v3 SDK", "vitest", "@vitest/coverage-v8", "supertest", "ts-node-dev", "mongodb-memory-server", "pino", "Laravel", "Laravel Sanctum", "Prisma"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "firebase", "Cloudinary"] },
  { category: "DevOps",   items: ["Docker", "Linux", "Git", "Firebase", "Vercel", "Netlify", "Render"] },
  { category: "Testing",  items: ["Jest", "Vitest", "Postman", "Playwright E2E", "Cypress"] },
  { category: "Other",    items: ["NPM", "BUN"] },
  { category: "AI-Assisted Development",   items: ["Claude (Anthropic)", "Prompt Engineering", "Codex", "ChatGPT (OpenAI)", "GitHub Copilot"] },
];