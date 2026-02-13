export interface Project {
    id: string;
    title: string;
    tagline: string;
    category: string;
    categoryPosition: "left" | "right";
    categoryBg: string;
    tags: string[];
    link: { label: string; href: string; icon: string };
    visualIcon: string;
    visualBg: string;
}

export const projects: Project[] = [
    {
        id: "travelio",
        title: "Travelio",
        tagline:
            "AI-driven travel platform integrating Google Generative AI to create personalized itineraries with real-time Maps, multi-agent scheduling, and PDF export.",
        category: "AI / Full-Stack",
        categoryPosition: "left",
        categoryBg: "bg-slate-900 text-white",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Google GenAI", "CrewAI"],
        link: { label: "View Project", href: "https://github.com/techieshreya", icon: "arrow_outward" },
        visualIcon: "flight_takeoff",
        visualBg: "bg-slate-50",
    },
    {
        id: "brain-tumor",
        title: "Brain Tumor Detection",
        tagline:
            "CNN-based segmentation on MRI scans using VGG, ResNet & MobileNet architectures, achieving 94% Mean IoU for tumor localization.",
        category: "AI / ML",
        categoryPosition: "right",
        categoryBg: "bg-white text-black",
        tags: ["TensorFlow", "Keras", "OpenCV", "Python"],
        link: { label: "View Research", href: "https://github.com/techieshreya", icon: "science" },
        visualIcon: "neurology",
        visualBg: "bg-slate-900",
    },
    {
        id: "amazon-analysis",
        title: "Amazon Book Analysis",
        tagline:
            "Web scraping pipeline with statistical hypothesis testing (ANOVA), sentiment analysis, and predictive models forecasting book popularity trends.",
        category: "Data Science",
        categoryPosition: "left",
        categoryBg: "bg-safety-orange text-white",
        tags: ["Python", "BeautifulSoup", "Pandas", "Scipy"],
        link: { label: "View Analysis", href: "https://github.com/techieshreya", icon: "analytics" },
        visualIcon: "auto_stories",
        visualBg: "bg-amber-50",
    },
];
