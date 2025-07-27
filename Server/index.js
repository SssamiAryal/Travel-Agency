require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection, sequelize } = require("./database/db");
const router = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(authenticateToken);
app.use(express.json());
app.use("/api", router);
app.use("/api/authnti",authRouter);

connection();

sequelize
  .sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
