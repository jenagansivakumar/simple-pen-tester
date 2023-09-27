import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/check", async (req, res) => {
  const targetUrl = req.query.url as string;

  // Simple validation: Check if URL is not empty and has HTTP/HTTPS prefix.
  if (!targetUrl || !targetUrl.startsWith("http")) {
    return res.status(400).json({ status: "Invalid URL provided" });
  }

  try {
    const response = await fetch(targetUrl, { method: "HEAD" });
    res.json({ status: response.status.toString() });
  } catch (error) {
    console.error("Error while fetching the target URL:", error); // Log the error for server-side clarity

    if (error instanceof Error) {
      res.status(500).json({ status: `Fetch error: ${error.message}` }); // Send the error message to the client.
    } else {
      res.status(500).json({ status: "Unknown fetch error" }); // Send a generic error message for non-Error types
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
