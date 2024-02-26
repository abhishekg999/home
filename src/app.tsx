import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
export function App() {
    return (
        <>
            <Navbar />
            <div className="">
                <section class="h-[calc(100vh-4rem)] flex flex-col text-center m-8 py-12">
                    <h1 class="text-5xl inset-2 font-medium mb-6 z-10">Abhishek Govindarasu</h1>
        
                    <div className="rounded-lg bg-[#1f2b28] p-4 mx-8 relative border-solid border-b-2 border-r-2 border-l-2 border-indigo-400">
                        <p className="text-lg font-light text-[#ebf2fa]">
                            I am a developer and Computer Science student currently at <span className="text-green-600">UC San Diego</span>.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam harum deleniti nobis omnis eius voluptatem molestias minus unde excepturi enim, nihil molestiae facilis dolorum reiciendis ad porro similique mollitia cum?
                        </p>

                        {/* <div className="absolute bg-[#62929e] opacity-60 h-16 w-16 bottom-0 right-0 m-4"></div>
                        <div className="absolute bg-[#62929e] opacity-60 h-16 w-16 bottom-0 right-0 m-4"></div>
                        <div className="absolute bg-[#62929e] opacity-60 h-16 w-16 bottom-0 right-0 m-4"></div> */}
                    </div>

    
                </section>
                <section className="h-[calc(100vh-4rem)] flex justify-center items-center">
                    <p>meow</p>
                </section>

            </div>
            {/*<!-- <Footer />*/}
        </>
    );
}
