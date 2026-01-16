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
    <nav class="hidden xl:block sticky top-28 max-h-[60vh]">
      <div class="overflow-hidden flex flex-col max-h-[60vh]">
        <div class="pb-3 mb-2 border-b border-white/10">
          <h3 class="text-[10px] font-medium text-white/30 uppercase tracking-widest">
            Contents
          </h3>
        </div>
        <ul class="space-y-0 overflow-y-auto scrollbar-thin">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              style={{ paddingLeft: `${(heading.depth - 1) * 0.5}rem` }}
            >
              <button
                data-slug={heading.slug}
                onClick={() => scrollToHeading(heading.slug)}
                class={`text-left w-full text-xs py-1.5 px-2 transition-all border-l ${
                  activeId === heading.slug
                    ? "text-white/70 border-accent"
                    : "text-white/30 hover:text-white/60 border-transparent"
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
