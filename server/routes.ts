import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./mail";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await sendContactEmail(input);
      const message = await storage.createMessage(input);
      res.json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid input",
          field: err.errors[0].path.join("."),
        });
      } else {
        console.error("Contact form submit error:", err);
        res.status(500).json({
          message: "Unable to send email right now. Please try again.",
        });
      }
    }
  });

  return httpServer;
}
