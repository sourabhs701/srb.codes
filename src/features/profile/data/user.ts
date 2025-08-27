import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Sourabh",
  lastName: "Soni",
  displayName: "Sourabh Soni",
  username: "srb",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack & Generative AI Engineer | Building scalable systems with AI/ML integration.",
  flipSentences: [
    "Full-Stack & Generative AI Engineer",
    "Open Source Contributor",
    "Creating with code. Small details matter.",
  ],
  address: "Jaipur, Rajasthan, India",
  phoneNumber: "KzgxMDc2NTU3Mzc=", // base64 encoded
  email: "c291cmFiaHM3MDFAZ21haWwuY29t", // base64 encoded
  website: "https://srb.codes",
  jobTitle: "Full-Stack & Generative AI Engineer",
  jobs: [
    {
      title: "Full Stack Engineer Intern",
      company: "Vedhin",
      website: "https://vedhin.com",
    },
  ],
  about: `
Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

One of my key projects, [ZaDark](https://zadark.com), enhances the Zalo experience on PC and Web, surpassing 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and 15,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) since 2022.

I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 221 stars on [GitHub](https://github.com/ncdai/react-wheel-picker) and was selected for **Vercel Open Source Program** summer 2025 cohort, receiving $3,600 in Vercel platform credits, an OSS Starter Pack, and priority community support to fuel its ongoing development.

Let's connect and collaborate!`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp", // suggest replacing with your own
  ogImage: "https://assets.chanhdai.com/images/screenshot-og-image-light.png",
  namePronunciationUrl: "",
  keywords: [
    "Sourabh Soni",
    "srb",
    "srb.codes",
    "Vedhin",
    "Quaric",
    "MakeThumb",
    "HLS Transcoder",
    "Google Drive Clone",
    "College ChatBot",
    "Full-Stack Engineer",
    "Generative AI Engineer",
  ],
  dateCreated: "2023-10-20", // keep as is or update
};
