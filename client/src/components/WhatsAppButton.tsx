import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/923101032419?text=Hi%20Umar,%20I'm%20interested%20in%20your%20MERN%20stack%20development%20services.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-sm font-medium text-background opacity-0 shadow-lg transition-all duration-200 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with me
      </span>
      <span className="relative flex h-14 w-14">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CF0AB] opacity-75" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-200 group-hover:scale-110">
          <FaWhatsapp className="h-7 w-7 text-white" />
        </span>
      </span>
    </a>
  );
}
