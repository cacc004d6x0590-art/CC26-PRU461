import express from "express";
import cors from "cors";
import testUserRoutes from "./routes/testUser.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/test", testUserRoutes);

// module.exports = app;
export default app;
