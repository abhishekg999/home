export function Home(_: any) {
    return (
        <main className="flex flex-col justify-center items-center">
            <section className="w-full pt-10 pb-8 flex justify-center items-center container max-w-[600px] px-4">
                <div className="container flex flex-col items-center justify-center space-y-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
                            Hi, I'm Abhishek
                        </h1>

                        <div className="text-gray-300 px-6 pt-2">
                            I'm a software developer currently studying Computer
                            Science at the{" "}
                            <span className="text-white">UC San Diego</span>.
                            I'm also a{" "}
                            <span className="text-white">CTF player</span>{" "}
                            playing for team L3ak which is{" "}
                            <span className="text-white">top 30</span> globally.
                        </div>
                    </div>
                    <div
                        className="container space-y-4 flex flex-col items-center bg-[url(https://images.unsplash.com/photo-1706922926159-d32db3419657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTAxNzc4MQ&ixlib=rb-4.0.3&q=80&w=1080)] bg-[100%_auto] max-w-[60rem] max-h-[30rem] aspect-video rounded-2xl"
                        alt="placeholder"
                    ></div>
                </div>
            </section>
        </main>
    );
}
