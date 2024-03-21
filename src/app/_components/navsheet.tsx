"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/images/logo.png";

export function NavSheet({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const href = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden" asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="left" className="sm:w-[512px]">
        <SheetHeader
          className="mt-6 flex cursor-pointer flex-row items-center gap-x-2"
          onClick={() => href("/")}
        >
          <Image src={logo} alt="HIMARPL Logo" width={40} />
          <SheetTitle className="!mt-0 font-serif text-2xl font-bold tracking-wider">
            {"PMB"}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-3 grid grid-cols-1 gap-y-2">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-muted-foreground/80",
              pathname === "/" && "text-foreground hover:text-foreground/80",
            )}
          >
            Beranda
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/information"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-foreground/75",
              pathname === "/information" &&
                "text-foreground hover:text-foreground/80",
            )}
          >
            Info Pendaftaran
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/news"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-foreground/75",
              pathname === "/news" &&
                "text-foreground hover:text-foreground/80",
            )}
          >
            Berita
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/software-engineering"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-foreground/75",
              pathname === "/software-engineering" &&
                "text-foreground hover:text-foreground/80",
            )}
          >
            Mengenal RPL
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/faq"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-foreground/75",
              pathname === "/faq" && "text-foreground hover:text-foreground/80",
            )}
          >
            FAQ
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className={cn(
              "flex items-center text-muted-foreground transition hover:text-foreground/75",
              pathname === "/contact" &&
                "text-foreground hover:text-foreground/80",
            )}
          >
            Kontak
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
