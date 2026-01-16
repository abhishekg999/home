import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-preact";

const ICON_SIZE = 28;

export function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center min-h-[100dvh] px-6 relative z-20">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Hi, I'm Abhishek
        </h1>

        <p className="text-white/70 text-base md:text-lg mb-2">
          Founding Engineer at{" "}
          <span className="text-white font-medium">Judgment Labs</span>
        </p>

        <p className="text-white/50 text-sm md:text-base mb-10">
          CTF Player / Web Exploitation
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="//github.com/abhishekg999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <GithubIcon size={ICON_SIZE} />
          </a>
          <a
            href="//linkedin.com/in/abhishekgovindarasu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <LinkedinIcon size={ICON_SIZE} />
          </a>
          <a
            href="mailto:abhishekgovindarasu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-colors"
          >
            <MailIcon size={ICON_SIZE} />
          </a>
        </div>
      </div>
    </main>
  );
}
