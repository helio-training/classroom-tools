import Express from 'express';
import Parser from 'body-parser';
import Router from './routes';

const app = Express();

app.use(Parser.json());

Router(app);


export default app;
