import { useEffect, useState } from "preact/hooks";

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = height > 0 ? (scrolled / height) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
      setShow(scrolled > 300);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    document.addEventListener("astro:after-swap", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      document.removeEventListener("astro:after-swap", updateProgress);
    };
  }, []);

  if (!show) return null;

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      class="fixed bottom-8 right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div class="relative">
        <svg class="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            stroke="rgba(156, 163, 175, 0.2)"
            stroke-width="4"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            stroke="rgb(52, 211, 153)"
            stroke-width="4"
            fill="none"
            stroke-dasharray={CIRCUMFERENCE}
            stroke-dashoffset={offset}
            stroke-linecap="round"
          />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-gray-900/90 backdrop-blur-sm rounded-full p-3 border border-gray-800 group-hover:border-green-400 group-hover:bg-green-500/10 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </div>
        <div class="absolute -top-10 right-0 bg-gray-900 text-green-400 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {Math.round(progress)}%
        </div>
      </div>
    </button>
  );
}
