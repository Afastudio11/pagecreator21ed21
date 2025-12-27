import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files with proper cache headers
  app.use(express.static(distPath, {
    maxAge: "1d",
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // No cache for HTML files to ensure fresh content
      if (filePath.endsWith(".html")) {
        res.set("Cache-Control", "public, max-age=0, must-revalidate");
        res.set("Content-Type", "text/html; charset=utf-8");
      }
      // Cache CSS and JS files
      else if (filePath.endsWith(".css") || filePath.endsWith(".js")) {
        res.set("Cache-Control", "public, max-age=31536000, immutable");
        res.set("Content-Type", filePath.endsWith(".css") ? "text/css; charset=utf-8" : "application/javascript; charset=utf-8");
      }
      // Cache images
      else if (/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(filePath)) {
        res.set("Cache-Control", "public, max-age=31536000, immutable");
      }
      // Cache fonts
      else if (/\.(woff|woff2|ttf|otf|eot)$/i.test(filePath)) {
        res.set("Cache-Control", "public, max-age=31536000, immutable");
      }
    }
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.set("Cache-Control", "public, max-age=0, must-revalidate");
    res.set("Content-Type", "text/html; charset=utf-8");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
