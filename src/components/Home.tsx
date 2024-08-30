import { routerPage } from "../signals/RouterPageSignal";

export function Home(_: any) {
    routerPage.value = "Home";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("abhishekgovindarasu@gmail.com");
    };

    return (
        <main className="flex flex-col justify-center items-center">
            <section className="w-full pt-10 pb-8 flex flex-col justify-center items-center container max-w-[600px] px-4">
                <div className="container flex flex-col items-center justify-center space-y-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
                            Hi, I'm Abhishek
                        </h1>

                        <div className="text-gray-300 px-4 pt-2">
                            I'm a Software Developer and Computer Science
                            student at UC San Diego. In my free time, I am a
                            Capture the Flag (CTF) player specializing in web
                            exploitation and reverse engineering.
                        </div>
                    </div>
                    <div
                        className="container space-y-4 flex flex-col items-center bg-[url(https://images.unsplash.com/photo-1706922926159-d32db3419657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTAxNzc4MQ&ixlib=rb-4.0.3&q=80&w=1080)] bg-[100%_auto] max-w-[60rem] max-h-[30rem] aspect-video rounded-2xl"
                        alt="placeholder"
                    ></div>
                </div>
            </section>
                <hr className="w-5/6 max-w-[480px] my-12"></hr>
            
            {/* Last thing of main page will be this */}
            <section className="w-full pb-8 flex flex-col justify-center items-center container max-w-[600px] px-4">
                <div className="mt-6">
                    <a
                        className="p-2 px-6 border-[1px] border-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                        href="mailto:abhishekgovindarasu@gmail.com"
                        onClick={copyEmailToClipboard}
                    >
                        Contact Me
                    </a>
                </div>
            </section>
        </main>
    );
}
