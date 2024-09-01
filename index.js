
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import contactRoute from './routes/contactRoutes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MongoUri;
const frontendURL = process.env.URL_FRONTEND;
// Use CORS middleware
app.use(
  cors({
    origin: frontendURL,
    // origin:"http://localhost:3000",
    // Remove the trailing slash from the origin URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);
// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.use("/api", contactRoute);
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
