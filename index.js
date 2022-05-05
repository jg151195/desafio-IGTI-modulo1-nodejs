import express from "express";
import router from "./routers/pedidos.routers.js";

const app = express();

app.use(express.json());

app.use("/pedidos", router)

app.listen(2000, ()=> console.log("Listening 2000"));
