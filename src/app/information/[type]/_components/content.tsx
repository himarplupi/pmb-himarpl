"use client";

import { usePathname } from "next/navigation";
import type { RegistrationItem } from "../page";

export function Content({ items }: { items: RegistrationItem[] }) {
  const pathname = usePathname();

  return (
    <main>
      <article
        className="prose prose-invert lg:prose-xl prose-headings:font-medium prose-headings:font-serif prose-headings:border-b prose-headings:tracking-wide max-w-none"
        dangerouslySetInnerHTML={{
          __html:
            items.find((item) => item.href === pathname)?.content ??
            "Not Found",
        }}
      />
    </main>
  );
}
