import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// mongo connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database is connected!");
  } catch (error) {
    throw error;
  }
};

// mongoose listening
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb is disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected");
});

// middlewares
// to use json
app.use(express.json());
// to use cookie
app.use(cookieParser());
// endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
// error middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "SOmething went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// backend connection
app.listen(8800, () => {
  connect();
  console.log("Backend is connected! at 8800");
});
