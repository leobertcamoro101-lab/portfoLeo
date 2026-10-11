# Leobert Camoro | Portfolio

A personal portfolio website built with React and Vite to showcase projects, skills, experience, and contact information.

## Overview

This portfolio highlights:
- a landing page with hero section and intro
- a personal about-me section
- project showcase
- skills and technologies
- contact form with EmailJS
- responsive design and dark mode support

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- React Router
- i18next
- EmailJS
- Vitest
- Cypress

## Features

- Responsive portfolio layout
- Animated UI sections
- Multi-language support
- Contact form integration
- Dark mode styling
- Project and experience sections

## Live Demo

You can view the app locally in development mode, or deploy it to Vercel/Netlify for production hosting.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/leobertcamoro101-lab/portfoLeo.git
cd portfoLeo

2. Install dependencies

npm install

3. Configure environment variables
Copy the example env file and add your EmailJS credentials:

cp .env.example .env

Then update the values in .env:

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

4. Run the app

npm run dev

Open the local URL shown in the terminal.

Scripts

npm run dev        # start Vite dev server
npm run build      # production build
npm run preview    # preview production build
npm run lint       # run ESLint
npm run test       # run Vitest tests
npm run test:e2e   # run Cypress end-to-end tests

Project Structure

src/
  components/
  pages/
  assets/
  utils/
  navigation/
public/
.env.example
package.json
vite.config.js

Deployment
This project is ready to be deployed on:

Vercel
Netlify
any static host that supports Vite builds
For production builds:

npm run build

Contact
GitHub: https://github.com/leobertcamoro101-lab
LinkedIn: https://www.linkedin.com/in/leobert-camoro-1b811a231/
Email: leobertcamoro101@gmail.com
License
This project is for personal portfolio use.
