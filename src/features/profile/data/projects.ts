import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "makethumb",
    title: "MakeThumb — Self-hosted Vercel Clone",
    period: {
      start: "2024", // Assuming recent development based on resume
    },
    link: "#", // Add actual project link if available
    skills: [
      "Node.js",
      "AWS ECS",
      "Docker",
      "AWS S3",
      "Reverse Proxy",
      "CI/CD",
    ],
    description: `Reduced deployment time for React apps from hours to minutes with a one-click Dockerized build on demand pipeline, deploying compiled assets to S3, and routing traffic through a secure, multi-tenant reverse proxy for fast, isolated, and scalable releases.`,
    logo: "https://cdn.srb.codes/images/project-logos/makethumb.png", // Replace with actual logo if available
    isExpanded: true,
  },
  {
    id: "hls-transcoder",
    title: "HLS Transcoder — Scalable Adaptive Video Streaming Pipeline (OSS)",
    period: {
      start: "03.2025",
      end: "06.2025",
    },
    link: "https://github.com/sourabhs701/hls-transcoder",
    skills: ["Open Source", "Node.js", "FFmpeg", "Docker", "AWS ECS", "HLS"],
    description: `Built a distributed video transcoding system using FFmpeg in Dockerized environments to deliver adaptive bitrate HLS streaming (360p–1080p). Designed for scalability and seamless playback across devices, the pipeline dynamically processes video streams and serves them via HTTP Live Streaming using ECS.`,
  },
  {
    id: "google-drive-clone",
    title: "Google Drive Clone - Self-hosted Cloud Storage Solution (OSS)",
    period: {
      start: "01.2025",
      end: "04.2025",
    },
    link: "https://cloud.srb.codes",
    skills: [
      "Open Source",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS S3",
      "AWS CloudFront",
      "Docker",
      "Cloudflare Tunnels",
    ],
    description: `Built a self-hosted secure internal file storage system with support for virtual folders, multipart uploads, and CDN delivery. Implemented Fuzzy search to search through files. Integrated Cloudflare Tunnels for self-hosting and used Docker to containerize the app.`,
    logo: "https://cdn.srb.codes/36205701/logo.png",
  },
  {
    id: "landing-page",
    title: "Bloom — effective way to track progress",
    period: {
      start: "07.2024",
      end: "11.2024",
    },
    link: "https://bloom.srb.codes",
    skills: ["Next.js", "Tailwind css", "shadcn", "motion"],
    description: `Developed a context-aware chatbot trained on structured university data to answer academic and administrative queries. Utilized Gemini API for intelligent response generation and Cloudflare KV for distributed, low-latency stateful storage.`,
    logo: "https://cdn.srb.codes/images/project-logos/bloom.png",
  },
  {
    id: "college-chatbot",
    title: "College ChatBot — AI Chatbot for Campus FAQs",
    period: {
      start: "2024",
    },
    link: "https://poddarai.srb.codes",
    skills: ["Node.js", "Gemini API", "Cloudflare KV", "AI/ML Integration"],
    description: `Developed a context-aware chatbot trained on structured university data to answer academic and administrative queries. Utilized Gemini API for intelligent response generation and Cloudflare KV for distributed, low-latency stateful storage.`,
    logo: "https://cdn.srb.codes/images/project-logos/poddarai.png",
  },
];
