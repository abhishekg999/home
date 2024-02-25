import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
export function App() {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <div className="h-[calc(100vh-4rem)] flex justify-center items-center text-3xl">
                    Work in Progress
                </div>
                <div className="h-[calc(100vh-4rem)] flex justify-center items-center text-3xl">
                    meow
                </div>

            </div>
            {/*<!-- <Footer />*/}
        </>
    );
}
