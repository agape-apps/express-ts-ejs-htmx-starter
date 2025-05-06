import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "static" directory
app.use('/static', express.static(path.join(__dirname, 'static')));

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
