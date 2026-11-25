import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

// Radial glow that follows the cursor. Position is written to CSS variables
// directly so mouse moves don't trigger React re-renders.
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={cn("spotlight-card relative", className)}>
      {children}
    </div>
  );
}
