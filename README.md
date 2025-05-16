# Express - TypeScript - EJS - HTMX - Bulma CSS - Starter 🚀
A minimalistic node starter application for getting into HTMX.

**This is the EJS Version. Switch to the main branch to see the JSX version.**

---

### Setup Guide

1. Make sure you have [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads) and Bun installed on your machine.
2. Open a terminal and clone this repository (alternatively download zip).
```
git clone
```
3. **cd** into the project folder
```
cd express-ts-ejs-htmx-starter
```
4. Install the packages with **bun**
```
bun install
```
5. Start the server.
```
bun run dev
```
6. Finally, open http://localhost:3000/ in your browser. Thats it!

### Other resources

- [HTMX Documentation](https://htmx.org/docs/)
- [Bulma Documentation](https://bulma.io/documentation/)

---

### Best Practices for Production



**Build for production**
```
bun run build:production
bun run serve:production
```

The minimal set of files and directories needed on your production server:

```
production/
├── server/
│   └── server.js        # Your bundled application including most node_modules
├── src/
│   ├── static/          # Frontend assets
│   │   ├── app.css      # Custom styles
│   │   ├── bulma.min.css # Bulma CSS framework
│   │   └── app.js       # Bundled JavaScript with HTMX
│   └── views/           # EJS templates
└── .env                 # Environment variables (if needed)
├── package.json         # For dependencies not bundled with esbuild (optional, check)
└── node_modules/        # Installed dependencies not bundled (optional, check)
```

1. **Partial bundling**: If some dependencies can't be bundled, use the `--external:package-name` flag with esbuild to exclude them
2. **Specify production dependencies**: In package.json, ensure only needed packages are in "dependencies" (not "devDependencies")
3. **Minimal production install**: If you do need some node_modules, use `npm ci --omit=dev` or `npm install --production`

### Using Process Manager (Recommended)
For better stability and performance in production, use a process manager like PM2:
1. Install PM2 globally:
```
bashnpm install -g pm2
```

2. Start your application:
```
bashpm2 start dist/server.js --name "your-app-name"
```

3. Ensure it starts on system reboot:
```
bashpm2 startup
pm2 save
```