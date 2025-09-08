
const projects = [
    {
        id: 1,
        title: "Agency-AI",
        description: "A beautiful page app using React and Tailwind.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/danutavram/agency-ai",
    },
    {
        id: 2,
        title: "Edemy",
        description: "A beautiful page app using React and Tailwind.",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "Vercel"],
        demoUrl: "#",
        githubUrl: "https://github.com/danutavram/lms_react",
    },
    {
        id: 3,
        title: "GreenCart",
        description: "A beautiful page app using React and Tailwind.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "Clerk", "Stripe"],
        demoUrl: "#",
        githubUrl: "https://github.com/danutavram/greencart",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl"></p>
            </div>
        </section>
    )
}