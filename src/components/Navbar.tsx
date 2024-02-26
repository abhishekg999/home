import { useState, useEffect } from 'preact/hooks';

export function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 768);
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    return (
        <header className="px-4 lg:px-6 h-14 flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-miterlimit="10"
                viewBox="0 0 1123 1072"
                fill-rule="nonzero"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#67d78e"
                stroke-width="25"
                className="width-14 h-14 sm:w-16 sm:h-16 hover:stroke-[40]"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                <path
                    d="M706.763 591.198C487.108 734.611 271.782 630.654 245.675 587.593C245.675 587.593 243.241 461.371 286.977 398.907C286.977 398.907 275.227 359.998 297.734 311.221C297.734 311.221 344.121 303.407 386.147 325.166C386.147 325.166 475.02 281.754 586.899 316.732C586.899 316.732 651.192 275.357 707.316 275.891C707.316 275.891 722.547 343.267 712.65 381.429C712.65 381.429 732.389 410.685 740.274 448.182C740.274 448.182 912.349 523.818 832.191 757.558C832.191 757.558 785.408 768.211 763.526 760.355C763.526 760.355 791.888 714.947 793.129 609.486C793.129 609.486 793.62 771.895 723.623 803.366C723.623 803.366 651.23 813.887 622.556 801.725C622.556 801.725 617.352 726.491 619.536 708.958L619.295 742.611C619.295 742.611 474.538 748.03 421.751 699.374L451.38 718.183C454.827 763.896 427.123 789.498 427.123 789.498C427.123 789.498 348.064 794.96 337.774 788.237C337.774 788.237 312.613 771.607 296.482 625.491"
                    fill="none"
                />
            </svg>
            
            {/* {isSmallScreen ? (
                <div className="relative ml-auto flex gap-4 sm:gap-6 p-4 text-lg font-medium">
                    <div>
                        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Projects</a>
                                <a href="#resume" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Resume</a>
                                <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">About</a>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <nav className="ml-auto flex gap-4 sm:gap-6 p-4 text-lg font-medium">
                    <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
                    <a href="#resume" className="hover:underline underline-offset-4">Resume</a>
                    <a href="#about" className="hover:underline underline-offset-4">About</a>
                </nav>
            )} */}

            <nav className="ml-auto flex gap-4 sm:gap-6 p-4 text-lg font-medium">
                <a href="#projects" className="hover:underline underline-offset-4">
                    Projects
                </a>
                <a href="#resume" className="hover:underline underline-offset-4">
                    Resume
                </a>
                <a href="#about" className="hover:underline underline-offset-4">
                    About
                </a>
            </nav>
        </header>
    );
}
