
// import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import contactRoute from './routes/contactRoutes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MongoUri;
// const frontendURL = process.env.URL_FRONTEND;
// app.use(
//   cors({
//     origin: frontendURL,
//     // origin:"http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//   }),
// );
const cors = require('cors');
const corsOptions = {
  origin: 'https://intern-frontend-drab.vercel.app', 
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));
const allowedOrigins = ['https://intern-frontend-drab.vercel.app'];
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
