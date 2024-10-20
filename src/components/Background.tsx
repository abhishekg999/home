import { useState } from "preact/hooks"

export function Background() {
    const [loaded, setLoaded] = useState(false);
    loaded;

    // TODO: maybe have some loading screen while the image loads...
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/** Very light gradients overlaying the image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#1a2e1a] z-10 opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2e1a] z-10 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a2e1a] z-10 opacity-20"></div>

            {/** Background image, always full size */}
            <img
                src="/min/background-min.webp"
                className="w-full h-full fixed inset-0 object-cover object-right-top opacity-40 z-[-1]"
                alt=""
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}
