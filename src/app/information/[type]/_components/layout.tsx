"use client";

import { Separator } from "@/components/ui/separator";
import { Content } from "./content";
import { SidebarNav } from "./sidebar-nav";
import type { RegistrationType } from "../page";

export function Layout({
  registrationType,
}: {
  registrationType: RegistrationType;
}) {
  return (
    <div className="container mt-16 space-y-6 p-10 pb-10">
      <div className="space-y-0.5">
        <h2 className="font-serif text-2xl font-bold tracking-wide">
          {registrationType.title}
        </h2>
        <p className="text-muted-foreground">{registrationType.description}</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SidebarNav items={registrationType.items} />
        </aside>
        <div className="flex-1">
          <Content items={registrationType.items} />
        </div>
      </div>
    </div>
  );
}
