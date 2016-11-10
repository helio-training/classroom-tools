import Express from 'express';
import Parser from 'body-parser';

const app = Express();

app.use(Parser.json());


export default app;
