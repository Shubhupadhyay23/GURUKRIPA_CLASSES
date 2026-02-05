import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from dist/spa
  const spaPath = path.join(__dirname, "../dist/spa");
  app.use(express.static(spaPath, { maxAge: "1h" }));

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // SPA fallback: serve index.html for all other routes
  // This allows React Router to handle routing in the browser
  app.get("*", (_req, res) => {
    res.sendFile(path.join(spaPath, "index.html"));
  });

  return app;
}
