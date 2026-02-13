import type { Message, InsertMessage } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemoryStorage implements IStorage {
  private nextId = 1;
  private messages: Message[] = [];

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.nextId++,
      name: insertMessage.name,
      email: insertMessage.email,
      message: insertMessage.message,
      createdAt: new Date().toISOString(),
    };

    this.messages.push(message);
    return message;
  }
}

export const storage: IStorage = new MemoryStorage();
