"use client";

import { usePathname } from "next/navigation";
import parse from "html-react-parser";
import { AlertTriangleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import type { RegistrationItem } from "../page";

export function Content({ items }: { items: RegistrationItem[] }) {
  const pathname = usePathname();

  return (
    <main>
      {pathname.includes("sm-upi") && (
        <Alert className="mb-6" variant="warning">
          <AlertTriangleIcon className="h-4 w-4" />
          <AlertTitle>Perhatian!</AlertTitle>
          <AlertDescription>
            Semua informasi ini diambil dari informasi resmi tahun 2023. Silakan
            tunggu untuk informasi terbarunya, ya!
          </AlertDescription>
        </Alert>
      )}
      <article className="prose prose-invert min-h-screen max-w-none lg:prose-xl prose-headings:border-b prose-headings:font-serif prose-headings:tracking-wide">
        {parse(
          items.find((item) => item.href === pathname)?.content ??
            "<h2>Not Found</h2><p>Laman tidak ditemukan!</p>",
        )}
      </article>
    </main>
  );
}
