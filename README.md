# Express - TypeScript - JSX - HTMX - TailwindCSS/DaisyUI - Starter 🚀
A minimalistic node starter application for getting into HTMX.

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

5. Start the server watching for changes
```
bun run dev
```

6. Finally, open http://localhost:3000/ in your browser. Thats it!

### Other resources

- [HTMX Documentation](https://htmx.org/docs/)

---

### Best Practices for Production

**Build for production**

```
bun run serve
```

- Only needed files copied into a separate directory
```
bun run serve:production
```

The minimal set of files and directories needed on your production server:

```
production/
├── server/
│   └── server.js        # Your bundled application including most node_modules
├── src/
│   ├── static/          # Frontend assets
│   │   ├── app.css      
│   │   └── app.js       
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
```bash
npm install -g pm2
```

2. Start your application:
```bash
pm2 start dist/server.js --name "your-app-name"
```

3. Ensure it starts on system reboot:
```bash
pm2 startup
pm2 save
```

## All devDependencies listed in package.json

* **express**: Used in src/app.ts.
* **express-react-views**: Used in src/app.ts.
* **react**: Used for .tsx views and by express-react-views.
* **react-dom**: Used for .tsx views and by express-react-views.
* **@babel/preset-typescript**: Used as a Babel preset in src/app.ts.
* **@types/express**: Used for type definitions in src/app.ts.
* **@types/node**: Used for type definitions in src/app.ts.
* **@types/react**: Used for type definitions in .tsx files.
* **@types/react-dom**: Used for type definitions in .tsx files.
* **alpinejs**: Imported and used in src/frontend/main.js.
* **concurrently**: Used in package.json scripts (watch:frontend, dev).
* **daisyui**: Used as a plugin in tailwind.config.js.
* **esbuild**: Used in package.json scripts for building JavaScript.
* **htmx.org**: Imported in src/frontend/main.js.
* **nodemon**: Used in package.json scripts for watching backend changes.
* **tailwindcss**: Used for styling, configured in tailwind.config.js, and its CLI is used in package.json scripts.
* **ts-node**: Used in package.json scripts for running TypeScript files with Nodemon.
* **typescript**: Used for compiling TypeScript files (e.g., build:backend script).