import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Projects } from "./components/Projects";
import { LocationProvider, Router, Route } from "preact-iso";
import { Background } from "./components/Background";

export function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] relative">
        <Background />
        
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
