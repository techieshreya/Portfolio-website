export interface ServicePackage {
    title: string;
    target: string;
    description: string;
    technologies: string[];
    outcome: string;
    icon: string;
}

export const services: ServicePackage[] = [
    {
        title: "Custom AI SaaS MVPs",
        target: "Non-technical Startup Founders",
        description:
            "Transforming ideas into market-ready products. I build full-stack applications from scratch, handling everything from the user interface to the AI integration.",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Google GenAI"],
        outcome:
            "ROI: Launch your MVP in weeks, not months, with a scalable foundation ready for user growth.",
        icon: "rocket_launch",
    },
    {
        title: "Multi-Agent Workflow Automation",
        target: "AI Automation Agencies (AAAs)",
        description:
            "Going beyond simple integrations. I engineer complex, multi-agent systems that can handle intricate logic and reasoning tasks that Zapier can't touch.",
        technologies: ["Appwrite", "n8n", "CrewAI", "Python"],
        outcome:
            "ROI: Reduce operational costs by automating high-value cognitive workflows with human-level accuracy.",
        icon: "hub",
    },
    {
        title: "Backend & Database Optimization",
        target: "HealthTech & FinTech Startups",
        description:
            "Ensuring your data infrastructure is secure, compliant, and fast. I optimize database schemas and build robust APIs for high-stakes environments.",
        technologies: ["SQL Optimization", "HIPAA Compliance", "Scalable APIs"],
        outcome:
            "ROI: Reduce query latency by up to 40% and ensure 100% compliance with industry data standards.",
        icon: "database",
    },
];
