import { Github, ExternalLink, Clock, Lightbulb } from 'lucide-preact';

type Project = {
  title: string;
  description: string;
  github: string;
  liveDemo: string;
  background: string;
  tags: string[];
}

const ProjectCard = ({ title, description, github, liveDemo, background, tags }: Project) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
    <div className="relative h-36 md:h-44 overflow-hidden">
      <img src={background} alt={title} className="w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e2c2f97] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#08080888]"></div>
    </div>
    <div className="p-4">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-sm lg:text-base text-gray-200 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs lg:text- transition-colors duration-300 hover:bg-purple-600">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
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


const FutureProjectCard = () => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
    <div className="relative h-36 md:h-56 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161b3a] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#18522c15]"></div>
      <div className="z-10 text-white text-3xl lg:text-4xl font-bold text-center">
        More to Come!
      </div>
    </div>


    <div className="p-4">
      <p className="text-base lg:text-lg text-gray-200 mb-3">Stay tuned!</p>
      <div className="flex flex-wrap gap-2 mb-4">

        {['♠', '♡', '♣', '♢'].map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs lg:text- transition-colors duration-300 hover:bg-purple-600">
            {tag}
          </span>
        ))}

      </div>
      <div className="flex gap-3">
        <a
          href='#'
          className="pointer-events-none flex-1 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        >
          <Lightbulb className="mr-2" size={18} />

        </a>
        <a
          href='#'
          className="pointer-events-none flex-1 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        >
          <Clock className="mr-2" size={18} />
        </a>
      </div>
    </div>

  </div>
);


export const Projects = () => {
  const projects = [
    {
      title: 'What Notepad',
      description: 'Notepad powered by MDXEditor. Local storage default, automatic cloud sync with login.',
      github: 'https://github.com/abhishekg999/what',
      liveDemo: 'https://what.ahh.bet',
      background: '/what-preview.png',
      tags: ['React', 'Next.js', 'Neon Postgres', 'Lucia Auth', 'Typescript', 'Github OAuth'],
    },
    {
      title: "Demiya Redesign",
      description: "Redesign of the Demiya website, a local restaurant in the Bay Area.",
      github: 'https://github.com/abhishekg999/demiya-redesign',
      liveDemo: 'https://demiya-redesign.vercel.app/',
      background: '/demiya-redesign-preview.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Google Maps API'],
    },
    {
      title: 'Secret',
      description: 'End-to-end encrypted one-time link sharing service.',
      github: 'https://github.com/abhishekg999/secret',
      liveDemo: 'https://secret.ahh.bet',
      background: '/secret-preview.png',
      tags: ['Cloudflare Workers', 'Cloudflare D1', 'Hono', 'Drizzle ORM', 'Preact', 'Typescript'],
    },
    {
      title: 'Touchdown',
      description: 'Daily webgame where you connect NFL players by their mutual teammates.',
      github: 'https://github.com/abhishekg999/Touchdown',
      liveDemo: 'https://touchdown.life/',
      background: '/touchdown-preview.png?',
      tags: ['HTML', 'CSS', 'Javascript'],
    },
    {
      title: 'Reflect',
      description: 'Reflect HTML quickly. Personally used for CTF web exploitation (like XSS) challenges.',
      github: 'https://github.com/abhishekg999/reflect',
      liveDemo: 'https://reflect.ahh.bet',
      background: '/reflect-preview.png',
      tags: ['HTML', 'Javascript', 'CTF'],
    },
  ];

  return (
    <div className="min-h-screen text-white p-8">

      <div className="container flex flex-col items-center justify-center space-y-4 px-4 pb-16 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
            My Projects
          </h1>
        </div>
      </div>


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <FutureProjectCard />
      </div>
    </div>
  );
};
