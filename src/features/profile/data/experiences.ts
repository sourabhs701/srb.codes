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
        description: `- Build and maintain the [Hostmeup](https://cloud.srb.codes) for cloud storage solution.
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement Finance chat bot using chainlit and python.
- Analyze technical capabilities and provide optimal solutions.`,
        skills: [
          "python",
          "chainlit",
          "Database",
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
          start: "2022",
          end: "2025",
        },
        employmentType: "Part-time",
        description: `- Built an NFT trading marketplace with multi level markting reward based system (BSC blockchain).
- Developed an e-commerce site for jewelry products and integrated payment gateway (Razorpay).
- Developed and Integrated Notification system (Push notifications) using Queue system (SQS).
`,
        icon: "code",
        skills: [
          "React",
          "Express.js",
          "Razorpay",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Cloudflare",
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
