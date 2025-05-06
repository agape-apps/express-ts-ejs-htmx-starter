import express, { Request, Response } from 'express';
import path from 'path';
import reactViews from 'express-react-views';

const app = express();

// Set the view engine to JSX
app.set('view engine', 'tsx');
app.engine('tsx', reactViews.createEngine({
  babel: {
    presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: ['styled-jsx/babel'],
  },
}));


// Views Configuration
const viewsPath = path.join(process.cwd(), 'src', 'views');
app.set('views', viewsPath);

// Static File Serving
const staticPath = path.join(process.cwd(), 'src', 'static');
app.use('/static', express.static(staticPath));

// Render your views
app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'HTMX-Starter' });
});

app.get('/congrats/:counter', (req: Request, res: Response) => {
    res.render('partials/Congrats', { title: 'Congrats!', counter: req.params.counter}); // Note: Component name likely capitalized
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000. Open http://localhost:3000 🎉');
});
