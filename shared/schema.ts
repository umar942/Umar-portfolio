import { z } from "zod";

export const insertMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(1, "Message is required"),
});

export const messageSchema = insertMessageSchema.extend({
  id: z.number().int().positive(),
  createdAt: z.string().datetime(),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = z.infer<typeof messageSchema>;
