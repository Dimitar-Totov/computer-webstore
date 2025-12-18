import express from "express";
import pkg from "pg";
import cors from "cors";

const { Pool } = pkg;

const app = express();
app.use(express.json());
app.use(cors());
// Do not left this in production, only temporarily
// app.use(cors({
//   origin: "https://computer-webstore.onrender.com"
// }));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.get("/api/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

app.listen(process.env.PORT || 3000);
