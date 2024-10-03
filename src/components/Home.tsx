import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-preact";

const ICON_SIZE = 34;

export function Home() {
  return (
    <>
      <main className="flex-grow flex items-center justify-center p-4 relative z-20">
        <section className="w-full pt-10 pb-8 flex flex-col justify-center items-center container max-w-[620px] px-4">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4">
            <div className="text-center transition-all">
              <h1 class="text-5xl font-bold tracking-tighter pt-6 text-white">
                Hi, I'm Abhishek
              </h1>
              {/* <TextReveal text="Hi, I'm Abhishek" /> */}
              {/* {content} */}
              <div className=" text-gray-300 px-4 pt-2 text-sm md:text-base lg:text-lg mb-2">
                I'm a <strong>Computer Science</strong> student at UC San Diego,
                currently working as a <strong>ServiceNow Developer</strong>{" "}
                with IT Services at UCSD.
              </div>
              <div className="text-gray-300 px-4 pt-2 text-sm md:text-base lg:text-lg mb-2">
                In my free time, I play CTF (Capture The Flag) competitions,
                specializing in <strong>Web Exploitation</strong> and{" "}
                <strong>Algorithms</strong>.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-4 flex justify-center space-x-8 relative z-20">
        <a
          href="//github.com/abhishekg999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <GithubIcon size={ICON_SIZE} />
        </a>
        <a
          href="//linkedin.com/in/abhishekgovindarasu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <LinkedinIcon size={ICON_SIZE} />
        </a>
        <a
          href="mailto:abhishekgovindarasu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <MailIcon size={ICON_SIZE} />
        </a>
      </footer>
    </>
  );
}
