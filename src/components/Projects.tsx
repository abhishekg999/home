import { Github, ExternalLink } from 'lucide-preact';

const projects = [
    {
        title: 'Reflect',
        description: 'A simple site for reflecting HTML. Useful for hosting public HTML quickly, primarily used (personally) for web CTF exploitation.',
        github: 'https://github.com/abhishekg999/reflect',
        liveDemo: 'https://reflect.ahh.bet',
        favicon: 'https://reflect.ahh.bet/favicon.ico',
        background: 'bg-gradient-to-r from-purple-700 via-pink-700 to-red-700',
    },
    {
        title: 'Secret',
        description: (
            <span>A one-time secret sharing service, powered by Cloudflare Workers and D1, built with React, Hono, and Drizzle-ORM.</span>
        ),
        github: 'https://github.com/abhishekg999/secret',
        liveDemo: 'https://secret.ahh.bet',
        favicon: 'https://secret.ahh.bet/favicon.ico',
        background: 'bg-gradient-to-r from-green-700 via-blue-700 to-indigo-700',
    },
];

export function Projects() {
    return (
        <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        className={`${project.background} rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={project.favicon}
                                alt={`${project.title} favicon`}
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                        </div>
                        <p className="text-gray-200 mb-6">{project.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href={project.github}
                                className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </a>
                            <a
                                href={project.liveDemo}
                                className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="w-5 h-5 mr-2" />
                                Live Demo
                            </a>
                        </div>
                        <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${project.favicon})` }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
