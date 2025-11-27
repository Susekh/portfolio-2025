export const about = {
    name: "Subhranshu Sekhar Khilar",
    role: "FullStack dev",
    about: "Full Stack developer working across Next.js, React, scalable API architecture, and cloud deployments. I craft clean, high-performance applications that boast modern UI/UX, optimized backend workflows, and a heavy focus on reliability and technical precision to deliver fast and professional digital experiences.",
    email: "subhranshukhilar@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Subhranshu's Portfolio",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const forms = {
    formspreeUrl: process.env.NEXT_PUBLIC_FORMSPREE_URI,
}

export const skills = [
    { name: "Html", alt: "html logo", icon: "/html.svg" },
    { name: "Css", alt: "css logo", icon: "/css.svg" },
    { name: "Js", alt: "js logo", icon: "/js.svg" },
    { name: "Tailwind", alt: "tailwind logo", icon: "/tailwind.svg" },
    { name: "React Js", alt: "react logo", icon: "/react.svg" },
    { name: "Next Js", alt: "nextjs logo", icon: "/nextjs.svg" },
];

export const socials = {
    github: "https://github.com/Susekh",
    twitter: "https://twitter.com/subhkhilar",
    instagram: "https://www.instagram.com/subh.khilar",
    linkedIn : "https://www.linkedin.com/in/subhkhilar"
};

export const projects = {
  pinProjects: [
    {
      title: "TaskNet",
      description:
        "A full-stack task management platform with sprint planning, real-time chat, role-based access control, and Razorpay payments. Deployed on AWS EC2 with CI/CD and NGINX for 99.9% uptime.",
      tags: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "AWS EC2", "Tailwind"],
      link: "https://tasknet.susekh.tech",
    },
    {
      title: "Find Waldo",
      description:
        "An interactive image-tagging game where users locate characters in crowd scenes. Powered by AWS Lambda & API Gateway with automated CI/CD via GitHub Actions.",
      tags: ["React", "Node.js", "MongoDB", "Mongoose", "AWS Lambda", "Tailwind"],
      link: "https://find-waldo.khilar.me",
    }
  ],

  otherProjects: [
    {
      title: "Blockchain-Based IoT Security",
      description:
        "A blockchain-powered IoT data integrity solution developed for the BPUT Hackathon 2025, enabling tamper-proof data exchange across distributed IoT devices.",
      tags: ["Blockchain", "Node.js", "IoT", "Security"],
      link: "",
    },
    {
      title: "Portfolio v2",
      description:
        "A clean, modern, minimal portfolio built with Next.js and Tailwind CSS. Features smooth animations, SEO optimization, and a fast, responsive design.",
      tags: ["Next.js", "Tailwind", "React", "Framer Motion"],
      link: "https://portfolio.khilar.me",
    },
    {
      title: "E-Commerce Store (Full-Stack)",
      description:
        "A full-stack e-commerce application with product listings, cart logic, authentication, and secure API architecture. Optimized for performance and clean UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      link: "",
    },
  ],
};


export const experience = [
  {
    title: "Intern - Fixxlink Pvt Ltd",
    description:
      "Built a responsive, SEO optimized client website that ranked in the top 3 Google results, configured Hostinger VPS with NGINX + HTTPS for 40% faster load times, and integrated ML based backend APIs for smooth and secure data flow.",
    date: "2024",
  },
  {
    title: "Campus Project - Trident Academy of Technology",
    description:
      "Developed a scalable online test platform using Next.js and Redis with instant question retrieval and session handling, achieving zero downtime and supporting 600+ concurrent students during live examinations.",
    date: "2025",
  },
];


export const blogs = [
    {
        title: "Understanding React Hooks",
        date: "12/03/2025",
        link: "#",
    },
    {
        title: "CSS Grid vs Flexbox: When to Use Which",
        date: "25/12/2024",
        link: "#",
    },
    {
        title: "Next.js SEO Best Practices",
        date: "10/07/2024",
        link: "#",
    },
];
