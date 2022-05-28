import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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

// mongoose listing
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb is disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected");
});

// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// backend connection
app.listen(8800, () => {
  connect();
  console.log("Backend is connected!");
});
