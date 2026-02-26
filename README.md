# Memija Typography

Typography application built with React, Webpack, and Express.

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Memija_memija-typography&metric=alert_status)](https://sonarcloud.io/dashboard?id=Memija_memija-typography)

## Prerequisites

- Node.js (v14 or higher recommended)
- npm

## Development

Install dependencies:

```bash
npm install
```

Start development server (webpack-dev-server):

```bash
npm run open
```

Lint code:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

## Production Build

Build the application for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Running the Server

To run the Express server (which serves the built application):

```bash
npm start
```

Note: Make sure you have run `npm run build` first.

## Deployment

This application is configured for deployment on Heroku. It includes a `Procfile` and `server.js` for serving static assets and handling security headers.

For GitHub Pages deployment, you can use the `gh-pages` package (not currently configured, as the project seems setup for Node.js server deployment).
