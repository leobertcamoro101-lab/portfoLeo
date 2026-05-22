import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middleware: [
      (req, res, next) => {
        // Content Security Policy - prevents XSS attacks
        res.setHeader(
          'Content-Security-Policy',
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.jsdelivr.net cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net; font-src 'self' fonts.googleapis.com fonts.gstatic.com cdn.jsdelivr.net; img-src 'self' data: https:; connect-src 'self' api.emailjs.com; frame-ancestors 'none';"
        );
        
        // Prevent MIME type sniffing
        res.setHeader('X-Content-Type-Options', 'nosniff');
        
        // Clickjacking protection - prevent embedding in iframes
        res.setHeader('X-Frame-Options', 'DENY');
        
        // XSS protection (legacy, for older browsers)
        res.setHeader('X-XSS-Protection', '1; mode=block');
        
        // Referrer policy - control referrer information
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        
        // Permissions policy - control browser features
        res.setHeader(
          'Permissions-Policy',
          'geolocation=(), microphone=(), camera=(), payment=()'
        );
        
        // For HTTPS deployment, uncomment this:
        // res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
        
        next();
      },
    ],
  },
});
