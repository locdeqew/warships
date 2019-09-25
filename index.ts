import express from "express";

const server = express();

server.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello Worlsssd!');
})

server.listen(3000, () => {
    console.log('test');
})