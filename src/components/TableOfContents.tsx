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
    <nav class="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)]">
      <div class="bg-gray-900/90 backdrop-blur-md rounded border-2 border-gray-700/50 shadow-xl overflow-hidden flex flex-col max-h-[calc(100vh-8rem)]">
        <div class="bg-gradient-to-r from-gray-800/80 to-gray-800/50 px-4 py-3 border-b border-gray-700/50 sticky top-0 z-10">
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider">
            On This Page
          </h3>
        </div>
        <ul class="space-y-0.5 p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              style={{ paddingLeft: `${(heading.depth - 1) * 0.75}rem` }}
            >
              <button
                data-slug={heading.slug}
                onClick={() => scrollToHeading(heading.slug)}
                class={`text-left w-full text-xs py-1.5 px-2 rounded transition-all ${
                  activeId === heading.slug
                    ? "text-green-400 bg-green-500/10 font-medium border-l-2 border-green-400 shadow-sm"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border-l-2 border-transparent"
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
