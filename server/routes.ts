import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const readableError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: readableError.message 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to save your message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
