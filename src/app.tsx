import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
export function App() {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <Navbar />

                <main className="flex-1">
                    {/*  Introduction Panel */}
                    <section className="w-full py-16 md:py-16 lg:py-24 xl:py-32 flex justify-center">
                        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
                            <div className="text-center">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 m-1 text-sm dark:bg-gray-800 shadow-md hover:shadow-sm">
                                    Developer
                                </div>
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 m-1 text-sm dark:bg-gray-800 shadow-md hover:shadow-sm">
                                    Computer Science Student
                                </div>
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 m-1 text-sm dark:bg-gray-800 shadow-md hover:shadow-sm">
                                    CTF Player
                                </div>
                                <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl/none pt-6 text-white">
                                    Abhishek Govindarasu
                                </h1>

                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 px-6 py-2">
                                    Hi! I'm a web developer currently studying Computer Science at the <span className="">UC San Diego</span>. I'm also a <span className="">CTF player</span> playing for L3ak.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*  Experience Panel */}
                    
                </main>
                <Footer />
            </div>
        </>
    );
}
