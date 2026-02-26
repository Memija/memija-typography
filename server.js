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
      // Use hardcoded domain to prevent Host Header Injection
      // Validate req.url to prevent open redirects via protocol-relative URLs
      // If req.url starts with //, treat it as /
      let safeUrl = req.originalUrl || req.url;
      if (safeUrl.startsWith('//')) {
          safeUrl = safeUrl.replace(/^\/+/, '/');
      }

      res.redirect(301, 'https://memija-typography.herokuapp.com' + safeUrl);
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
