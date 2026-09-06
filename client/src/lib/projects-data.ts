export type ProjectLink = {
  label: string;
  url: string;
  icon: "website" | "github" | "playstore" | "appstore" | "instagram";
};

export type Project = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  html_url: string;
  topics: string[];
  stargazers_count: number | null;
  language: string;
  logo: string;
  logoBgClass?: string;
  logoImgClass?: string;
  highlights?: string[];
  techStack?: string[];
  links: ProjectLink[];
  category: "web" | "app";
  order?: number;
};

export const projects: Project[] = [
  {
    id: 101,
    slug: "syssel",
    category: "app",
    order: 1,
    name: "Syssel",
    tagline: "Local Services Marketplace",
    description:
      "Syssel is a Norway-based marketplace platform that connects customers with local service providers, freelancers, and small businesses through booking, payments, and business management tools.",
    longDescription:
      "Syssel is a Norway-based marketplace platform that connects customers with local service providers, freelancers, and small businesses. The platform combines service discovery, booking, payments, communication, and business management tools into a single ecosystem, helping providers grow their businesses while making it easy for customers to find and book trusted local services.",
    html_url: "https://www.sysselmarket.com/infohub",
    topics: ["Marketplace", "Local Services", "Norway"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/syssel.png",
    highlights: [
      "Service provider discovery with location-based search and recommendations",
      "End-to-end booking and appointment management system",
      "Secure online payments and transaction processing",
      "Real-time communication between customers and service providers",
      "Ratings, reviews, and provider verification workflows",
      "Business management tools for freelancers and small businesses",
      "Integrated marketing and customer acquisition features",
      "Mobile-first responsive experience for customers and providers",
    ],
    links: [
      { label: "Visit Website", url: "https://www.sysselmarket.com/infohub", icon: "website" },
      { label: "Get it on Google Play", url: "https://play.google.com/store/apps/details?id=com.syssel&hl=en", icon: "playstore" },
      { label: "Follow on Instagram", url: "https://www.instagram.com/sysselmarket/", icon: "instagram" },
    ],
  },
  {
    id: 102,
    slug: "taskbound",
    category: "web",
    order: 2,
    name: "Taskbound",
    tagline: "Web3 Bounty & Rewards Platform",
    description:
      "TaskBound is a Web3-powered rewards platform that enables users to complete campaigns and tasks to earn blockchain-based rewards, with wallet authentication and reward distribution.",
    longDescription:
      "TaskBound is a Web3-powered rewards platform that enables users to participate in campaigns, complete tasks, and earn blockchain-based rewards. The platform connects project creators with community members through task-driven engagement campaigns, wallet-based authentication, reward distribution, and campaign management tools.",
    html_url: "https://taskbound.io/",
    topics: ["Web3", "Blockchain", "Rewards"],
    stargazers_count: null,
    language: "JavaScript",
    logo: "/images/taskbound.png",
    highlights: [
      "Wallet Authentication (MetaMask / WalletConnect)",
      "Campaign & Task Management",
      "Reward Distribution System",
      "User Progress Tracking",
      "Admin Dashboard",
      "Blockchain Integration",
      "Role-Based Access Control (RBAC)",
      "Responsive UI/UX",
      "Real-Time Campaign Analytics",
      "Secure Transaction Handling",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Wagmi",
      "Web3 Wallet Integration",
      "JWT Authentication",
      "Tailwind CSS",
      "REST APIs",
      "Blockchain Smart Contract Interaction",
    ],
    links: [
      { label: "Visit Website", url: "https://taskbound.io/", icon: "website" },
    ],
  },
  {
    id: 103,
    slug: "247seating",
    category: "web",
    order: 3,
    name: "247Seating",
    tagline: "Event Seating & Ticket Management Platform",
    description:
      "247Seating is an event management and seating platform that streamlines ticket sales, seat allocation, attendee management, and event operations through a centralized dashboard.",
    longDescription:
      "247Seating is an event management and seating platform designed to streamline ticket sales, seat allocation, attendee management, and event operations. The platform enables organizers to manage seating layouts, reservations, ticket distribution, guest tracking, and event workflows through a centralized dashboard. Modern seating platforms focus on real-time seat management, attendee tracking, operational coordination, and event analytics to improve both organizer efficiency and attendee experience.",
    html_url: "https://www.247seating.com",
    topics: ["Event Tech", "Ticketing", "Dashboard"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/247logo.png",
    highlights: [
      "Interactive Seating Management",
      "Event & Venue Configuration",
      "Ticket Booking System",
      "Reservation Management",
      "Role-Based Access Control (RBAC)",
      "Real-Time Status Tracking",
      "Admin Dashboard",
      "User & Attendee Management",
      "Reporting & Analytics",
      "Responsive UI/UX",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB / DynamoDB",
      "AWS Services",
      "JWT Authentication",
      "Tailwind CSS",
      "REST APIs",
    ],
    links: [
      { label: "Visit Website", url: "https://www.247seating.com", icon: "website" },
    ],
  },
  {
    id: 104,
    slug: "to-know-oneself",
    category: "web",
    order: 1,
    name: "To Know Oneself",
    tagline: "TKO – Telehealth & Wellness Platform",
    description:
      "TKO is a nationwide telehealth platform connecting patients with licensed healthcare providers for hormone optimization, weight management, peptide therapy, and treatment management.",
    longDescription:
      "TKO is a nationwide telehealth platform that connects patients with licensed healthcare providers for hormone optimization, weight management, peptide therapy, diagnostic testing, and ongoing treatment management. The platform streamlines the entire patient journey from intake and medical evaluation to consultations, lab orders, prescriptions, treatment plans, and follow-up care through a secure patient portal. Built a full-stack telehealth platform connecting patients with licensed healthcare providers for consultations, lab testing, prescription management, and personalized treatment plans, with secure patient and provider dashboards, GraphQL APIs, and AWS-backed infrastructure supporting nationwide telehealth operations.",
    html_url: "https://www.toknowoneself.co/",
    topics: ["Telehealth", "Healthcare", "Patient Portal"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/logo-icon-blue.svg",
    highlights: [
      "Patient Intake & Eligibility Assessment",
      "Doctor Consultation Scheduling",
      "Lab & Diagnostic Order Management",
      "Prescription & Refill Workflows",
      "Role-Based Access Control (RBAC)",
      "Secure Patient Portal",
      "Provider Dashboard",
      "Appointment Management",
      "Treatment Tracking",
      "Notification System",
      "GraphQL API Architecture",
      "AWS Cloud Infrastructure",
      "HIPAA-Oriented Security Controls",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "GraphQL",
      "Node.js",
      "AWS DynamoDB",
      "AWS Services",
      "JWT Authentication",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
    ],
    links: [
      { label: "Visit Website", url: "https://www.toknowoneself.co/", icon: "website" },
    ],
  },
  {
    id: 105,
    slug: "copy-smart",
    category: "web",
    order: 4,
    name: "Copy Smart",
    tagline: "AI-Powered Content Creation Platform",
    description:
      "CopySmart is an AI-driven content generation platform that helps businesses and marketers produce high-quality marketing copy, blog content, product descriptions, and SEO-focused content.",
    longDescription:
      "CopySmart is an AI-driven content generation platform designed to help businesses, marketers, and content creators produce high-quality marketing copy, blog content, product descriptions, landing pages, email campaigns, and SEO-focused content more efficiently. The platform leverages AI-assisted content workflows to reduce content creation time while maintaining brand consistency and scalability.",
    html_url: "https://copysmart.ca/",
    topics: ["AI", "Content Generation", "SaaS"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/copy-smart-logo.png",
    highlights: [
      "AI Content Generation",
      "Blog & Article Creation",
      "SEO Content Assistance",
      "Product Description Generation",
      "Marketing Copy Creation",
      "Landing Page Content Builder",
      "User Authentication & Authorization",
      "Content History Management",
      "Dashboard & Analytics",
      "Subscription & User Management",
      "Responsive UI/UX",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB / DynamoDB",
      "AWS Services",
      "JWT Authentication",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
      "AI Integration",
    ],
    links: [
      { label: "Visit Website", url: "https://copysmart.ca/", icon: "website" },
    ],
  },
  {
    id: 106,
    slug: "assistify-care",
    category: "web",
    order: 5,
    name: "Assistify Care",
    tagline: "AEON – NDIS Disability Support Management Platform",
    description:
      "AEON is an NDIS-focused disability care platform built for support providers, support workers, coordinators, administrators, and participants to manage care and operations.",
    longDescription:
      "AEON is an NDIS-focused disability care platform built for disability support providers, support workers, coordinators, administrators, and participants. The platform helps manage participant care, support services, accommodation programs, staff coordination, service delivery, and compliance workflows within a centralized digital system. AEON Disability Services supports services such as Supported Independent Living (SIL), Community Nursing, High-Intensity Supports, Accommodation Management, and participant care programs. Built an NDIS disability support management platform that enables providers to manage participant care, support services, workforce coordination, accommodation programs, and operational workflows through secure role-based dashboards and scalable cloud infrastructure.",
    html_url: "https://aeon.assistifycare.com.au/",
    topics: ["Healthcare", "NDIS", "Care System"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/assistify-mark.png",
    highlights: [
      "Participant Management System",
      "Support Worker Portal",
      "Care Plan Management",
      "NDIS Service Tracking",
      "Shift & Staff Coordination",
      "Supported Independent Living (SIL) Workflows",
      "Community Support Management",
      "Role-Based Access Control (RBAC)",
      "Reporting & Analytics",
      "Document Management",
      "Mobile Responsive Dashboard",
      "Cloud-Based Infrastructure",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "AWS DynamoDB",
      "GraphQL / REST APIs",
      "JWT Authentication",
      "Tailwind CSS",
      "TypeScript",
      "AWS Cloud Services",
    ],
    links: [
      { label: "Visit Website", url: "https://aeon.assistifycare.com.au/", icon: "website" },
    ],
  },
  {
    id: 107,
    slug: "erebix",
    category: "app",
    order: 2,
    name: "Erebix",
    tagline: "AI-Powered Gym & Fitness Management App",
    description:
      "Erebix is a cross-platform gym management app built with React Native that helps users reach their fitness goals through personalized AI-powered workout and meal plans.",
    longDescription:
      "Developed a cross-platform gym management application using React Native, helping users achieve their fitness goals through personalized AI-powered workout and meal plans. Built features including goal-based fitness tracking, exercise libraries, progress monitoring, nutrition planning, and user authentication. Integrated AI to generate customized workout routines and meal plans based on user goals, experience level, and preferences, delivering a seamless and responsive mobile experience.",
    html_url: "",
    topics: ["Fitness", "AI", "React Native"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/Erebix.png",
    logoImgClass: "scale-[2.4] translate-y-1",
    highlights: [
      "AI Meal Plans",
      "AI Workout Plans",
      "Goal Tracking",
      "Exercise Libraries",
      "Progress Monitoring",
      "Nutrition Planning",
      "User Authentication",
      "Fitness Analytics",
      "Cross-Platform",
      "Modern UI",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI Integration",
      "JWT Authentication",
      "REST APIs",
    ],
    links: [],
  },
  {
    id: 108,
    slug: "habeeye",
    category: "app",
    order: 3,
    name: "Habeeye",
    tagline: "Your Ultimate Shopping Companion",
    description:
      "Habeeye is a multi-service shopping super app bringing grocery, pharmacy, retail stores, restaurants, and parcel delivery together in one place, plus a built-in module for charitable giving.",
    longDescription:
      "Habeeye is a one-stop shopping super app built around six distinct modules: Grocery for fresh produce, pantry essentials, and household items; Pharmacy for medicines, wellness supplements, and personal care; Stores for browsing a range of vendors from electronics to fashion; Restaurants for ordering across a variety of cuisines; Parcel for on-demand door-to-door delivery; and Sadaqah Jariyah, a dedicated module for charitable donations. The app is backed by companion Driver and Merchant apps that power delivery logistics and vendor-side order/inventory management, and is live on both the Google Play Store and the Apple App Store.",
    html_url: "https://play.google.com/store/apps/details?id=com.habeeye.user_app&hl=en",
    topics: ["Shopping", "On-Demand Delivery", "Multi-Vendor"],
    stargazers_count: null,
    language: "TypeScript",
    logo: "/images/habeeye.png",
    highlights: [
      "Grocery ordering — fresh produce, pantry essentials, and household items",
      "Pharmacy module for medicines, supplements, and personal care",
      "Multi-vendor Stores marketplace spanning electronics, fashion, and more",
      "Restaurant ordering across a variety of cuisines",
      "Parcel module for on-demand door-to-door delivery",
      "Sadaqah Jariyah — in-app charitable donations module",
      "Real-time order tracking",
      "Companion Driver app for delivery partners",
      "Companion Merchant app for vendor inventory and order management",
      "Secure in-app transactions with personalized recommendations",
    ],
    links: [
      { label: "Get it on Google Play", url: "https://play.google.com/store/apps/details?id=com.habeeye.user_app&hl=en", icon: "playstore" },
      { label: "Download on the App Store", url: "https://apps.apple.com/us/app/habeeye/id6473112630", icon: "appstore" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
