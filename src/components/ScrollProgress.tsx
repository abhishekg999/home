import { useEffect, useState } from "preact/hooks";

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

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div class="relative">
        <div class="w-10 h-10 md:w-14 md:h-14 bg-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-accent/50 transition-all relative overflow-hidden">
          <div
            class="absolute bottom-0 left-0 right-0 bg-accent/30 transition-all"
            style={{ height: `${progress}%` }}
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 md:h-5 md:w-5 text-accent relative z-10 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </div>
        <div class="absolute -top-10 right-0 bg-white/5 backdrop-blur-sm border border-white/10 text-accent px-3 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {Math.round(progress)}%
        </div>
      </div>
    </button>
  );
}
