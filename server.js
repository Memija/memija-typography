const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const path = require('path');

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
      res.redirect('https://memija-typography.herokuapp.com' + req.url);
    }
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.info(`Server is running on port ${port}`); // Changed to console.info
});
