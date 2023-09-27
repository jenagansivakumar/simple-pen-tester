import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/check", async (req, res) => {
  const targetUrl = req.query.url as string;

  try {
    const response = await fetch(targetUrl, { method: "HEAD" });
    res.json({ status: response.status.toString() });
  } catch (error) {
    res.json({ status: "Error fetching" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
