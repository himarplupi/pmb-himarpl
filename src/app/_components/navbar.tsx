"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.png";
import { NavSheet } from "./navsheet";
import { cn } from "@/lib/utils";

const hideNavbarOnRoutes = ["/login"];

export function NavBar() {
  const pathname = usePathname();

  return (
    !hideNavbarOnRoutes.includes(pathname) && (
      <nav className="fixed top-0 z-10 w-full drop-shadow-md">
        <div className="bg-primary-foreground container flex items-center justify-between py-2 backdrop-blur-md">
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <Image
                src={logo}
                alt="HIMARPL Logo"
                width={40}
                className="hidden md:block"
              />
              <Link href="/" className="hidden text-2xl font-bold md:block ">
                {"PMB"}
              </Link>

              <NavSheet>
                <Button size="icon" variant="ghost">
                  <Menu className="h-6 w-6" />
                </Button>
              </NavSheet>
            </div>

            <div className="hidden items-center gap-x-5 md:flex">
              <Link
                href="/"
                className={cn(
                  "text-muted-foreground hover:text-muted-foreground/80 flex items-center transition",
                  pathname === "/" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                Beranda
              </Link>
              <Link
                href="/information"
                className={cn(
                  "text-muted-foreground hover:text-foreground/75 flex items-center transition",
                  pathname === "/information" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                Info Pendaftaran
              </Link>
              <Link
                href="/news"
                className={cn(
                  "text-muted-foreground hover:text-foreground/75 flex items-center transition",
                  pathname === "/news" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                Berita
              </Link>
              <Link
                href="/software-engineering"
                className={cn(
                  "text-muted-foreground hover:text-foreground/75 flex items-center transition",
                  pathname === "/software-engineering" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                Mengenal RPL
              </Link>
              <Link
                href="/faq"
                className={cn(
                  "text-muted-foreground hover:text-foreground/75 flex items-center transition",
                  pathname === "/faq" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-muted-foreground hover:text-foreground/75 flex items-center transition",
                  pathname === "/contact" &&
                    "text-foreground hover:text-foreground/80",
                )}
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  );
}
