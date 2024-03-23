import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { articles } from "@/app/news/_components/data";

export default async function NewsDetailPage({
  params,
}: {
  params: {
    username: string;
    slug: string;
  };
}) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="container mt-16 flex min-h-screen flex-col gap-y-4 pb-16 md:px-40">
      <h2 className="mt-2 scroll-m-20 border-b pb-2 font-serif text-4xl font-bold tracking-wide">
        {article.title}
      </h2>
      <article className="prose prose-invert min-h-screen max-w-none lg:prose-xl prose-headings:border-b prose-headings:font-serif prose-headings:tracking-wide">
        {parse(article.content)}
      </article>
    </main>
  );
}
