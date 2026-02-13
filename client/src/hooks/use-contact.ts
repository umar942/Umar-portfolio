import { useMutation } from "@tanstack/react-query";
import type { InsertMessage } from "@/lib/contact-schema";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || "umarali40451@gmail.com";

function buildMailtoLink(data: InsertMessage) {
  const subject = `Portfolio inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const mailto = buildMailtoLink(data);
      window.location.href = mailto;
      return { ok: true };
    },
    onSuccess: () => {
      toast({
        title: "Email draft opened",
        description: `Your email app opened with a pre-filled message to ${CONTACT_EMAIL}.`,
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
