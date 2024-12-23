import express, { Request, Response } from 'npm:express';
import morgan from 'npm:morgan';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (_req: Request, res: Response) => {
    res.render('index');
});
//public and render
app.use(express.static('public'));
app.set('views', 'public/views');
app.set('view engine', 'pug');

//app.use(errorHandler);
export default app;