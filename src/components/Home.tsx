import { routerPage } from "../signals/RouterPageSignal";
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-preact';


const ICON_SIZE = 34;

export function Home() {
    routerPage.value = "Home";

    return (
        <main className="flex flex-col justify-center items-center pb-12">
            <section className="w-full pt-10 pb-8 flex flex-col justify-center items-center container max-w-[600px] px-4">
                <div className="container flex flex-col items-center justify-center space-y-4 px-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
                            Hi, I'm Abhishek
                        </h1>
                        <div className="text-gray-300 px-4 pt-2 text-sm md:text-base lg:text-lg mb-4">
                            I'm a Software Developer and Computer Science
                            student at UC San Diego. In my free time, I am a
                            Capture the Flag (CTF) player specializing in web
                            exploitation and reverse engineering.
                        </div>
                    </div>
                    <div
                        className="container space-y-4 flex flex-col items-center bg-[url(https://images.unsplash.com/photo-1706922926159-d32db3419657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTAxNzc4MQ&ixlib=rb-4.0.3&q=80&w=1080)] bg-[100%_auto] max-w-[60rem] max-h-[30rem] aspect-video rounded-2xl"
                        alt="placeholder">
                    </div>
                </div>
            </section>

            <section className="flex justify-center space-x-8 py-4">
                <a href="//github.com/abhishekg999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500"><GithubIcon size={ICON_SIZE} /></a>
                <a href="//linkedin.com/in/abhishekgovindarasu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500"><LinkedinIcon size={ICON_SIZE} /></a>
                <a href="mailto:abhishekgovindarasu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500"><MailIcon size={ICON_SIZE} /></a>
            </section>
        </main>
    );
}
