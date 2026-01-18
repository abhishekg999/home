import type { ProjectData } from "../utils/projects";

interface ProjectsProps {
  projects: ProjectData[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <main className="flex-grow relative z-20">
      <section className="pt-28 pb-16 lg:pt-44 lg:pb-28 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12 lg:mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              Projects
            </h1>
            <p className="text-sm lg:text-base text-white/50 leading-relaxed">
              Tools and utilities for developers and security researchers.
            </p>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="border-t border-white/10 py-6 lg:py-10 transition-all duration-300 hover:bg-white/[0.02]">
                  <div className="flex items-start lg:items-center gap-5 lg:gap-8">
                    <div
                      className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)`,
                      }}
                    >
                      <span
                        className="text-white/80 font-normal leading-none relative z-10"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontSize: project.icon.length > 1 ? "2.5rem" : "3rem",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {project.icon}
                      </span>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}15 100%)`,
                        }}
                      />
                    </div>

                    <div className="flex-grow min-w-0 pr-8">
                      <div className="flex items-baseline gap-4 mb-2">
                        <h2 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-accent transition-colors">
                          {project.name}
                        </h2>
                      </div>

                      <p className="text-sm lg:text-base text-white/50 group-hover:text-white/60 transition-colors mb-3 max-w-2xl">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs font-mono text-white/30 group-hover:text-white/50 transition-colors">
                        <span>
                          {project.url.replace("https://", "").replace(/\/$/, "")}
                        </span>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs font-mono text-white/20 group-hover:text-white/40 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 bg-accent" />
                </div>
              </a>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
};
