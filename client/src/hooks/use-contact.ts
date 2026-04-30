import { useMutation } from "@tanstack/react-query";
import type { InsertMessage } from "@/lib/contact-schema";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || "umarali40451@gmail.com";
const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function buildContactPayload(data: InsertMessage) {
  const payload = new FormData();

  payload.append("name", data.name);
  payload.append("email", data.email);
  payload.append("_replyto", data.email);
  payload.append("message", data.message);
  payload.append("_subject", `New portfolio message from ${data.name}`);
  payload.append("_template", "table");
  payload.append("_captcha", "false");
  payload.append("_honey", "");

  return payload;
}

async function sendContactMessage(data: InsertMessage) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: buildContactPayload(data),
  });

  if (!response.ok) {
    const fallbackMessage = "Could not send your message. Please try again.";
    const responseText = await response.text();
    let errorMessage = responseText || fallbackMessage;

    try {
      const parsed = JSON.parse(responseText) as { message?: string };
      errorMessage = parsed.message || fallbackMessage;
    } catch {
      errorMessage = responseText || fallbackMessage;
    }

    throw new Error(errorMessage);
  }

  return response.json().catch(() => ({ ok: true }));
}

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: sendContactMessage,
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: `Thanks, your message was sent to ${CONTACT_EMAIL}.`,
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
