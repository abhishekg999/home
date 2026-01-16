import { useEffect, useState } from "preact/hooks";
import { BULBA_PATH, STORAGE_KEY } from "../utils/constants";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setShouldAnimate(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    }

    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    document.addEventListener("astro:after-swap", handleNavigation);
    return () =>
      document.removeEventListener("astro:after-swap", handleNavigation);
  }, []);

  const isActive = (href: string) => currentPath.startsWith(href);

  return (
    <div className="px-4 lg:px-6 h-14 flex items-center py-2 z-50">
      <a href="/" className="hover:scale-110 transition-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          strokeMiterlimit="10"
          viewBox="0 0 1123 1072"
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-10 h-10 sm:w-12 sm:h-12 animated-svg ${shouldAnimate ? "animated-svg-draw" : ""}`}
        >
          <path d={BULBA_PATH} />
        </svg>
      </a>

      <nav className="ml-auto flex gap-5 sm:gap-6 text-sm font-medium">
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`transition-colors ${
              isActive(href)
                ? "text-white/90"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="/Resume_AbhishekGovindarasu.pdf"
          className="text-white/40 hover:text-white/70 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
