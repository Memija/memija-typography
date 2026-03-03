const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const url = require('url');

const app = express();

// Enable trust proxy for Heroku
app.enable('trust proxy');

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'"], // Removed 'unsafe-inline'
        "img-src": ["'self'", "data:", "https:"],
      },
    },
  })
);

// Compression
app.use(compression());

// Force HTTPS redirection
app.use((req, res, next) => {
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    // Only redirect if not localhost
    if (req.headers.host && req.headers.host.includes('localhost')) {
      next();
    } else {
      // Use URL constructor for safe URL construction
      // This sanitizes the path and query parameters
      try {
        const sanitizedPath = req.path.replace(/^[/\\]+/, '');
        const targetUrl = new URL(sanitizedPath, 'https://memija.github.io/memija-typography/');

        if (req.query && Object.keys(req.query).length > 0) {
            // URLSearchParams handles encoding automatically
            targetUrl.search = new URLSearchParams(req.query).toString();
        }

        res.redirect(301, targetUrl.toString());
      } catch (error) {
        // Fallback for invalid URLs
        res.redirect(301, 'https://memija.github.io/memija-typography/');
      }
    }
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
