import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: number = 8080;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'yo phone lingin!!' })
})

app.listen(port, () => {
    console.log(`🍕 [server] running at http://localhost:${port}/`);
})