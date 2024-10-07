import path from 'path'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongoDb.js";
import bodyParser from "body-parser";
import {app, io, server} from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __direname = path.resolve()

dotenv.config();

app.use(cors());
app.use(express.json()); //To parser the incoming requests with json payloads (from req.body)
app.use(cookieParser()); //To access the cookie

app.use(bodyParser.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__direname, "/frontend/build")))

app.get("*", (req, res)=>{
  res.sendFiles(path.join(__direname, "frontend", "build", "index.html"))
})

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Port is listening on ${PORT}`);
});
