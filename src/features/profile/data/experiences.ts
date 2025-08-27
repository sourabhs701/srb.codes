import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "datamonk",
    companyName: "Datamonk",
    companyLogo: "https://cdn.srb.codes/images/companies/datamonk.svg",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Gen AI Engineer Trainee",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
- Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
- Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web and mobile platforms.
- Analyze technical capabilities and provide optimal solutions.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Dify",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "vedhin",
    companyName: "Vedhin technologies",
    companyLogo: "https://cdn.srb.codes/images/companies/vedhin.png",
    positions: [
      {
        id: "vedhin-intern",
        title: "Full Stack Engineer Intern",
        employmentPeriod: {
          start: "11.2024",
          end: "05.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a USDT deposit processing node on BNB Smart Chain, reducing redundant RPC calls by 40% and improving transaction throughput.
- Engineered QR-based USDT payment flow by implementing HD wallet architecture, assigning unique deposit addresses per user for secure and traceable transactions.`,
        skills: [
          "Node.js",
          "React",
          "JavaScript",
          "SQL",
          "AWS S3",
          "AWS EC2",
          "BNB Smart Chain (BSC)",
          "Infura",
          "HD Wallets",
          "QR Code",
          "RPC Monitoring",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        employmentType: "Part-time",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "gate-cse-2025",
        title: "GATE CSE 2025: Qualified",
        employmentPeriod: {
          start: "2025",
        },
        icon: "idea",
        description: `Qualified National Level Examination for Engineering in Computer Science`,
        skills: ["GATE CSE", "National Level", "Computer Science"],
        isExpanded: false,
      },
      {
        id: "rtu-kota",
        title: "Master of Computer Application (MCA)",
        employmentPeriod: {
          start: "2023",
          end: "2025",
        },
        icon: "education",
        description: `- Currently studying for a Master's degree in Computer Applications.
- CGPA: 8.71/10
- Relevant Coursework: Computer Architecture, Advance Operating Systems, Computer Networks, Artificial Intelligence, Advance Data Structures and Algorithms.`,
        skills: [
          "Computer Architecture",
          "Operating Systems",
          "Computer Networks",
          "Artificial Intelligence",
          "Data Structures",
          "Algorithms",
        ],
        isExpanded: false,
      },
      {
        id: "university-of-rajasthan",
        title: "Bachelor of Computer Application (BCA)",
        employmentPeriod: {
          start: "2019",
          end: "2022",
        },
        icon: "education",
        description: `- Bachelor's degree in Computer Applications
- Relevant Coursework: Applied Mathematics, Discrete Mathematics, Data Structures and Algorithms, Cloud Computing.`,
        skills: [
          "Applied Mathematics",
          "Discrete Mathematics",
          "Data Structures",
          "Algorithms",
          "Cloud Computing",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  // {
  //   id: "achievements",
  //   companyName: "Achievements",
  //   positions: [
  //     {
  //       id: "gate-cse-2025",
  //       title: "GATE CSE 2025: Qualified",
  //       employmentPeriod: {
  //         start: "2025",
  //       },
  //       icon: "idea",
  //       description: `Qualified National Level Examination for Engineering in Computer Science`,
  //       skills: ["GATE CSE", "National Level", "Computer Science"],
  //       isExpanded: false,
  //     },
  //     {
  //       id: "hackerrank",
  //       title: "HackerRank 5 Star in Python",
  //       employmentPeriod: {
  //         start: "2024",
  //       },
  //       icon: "idea",
  //       description: `Achieved 5-star rating in Python programming on HackerRank platform`,
  //       skills: ["Python", "Problem Solving", "Coding"],
  //       isExpanded: false,
  //     },
  //   ],
  //   isCurrentEmployer: false,
  // },
];
