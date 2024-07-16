import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/app/information/[type]/_components/layout";
import { registrationTypes } from "@/app/information/[type]/page";

type Props = {
  params: { type: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const registrationType = registrationTypes.find((t) => t.id === params.type);

  return {
    title: registrationType?.title + " | HIMARPL",
    description: registrationType?.description,
  };
}

export default async function SubInfoPage({
  params: { type },
}: {
  params: { type: string };
}) {
  const registrationType = registrationTypes.find((t) => t.id === type);

  if (!registrationType) {
    return notFound();
  }

  return <Layout registrationType={registrationType} />;
}
