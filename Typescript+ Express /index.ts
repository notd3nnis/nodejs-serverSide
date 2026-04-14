import express, { Express, Request, Response } from "express";

const PORT = 8000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("welcome ");
});

app.listen(PORT, () => {
  console.log("server started at 8000");
});
