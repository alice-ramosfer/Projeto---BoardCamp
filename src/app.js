import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import gamesRouter from "./routers/games.routers.js";
import customersRouter from "./routers/customers.routers.js";
import rentalsRouter from "./routers/rentals.routers.js";
import { errorHandler } from "./middlewares/errorHandler.middlewares.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(gamesRouter);
app.use(customersRouter);
app.use(rentalsRouter)
app.use(errorHandler);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)});