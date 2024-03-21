import { notFound } from "next/navigation";
import { Layout } from "@/app/information/[type]/_components/layout";
import { registrationTypes } from "@/app/information/[type]/page";

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
