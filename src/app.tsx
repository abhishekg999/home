import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Projects } from "./components/Projects";
import { Router, Route } from "preact-router";

export function App() {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <Navbar />
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route default component={Error} />
                </Router>
                <Footer />
            </div>
        </>
    );
}
