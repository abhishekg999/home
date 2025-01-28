import { Github, ExternalLink, Lightbulb } from 'lucide-preact';

type Project = {
  title: string;
  description: string;
  github: string;
  liveDemo: string;
  background: string;
};


const ProjectCard = ({ title, description, github, liveDemo }: Project) => (
  <>
    <div className="sticky h-[99vh] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* <div
      className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-300 group-hover:scale-110"
      style={{ backgroundImage: `url(${background})` }}
      /> */}
      <iframe
        src={liveDemo}
        className="w-full h-full pointer-events-none"
        style={{ transform: 'scale(1)', transformOrigin: 'top left', overflow: 'hidden', zoom: 1 }}
        scrolling="no"
      ></iframe>
      <div className="absolute inset-0 bg-gray-900 transition-opacity ease-in-out group-hover:opacity-30 opacity-60 z-10" />
    </div>

    <div className="inset-0 p-6 flex flex-col justify-end z-20">
      <h2 className="font-bold text-white mb-2 text-2xl md:text-3xl">{title}</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">{description}</p>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          <Github className="mr-2" size={18} />
          GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
        >
          <ExternalLink className="mr-2" size={18} />
          Live Demo
        </a>
      </div>
    </div>


  </>
);

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "What Notepad",
      description: "A sleek, modern notepad powered by MDXEditor, blending the simplicity of local-first editing with seamless Neon-backed cloud sync for storage.",
      github: "https://github.com/abhishekg999/whatv2",
      liveDemo: "https://what.ahh.bet",
      background: "/min/what-preview-min.jpg",
    },
    {
      title: "Demiya Redesign",
      description: "A fresh, performance-driven redesign for Demiya, a loved Bay Area restaurant. The new site offers a modern UI, enhanced user experience, and better SEO for greater visibility.",
      github: "https://github.com/abhishekg999/demiya-redesign",
      liveDemo: "https://demiya-redesign.vercel.app/",
      background: "/min/demiya-redesign-preview-min.jpg",
    },
    {
      title: "Secret",
      description: "An secure secret-sharing service with advanced client-side AES-256 encryption. Data is deleted immediately after access, ensuring your sensitive files remain private at all times.",
      github: "https://github.com/abhishekg999/secret",
      liveDemo: "https://secret.ahh.bet",
      background: "/min/secret-preview-min.jpg",
    },
    {
      title: "Touchdown",
      description: "A highly engaging daily web game that challenges NFL fans to connect players through their shared teammates. With over 25,000 daily users, it's the ultimate test of NFL knowledge and memory.",
      github: "https://github.com/abhishekg999/Touchdown",
      liveDemo: "https://touchdown.life/",
      background: "/min/touchdown-preview-min.jpg",
    },
  ];


  return (
    <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 opacity-0 animate-fadeIn">
          My Projects
        </h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <div class="flex flex-col items-center pt-16">
        <div className="flex items-center justify-items-center gap-4">
          <span>More to come!</span>
          <Lightbulb size={24} className="inline-block" />
        </div>
      </div>
    </div>
  );
};