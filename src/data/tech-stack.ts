export interface TechItem {
    name: string;
    icon?: string; // Material Symbol name or custom SVG path if needed
}

export interface TechCategory {
    title: string;
    icon: string; // Material Symbol for the category
    skills: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        title: "Languages",
        icon: "code",
        skills: [
            { name: "C++" },
            { name: "Java" },
            { name: "Python" },
            { name: "SQL" },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "HTML/CSS" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        icon: "layers",
        skills: [
            { name: "Next.js" },
            { name: "React.js" },
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "Flask" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        title: "AI & Machine Learning",
        icon: "psychology",
        skills: [
            { name: "TensorFlow" },
            { name: "OpenCV" },
            { name: "Google GenAI SDK" },
            { name: "CrewAI" },
            { name: "Scikit-learn" },
        ],
    },
    {
        title: "Databases & Tools",
        icon: "dns",
        skills: [
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "Docker" },
            { name: "Git/GitHub" },
            { name: "Postman" },
            { name: "Selenium" },
            { name: "Power BI" },
            { name: "Advanced Excel" },
        ],
    },
];
