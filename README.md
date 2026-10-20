# Leobert Camoro

### Frontend Developer | Building thoughtful experiences with React

Welcome to my portfolio repository. I’m Leobert, a developer learning by building, experimenting, and contributing to open-source projects. I’m focused on growing my frontend skills and creating web experiences that feel clear, responsive, and enjoyable to use.

This portfolio brings together my projects, skills, background, and ways to get in touch.

## About the portfolio

The site includes:

- A landing page with a personal introduction and selected projects
- A skills section highlighting the tools and technologies I’m learning
- An about page with work experience, education, and certificates
- A contact form powered by EmailJS
- Responsive layouts, dark-mode styling, and animated interactions
- Internationalization support with i18next

## Built with

- React 19 and JavaScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- i18next and react-i18next
- EmailJS

## Run locally

### Prerequisites

- Node.js (a current LTS release)
- npm

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/leobertcamoro101-lab/portfoLeo.git
   cd portfoLeo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure EmailJS. Copy `.env.example` to `.env` (or `.env.local`), then fill in your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   These variables are used by the contact form. Keep local environment files out of version control; never put private credentials in frontend code.

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed in your terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:e2e` | Run end-to-end tests with Cypress |
| `npm run test:all` | Run unit and end-to-end tests |

## Deployment

The app can be deployed to a static hosting provider such as Vercel or Netlify. Configure the three `VITE_EMAILJS_*` environment variables in the hosting provider’s project settings, then use `npm run build` as the build command and `dist` as the output directory.

## Find me online

- [GitHub](https://github.com/leobertcamoro101-lab)
- [LinkedIn](https://www.linkedin.com/in/leobert-camoro-1b811a231/)
- [Email](mailto:leobertcamoro101@gmail.com)
