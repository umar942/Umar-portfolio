export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="30%" stopColor="#F77737" />
          <stop offset="60%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
      <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="white" />
    </svg>
  );
}
