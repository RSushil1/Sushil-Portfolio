
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaAws, FaDocker, FaGit, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiGraphql, SiNextdotjs, SiTailwindcss, SiRedux, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiNginx, SiLinux } from "react-icons/si";

export const HERO_CONTENT = `I am a passionate Project Manager & Senior Full Stack Developer with 3+ years of experience designing and leading scalable SaaS applications using Nest.js, Next.js, React.js, and Node.js. I have a proven track record of managing cross-functional teams, architecting high-performance systems, and reducing downtime.`;

export const ABOUT_TEXT = `I am a dedicated and innovative Full Stack Developer turned Project Manager with a strong foundation in Mechanical Engineering. My journey has taken me from self-taught coding to leading a team of 20+ developers. I specialize in the MERN stack and have deep expertise in building enterprise-grade SaaS platforms, HRMS/CRM systems, and real-time communication apps. I am passionate about optimizing performance, implementing automated CI/CD pipelines, and delivering production-ready software efficiently.`;

export const EXPERIENCES = [
    {
        year: "Jan 2024 – Feb 2026",
        role: "Project Manager & Senior Full Stack Developer",
        company: "Yashworld Products Pvt. Ltd.",
        description: `Led a team of 20+ developers delivering enterprise SaaS platforms for HRMS, CRM, ERP, and eCommerce. Architected scalable backend services using Nest.js and GraphQL, supporting 50K+ monthly active users. Implemented Redis-based caching, improving response times to under 100ms. Integrated Next.js SSR for better SEO and performance. Built real-time chat/video modules using WebRTC and Socket.IO. Implemented CI/CD pipelines on AWS.`,
        technologies: ["Nest.js", "GraphQL", "Next.js", "Redis", "AWS", "WebRTC", "Socket.IO"],
    },
    {
        year: "2022 – 2023",
        role: "Independent Developer",
        company: "Freelance / Remote",
        description: `Delivered end-to-end web applications using MERN and Next.js for startups and small businesses. Designed responsive UIs, optimized backend APIs, and managed cloud deployments independently. Built multiple production-grade personal projects focusing on authentication, authorization, and scalability.`,
        technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Next.js"],
    },
];

export const PROJECTS = [
    {
        title: "SuperAdmin SaaS Panel",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=SuperAdmin+Panel", // Placeholder
        description:
            "A multi-tenant management system with one-click AWS deployments, live monitoring, and role-based access control.",
        technologies: ["Nest.js", "React.js", "Redis", "Docker"],
    },
    {
        title: "HRMS / CRM Platform",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=HRMS+Platform", // Placeholder
        description:
            "An enterprise system with 15+ modules for attendance, payroll, recruitment, finance, and performance tracking.",
        technologies: ["React.js", "Nest.js", "MongoDB"],
    },
    {
        title: "Real-Time Communication App",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Chat+App", // Placeholder
        description:
            "A chat, voice, and video calling platform supporting group calls and file sharing.",
        technologies: ["WebRTC", "Socket.IO", "Node.js"],
    },
];

export const CONTACT = {
    address: "Hanuman Nagar, Nai Basti, Jail Road, Satna, M.P. 485005",
    phoneNo: "+91 9827052235",
    email: "sushilsinghrathore1998@gmail.com",
};

export const SKILLS = [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Nest.js", icon: SiNestjs },
    { name: "GraphQL", icon: SiGraphql },
    { name: "SQL", icon: FaDatabase }, // Using generic DB icon for SQL
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "AWS", icon: FaAws },
    { name: "Docker", icon: FaDocker },
    { name: "Linux", icon: SiLinux },
];
