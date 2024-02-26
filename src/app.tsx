import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
export function App() {
    return (
        <>
            <div className="h-[100vh] relative">
            <Navbar />
            <div className="p-6">
                <section class="flex flex-col text-center m-8 py-6">
                    <h1 class="text-5xl inset-2 font-medium mb-6 z-10">Abhishek Govindarasu</h1>

                    <div className="rounded-lg bg-[#1f2b28] p-4 sm:mx-2 relative border-solid border-2 border-gray-500">
                        <p className="text-md font-light text-[#ebf2fa]">
                            I am a developer and Computer Science student currently at <span className="text-green-600">UC San Diego</span>.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse excepturi consequatur reprehenderit, maiores eaque expedita doloremque aliquam sint modi error impedit repellat? Molestias tempora molestiae natus quaerat. Quasi, debitis aliquid.
                        </p>
                    </div>
                </section>
                <section className="flex">
                    {/* <p className="text-lg">This page is work in progess.</p> */}
                </section>

            </div>
            <Footer />
            </div>
        </>
    );
}
