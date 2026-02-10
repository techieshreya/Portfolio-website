export const profile = {
    name: {
        first: "SHREYA",
        last: "GUPTA",
    },
    title: "SOFTWARE ENGINEER",
    tagline:
        'Aspiring Software Engineer architecting <span class="text-electric-blue font-bold">Scalable Systems</span> and deploying <span class="bg-safety-orange text-white px-2 py-0.5 text-lg inline-block -rotate-1 shadow-sm">Generative AI</span> solutions.',
    education: {
        degree: "B.Tech CSE",
        university: "BML Munjal University",
        graduationYear: "Class of 2026",
        cgpa: "8.40/10",
    },
    experience: {
        role: "Data & AI Intern @ Orange Business",
        period: "2025 - PRESENT",
        description: [
            'Engineering an internal AI Assistant using <span class="text-safety-orange font-bold">Generative AI</span> to automate team workflows.',
            "Building end-to-end data pipelines with Python & SQL for real-time visualization in Power BI.",
        ],
    },
    stats: {
        projectsShipped: "10+",
    },
    socials: {
        email: "mailto:shreyagupta.ggn@gmail.com",
        linkedin: "https://linkedin.com/in/shreya-gupta",
        github: "https://github.com/techieshreya",
    },
} as const;
