import express, { Request, Response } from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import connectionOptions from "./config/ormconfig";
import * as dotenv from "dotenv";


const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

(async() =>  {
  await createConnection(connectionOptions)
  .then(() => {
    console.log("DB CONNECTION!");
    app.listen(3000, () => {
      console.log("Server Starting... 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
})();


