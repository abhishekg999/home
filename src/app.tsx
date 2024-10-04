import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Projects } from "./components/Projects";
import { LocationProvider, Router, Route } from "preact-iso";

export function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] relative">

        <div className="absolute inset-0 z-0 pointer-events-none">

          {/** Very light gradients overlaying the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2e1a] z-10 opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a2e1a] z-10 opacity-20"></div>

          {/* <img
            src="/min/background-min.jpg"
            alt="Abstract background"
            className="w-full h-full object-cover object-right-top bg-contain bg-fixed opacity-40"
            /> */}
          {/** Background image, always full size */}
          <div className="w-full h-full bg-[url(/min/background-min.jpg)] bg-cover bg-fixed opacity-40 bg-right-top"></div>
        </div>
        <LocationProvider>
          <Navbar />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route default component={Error} />
          </Router>
          <Footer />
        </LocationProvider>
      </div >
    </>
  );
}
