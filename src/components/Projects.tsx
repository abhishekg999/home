import type { ProjectData } from "../utils/projects";

interface ProjectsProps {
  projects: ProjectData[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <main className="flex-grow relative z-20">
      <section className="pt-24 pb-12 lg:pt-40 lg:pb-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-balance mb-4 lg:mb-6">
              Projects
            </h1>
            <p className="text-base lg:text-xl text-gray-400 leading-relaxed">
              Tools and utilities for developers and security researchers, more
              to come!
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
                <div className="border-t border-white/10 py-8 lg:py-12 transition-all duration-300 hover:bg-white/[0.02]">
                  <div className="flex items-start lg:items-center gap-6 lg:gap-12">
                    <div
                      className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-[#67d78e]/30 transition-all duration-300 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}25 0%, ${project.color}10 100%)`,
                      }}
                    >
                      <span
                        className="text-white/90 font-normal leading-none relative z-10"
                        style={{
                          fontFamily: "Teko, sans-serif",
                          fontSize:
                            project.icon.length > 1 ? "3.75rem" : "4.5rem",
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
                      <div className="flex items-baseline gap-4 mb-3">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-white group-hover:text-[#67d78e] transition-colors">
                          {project.name}
                        </h2>
                      </div>

                      <p className="text-base lg:text-lg text-white/60 group-hover:text-white/70 transition-colors mb-4 max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-3 text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">
                        <span>
                          {project.url.replace("https://", "").replace("/", "")}
                        </span>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                      <span className="text-sm font-mono text-white/30 group-hover:text-white/50 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <svg
                        className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
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

                  <div className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 bg-[#67d78e]" />
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
