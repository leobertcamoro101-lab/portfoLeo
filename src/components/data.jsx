export const PROJECTS = [
  {
    id: 3,
    icon: "📍",
    iconBg: "bg-[#E4F2EB]",
    type: "udemy",
    title: "Placepulse",
    description:
      "A web app where users can create accounts and log in, Browse users and view their listed places, Create, update, and manage place entries, Use authentication-protected routes for private actions. Updated to latest version and libraries by me (mern project).",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel", "clsx", "Lucide React", "Nprogress", "Open Layer", "React Router DOM", "serve", "Tailwind Merge", "axios", "bcryptjs", "body-parser", "Cloudinary", "express", "Express Validator", "Jsonwebtoken", "Mongoose", "Multer", "Streamifier", "UUID", "express-mongo-sanitize", "express-rate-limit", "helmet", "Sendinblue API v3 SDK", "vitest", "@vitest/coverage-v8", "supertest", "ts-node-dev", "mongodb-memory-server"],
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
  { category: "Backend",  items: ["Node.js", "Express.js", "Mongoose", "Multer", "Axios", "bcryptjs", "body-parser", "Express Validator", "Jsonwebtoken", "Streamifier", "UUID", "express-mongo-sanitize", "express-rate-limit", "helmet", "Sendinblue API v3 SDK"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "firebase", "Cloudinary"] },
  { category: "DevOps",   items: ["Docker", "Linux", "Git", "Firebase", "Vercel", "Netlify", "Render"] },
  { category: "Testing",  items: ["Jest", "Vitest", "Postman"] },
  { category: "Other",    items: ["NPM"] }
];