import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

// first parameter virtual path
// for more see: https://expressjs.com/en/starter/static-files.html
app.use('/assets', express.static(path.join(__dirname,'assets')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});