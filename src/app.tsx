import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ExperienceCard } from "./components/ExperienceCard";

export function App() {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <Navbar />

                <main className="flex flex-col justify-center items-center">
                    {/*  Introduction Panel */}
                    <section className="w-full pt-10 pb-8 flex justify-center items-center container max-w-[600px] px-4">
                        <div className="container flex flex-col items-center justify-center space-y-4">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold tracking-tighter pt-6 text-white">
                                    Hi, I'm Abhishek
                                </h1>

                                <div className="text-gray-500 dark:text-gray-400 px-6 pt-2">
                                    I'm a software developer currently studying
                                    Computer Science at the{" "}
                                    <span className="">UC San Diego</span>. I'm
                                    also a <span className="">CTF player</span>{" "}
                                    playing for L3ak.
                                </div>
                            </div>
                            <div className="container space-y-4 flex flex-col items-center bg-[url(https://images.unsplash.com/photo-1706922926159-d32db3419657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTAxNzc4MQ&ixlib=rb-4.0.3&q=80&w=1080)] bg-[100%_auto] max-w-[60rem] max-h-[30rem] aspect-video rounded-2xl"></div>
                        </div>
                    </section>

                    <hr className="w-5/6 max-w-[480px]"></hr>

                    {/*  Projects Panel */}

                    <section className=" border-gray-500 w-full max-w-[600px] px-2">
                        <div className="w-full py-8 flex justify-center flex-col container">
                            <h2 className="text-3xl font-bold text-white text-center">
                                My Projects
                            </h2>
                        </div>

                        {/* Card container */}
                        <div className="container flex flex-col py-8 gap-4 items-center">
                            TODO
                        </div>
                    </section>

                    <hr className="w-5/6 max-w-[480px]"></hr>

                    {/*  Experience Panel */}
                    <section className=" border-gray-500 w-full max-w-[600px] px-2">
                        <div className="w-full py-8 flex justify-center flex-col container">
                            <h2 className="text-3xl font-bold text-white text-center">
                                My Experience
                            </h2>

                            {/* Card container */}
                            <div className="container flex flex-col py-4 gap-6">
                                <ExperienceCard
                                    jobTitle="Software Developer"
                                    companyName="UC San Diego"
                                    jobDescription={
                                        <>
                                            Develop and maintain the
                                            organization's customer-facing
                                            website used by{" "}
                                            <span className="text-white">
                                                30,000 users
                                            </span>
                                            . Implement efficient integration
                                            solutions with Docusign, Talkdesk,
                                            Confluence, and Tririga to automate
                                            business processes.
                                        </>
                                    }
                                    skills="ServiceNow, Javascript, Angular, Fullstack Development, API Integrations"
                                    startDate="Dec 2022"
                                    endDate="Present"
                                ></ExperienceCard>

                                <ExperienceCard
                                    jobTitle="Service Desk Technician"
                                    companyName="UC San Diego"
                                    jobDescription="Provide timely and effective technical support to end-users by troubleshooting hardware, software, and network issues."
                                    skills="Customer Service, Technicial Support"
                                    startDate="Aug 2022"
                                    endDate="Dec 2022"
                                ></ExperienceCard>
                            </div>
                        </div>
                    </section>

                    <hr className="w-5/6 max-w-[480px]"></hr>
                </main>
                <Footer />
            </div>
        </>
    );
}
