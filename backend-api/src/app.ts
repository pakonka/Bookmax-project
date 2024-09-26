import express, { Express, Request, Response } from "express";
const app: Express = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
