import { useState } from "preact/hooks"

export function Background() {
    const [loaded, setLoaded] = useState(false);
    loaded;

    // TODO: maybe have some loading screen while the image loads...
    return (
        <>
            {/** Background image, always full size */}
            <img
                src="/min/background-min.jpg"
                className="w-full h-full fixed inset-0 object-cover object-right-top opacity-40 z-[-1]"
                alt=""
                onLoad={() => setLoaded(true)}
            />
        </>
    )
}