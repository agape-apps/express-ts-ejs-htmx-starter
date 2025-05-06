import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Determine if we're in production by checking if we're in the /server directory
const isProduction = __dirname.includes('/server');

// Set views directory - handle both development and production paths
const viewsPath = isProduction
  ? path.join(process.cwd(), 'src', 'views')
  : path.join(process.cwd(), 'src', 'views');
app.set('views', viewsPath);

// Serve static files from the "static" directory
const staticPath = isProduction
  ? path.join(process.cwd(), 'src', 'static')
  : path.join(process.cwd(), 'src', 'static');
app.use('/static', express.static(staticPath));

// Render your views
app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'HTMX-Starter' });
});

app.get('/congrats/:counter', (req: Request, res: Response) => {
    res.render('partials/congrats', { title: 'Congrats!', counter: req.params.counter});
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000. Open http://localhost:3000 🎉');
});
