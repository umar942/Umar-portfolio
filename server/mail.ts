import nodemailer from "nodemailer";
import type { InsertMessage } from "@shared/schema";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
};

let transporter: nodemailer.Transporter | null = null;

function readMailConfig(): MailConfig {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const portRaw = process.env.SMTP_PORT?.trim() ?? "";
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS?.trim() ?? "";
  const to = (process.env.CONTACT_TO?.trim() || "umarali40451@gmail.com");
  const from = (process.env.CONTACT_FROM?.trim() || user);

  const port = Number.parseInt(portRaw, 10);
  if (!host || !Number.isFinite(port) || !user || !pass || !from) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FROM in .env.",
    );
  }

  const secure = (process.env.SMTP_SECURE?.trim() || "").toLowerCase() === "true";
  return { host, port, secure, user, pass, to, from };
}

function getTransporter(config: MailConfig) {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  return transporter;
}

export async function sendContactEmail(input: InsertMessage) {
  const config = readMailConfig();
  const mailer = getTransporter(config);

  const subject = `New portfolio contact from ${input.name}`;
  const text = [
    "You received a new message from your portfolio form.",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    "Message:",
    input.message,
  ].join("\n");

  await mailer.sendMail({
    from: config.from,
    to: config.to,
    replyTo: input.email,
    subject,
    text,
  });
}
