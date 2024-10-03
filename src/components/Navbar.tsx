import { Link } from "../utils/Link";
import { useLocation } from "preact-iso";

export function Navbar() {
  const { path } = useLocation();
  console.log(path)
  return (
    <header className="px-4 lg:px-6 h-14 flex py-2 fixed-top z-50">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke-miterlimit="10"
          viewBox="0 0 1123 1072"
          fill-rule="nonzero"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`width-14 h-14 sm:w-16 sm:h-16 animated-svg ${path !== "/_404" ? "animated-svg-draw" : "animate-bounce"}`}
        >
          <path d="M706.763 591.198C487.108 734.611 271.782 630.654 245.675 587.593C245.675 587.593 243.241 461.371 286.977 398.907C286.977 398.907 275.227 359.998 297.734 311.221C297.734 311.221 344.121 303.407 386.147 325.166C386.147 325.166 475.02 281.754 586.899 316.732C586.899 316.732 651.192 275.357 707.316 275.891C707.316 275.891 722.547 343.267 712.65 381.429C712.65 381.429 732.389 410.685 740.274 448.182C740.274 448.182 912.349 523.818 832.191 757.558C832.191 757.558 785.408 768.211 763.526 760.355C763.526 760.355 791.888 714.947 793.129 609.486C793.129 609.486 793.62 771.895 723.623 803.366C723.623 803.366 651.23 813.887 622.556 801.725C622.556 801.725 617.352 726.491 619.536 708.958L619.295 742.611C619.295 742.611 474.538 748.03 421.751 699.374L451.38 718.183C454.827 763.896 427.123 789.498 427.123 789.498C427.123 789.498 348.064 794.96 337.774 788.237C337.774 788.237 312.613 771.607 296.482 625.491" />
        </svg>
      </Link>

      <nav
        className={`ml-auto flex gap-4 sm:gap-6 p-4 text-lg font-medium ${path !== "/_404" ? "animation-text-fade-in-x" : ""}`}
      >
        <Link href="/projects" className="hover:underline underline-offset-4">
          Projects
        </Link>
        <a
          href="/Resume_AbhishekGovindarasu.pdf"
          className="hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="https://blog.ahh.bet/"
          className="hover:underline underline-offset-4"
        >
          Blog
        </a>
      </nav>
    </header>
  );
}
