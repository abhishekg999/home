import { Github, ExternalLink, Lightbulb } from 'lucide-preact';
import { routerPage } from '../signals/RouterPageSignal';

type Project = {
  title: string;
  description: string;
  github: string;
  liveDemo: string;
  background: string;
  tags: string[];
}

const ProjectCard = ({ title, description, github, liveDemo, background, tags }: Project) => (
  <div className="flex flex-col bg-gray-800 rounded-b-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] relative">
    <div className="absolute top-0 left-0 z-[200] border-t-2 border-l-2 border-white-700 w-8 md:w-16 h-8 md:h-16"></div>

    <div className="relative flex-1 overflow-hidden rounded-b-sm">
      <img src={background} alt={title} className="w-full rounded-b-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e2c2f97] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#08080888]"></div>
    </div>
    <div className="px-4 py-2 pb-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-xs sm:text-sm lg:text-base text-gray-200 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-700 text-white rounded-full text-[0.625rem]/[0.875rem] sm:text-xs xl:text-sm transition-colors duration-300 hover:bg-green-700">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-sm md:text-base">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        >
          <Github className="mr-2" size={18} />
          GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        >
          <ExternalLink className="mr-2" size={18} />
          Live
        </a>
      </div>
    </div>
  </div>
);


export const Projects = () => {
  routerPage.value = "Projects";
  const projects = [
    {
      title: 'What Notepad',
      description: 'Minimal and modern notepad built with MDXEditor. Local-first. Cloud sync with login powered by Neon.',
      github: 'https://github.com/abhishekg999/whatv2',
      liveDemo: 'https://what.ahh.bet',
      background: '/what-preview.png',
      tags: ['React', 'Next.js', 'PostgreSQL', 'Drizzle ORM', 'Typescript', 'Github OAuth'],
    },
    {
      title: "Demiya Redesign",
      description: "Redesign of the Demiya website, a local restaurant in the Bay Area. Built with performance, user experience, and SEO in mind.",
      github: 'https://github.com/abhishekg999/demiya-redesign',
      liveDemo: 'https://demiya-redesign.vercel.app/',
      background: '/demiya-redesign-preview.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Google Maps API'],
    },
    {
      title: 'Secret',
      description: 'Secure one-time link sharing service with AES-256 client-side encryption, ensuring user privacy. Data is deleted instantly upon access.',
      github: 'https://github.com/abhishekg999/secret',
      liveDemo: 'https://secret.ahh.bet',
      background: '/secret-preview.png',
      tags: ['Cloudflare Workers', 'Cloudflare D1', 'Hono', 'Drizzle ORM', 'Preact', 'Typescript'],
    },
    {
      title: 'Touchdown',
      description: 'Daily webgame where you connect NFL players by their mutual teammates. 25K+ users testing their NFL knowledge.',
      github: 'https://github.com/abhishekg999/Touchdown',
      liveDemo: 'https://touchdown.life/',
      background: '/touchdown-preview.png?',
      tags: ['HTML', 'CSS', 'Javascript'],
    },
  ];

  return (
    <div className="min-h-screen text-white p-8 z-50">

      <div className="container flex flex-col items-center justify-center space-y-4 px-4 pb-8 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
            My Projects
          </h1>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-8 lg:gap-12 md:p-6 lg:p-10 xl:p-14">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div class="flex flex-col items-center">
        <div className="flex items-center justify-items-center gap-4">
          <span>More to come!</span>
          <Lightbulb size={24} className="inline-block" />
        </div>
      </div>
    </div>
  );
};
