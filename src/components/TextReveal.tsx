export const TextReveal = ({ text }: { text: string}) => {
    return (
        <>
            <h1 className="overflow-hidden text-5xl font-bold tracking-tighter p-6 text-white">
                {text.match(/./gu)!.map((char, index) => (
                    <span
                        className={`animate-text-reveal inline-block [animation-fill-mode:backwards]`}
                        key={`${char}-${index}`}
                        style={{ animationDelay: `${index * 0.02}s` }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
        </>
    );
};