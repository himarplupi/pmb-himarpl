import Link from "next/link";
import { Circle } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { articles } from "@/app/news/_components/data";

export default async function NewsPage() {
  return (
    <main className="container flex min-h-screen flex-col gap-y-4">
      <section id="news" className="mt-16 md:max-w-[786px]">
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
          Berita Terbaru
        </h2>
        <div className="space-y-2 divide-y-2">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-y-2 rounded py-4"
            >
              <span className="flex items-center gap-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={article.author.image} alt="Avatar" />
                </Avatar>
                <span className="truncate text-sm text-muted-foreground">
                  {article.author.name}
                </span>
                <Circle
                  className="h-1 w-1 text-muted-foreground md:h-2 md:w-2"
                  fill="hsl(var(--muted-foreground))"
                />
                <span className="text-nowrap text-sm text-muted-foreground">
                  {article.publishedAt.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </span>
              <Link href={`/news/@${article.author.username}/${article.slug}`}>
                <div className="flex-grow justify-between gap-x-4 sm:flex">
                  <div className="w-fit">
                    <h3 className="line-clamp-2 text-pretty font-serif text-xl font-bold capitalize leading-7 sm:text-2xl">
                      {article.title}
                    </h3>
                    <p className="hidden text-pretty text-sm leading-5 tracking-wide sm:line-clamp-3">
                      {getContent(article.content)}
                    </p>
                  </div>
                  {getFirstImageSrc(article.content) && (
                    <div className="relative mt-2 aspect-video w-full max-w-96 overflow-hidden rounded sm:w-32">
                      <Image
                        src={getFirstImageSrc(article.content) ?? ""}
                        alt={`${article.title} thumbnail`}
                        className="object-cover object-center"
                        fill
                      />
                    </div>
                  )}
                </div>
                <div className="mt-4 flex gap-x-2">
                  <Badge variant="secondary" className="truncate font-normal">
                    {article.tags[0]?.title ?? ""}
                  </Badge>
                  <span className="text-nowrap text-sm text-muted-foreground">
                    {calculateReadTime(article.content)} menit baca
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function getContent(content: string) {
  // remove html tags
  return content.replace(/<[^>]+>/g, "");
}

function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const text = getContent(content);
  const wordsLength = text.split(" ").length;
  return Math.ceil(wordsLength / wordsPerMinute);
}

function getFirstImageSrc(content: string) {
  const regex = /<img.*?src="(.*?)"/;
  const result = regex.exec(content);
  return result?.[1];
}
