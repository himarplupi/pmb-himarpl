"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreHorizontal } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import type { RegistrationItem } from "../page";

export function SidebarNav({
  items,
  ...props
}: { items: RegistrationItem[] } & React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <SidebarDefault className="hidden lg:block" items={items} {...props} />
      <TopbarNavMobile className="lg:hidden" items={items} {...props} />
    </>
  );
}

function SidebarDefault({
  className,
  items,
  ...props
}: { items: RegistrationItem[] } & React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "flex space-x-2 pb-4 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "w-full justify-start",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

function TopbarNavMobile({
  className,
  items,
  ...props
}: { items: RegistrationItem[] } & React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const currentItem = items.find((item) => item.href === pathname);

  return (
    <nav
      className={cn(
        "flex space-x-2 pb-4 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      <TooltipProvider>
        <Tooltip>
          {items.length > 1 && (
            <DropdownMenu>
              <DropdownMenuContent align="start">
                {items.map(
                  (item) =>
                    item.href !== pathname && (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                          "justify-start",
                        )}
                      >
                        <DropdownMenuItem>{item.title}</DropdownMenuItem>
                      </Link>
                    ),
                )}
              </DropdownMenuContent>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "justify-start",
                  )}
                >
                  <MoreHorizontal className="h-6 w-6" />
                </DropdownMenuTrigger>
              </TooltipTrigger>
            </DropdownMenu>
          )}

          <Link
            href={currentItem?.href ?? ""}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start bg-muted hover:bg-muted",
            )}
          >
            {currentItem?.title}
          </Link>
          <TooltipContent align="start">Link Info Lainnya</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
