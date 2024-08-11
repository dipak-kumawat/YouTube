import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
app.use(cors());

// Or enable CORS with specific options
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // if you need to send cookies or authentication headers
}));


dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO)  
    .then(() => {  
      console.log("connect to db");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser())
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong! Try again later.";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = 5000;
app.listen(port, () => {
  connect();
  console.log(`server is starting at http://localhost:${port}/`);
});
