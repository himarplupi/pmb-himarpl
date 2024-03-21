"use client";

import parse from "html-react-parser";
import { usePathname } from "next/navigation";
import type { RegistrationItem } from "../page";

export function Content({ items }: { items: RegistrationItem[] }) {
  const pathname = usePathname();

  return (
    <main>
      <article className="prose prose-invert max-w-none lg:prose-xl prose-headings:border-b prose-headings:font-serif prose-headings:tracking-wide">
        {parse(
          items.find((item) => item.href === pathname)?.content ??
            "<h2>Not Found</h2><p>Laman tidak ditemukan!</p>",
        )}
      </article>
    </main>
  );
}
