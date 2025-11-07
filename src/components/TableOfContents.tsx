import { useEffect, useState } from "preact/hooks";

interface Heading {
  depth: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -66%", threshold: [0, 0.5, 1] },
    );

    const headingElements = headings
      .map((heading) => document.getElementById(heading.slug))
      .filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (!activeId) return;

    const activeButton = document.querySelector(
      `button[data-slug="${activeId}"]`,
    );
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  const scrollToHeading = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav class="hidden xl:block sticky top-24 max-h-[60vh]">
      <div class="bg-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden flex flex-col max-h-[60vh]">
        <div class="px-4 py-4 border-b border-white/10 sticky top-0 z-10">
          <h3 class="text-xs font-semibold text-white/60 uppercase tracking-wider">
            On This Page
          </h3>
        </div>
        <ul class="space-y-0.5 p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              style={{ paddingLeft: `${(heading.depth - 1) * 0.75}rem` }}
            >
              <button
                data-slug={heading.slug}
                onClick={() => scrollToHeading(heading.slug)}
                class={`text-left w-full text-xs py-2 px-2 transition-all ${
                  activeId === heading.slug
                    ? "text-[#67d78e] bg-[#67d78e]/10 font-medium border-l-2 border-[#67d78e]"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5 border-l-2 border-transparent"
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
