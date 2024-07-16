import Image from "next/image";
import Link from "next/link";
import { Circle } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { calculateReadTime, momentId } from "@/lib/utils";
import { api } from "@/trpc/server";

export default async function NewsPage() {
  const news = await api.post.newest();

  return (
    <main className="container mt-16 flex min-h-screen flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
      <section id="news" className="md:flex-1">
        <h2 className="mt-2 scroll-m-20 text-balance border-b pb-2 font-serif text-4xl font-bold tracking-wide">
          Berita Terbaru
        </h2>
        <div className="space-y-2 divide-y-2">
          {news.map((article) => (
            <div
              key={article.id}
              className="flex flex-col gap-y-2 rounded py-4"
            >
              <span className="flex items-center gap-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={article.author.image ?? ""}
                    alt={article.author.name + " picture"}
                  />
                </Avatar>
                <span className="truncate text-sm text-muted-foreground">
                  {article.author.name}
                </span>
                <Circle
                  className="h-1 w-1 text-muted-foreground md:h-2 md:w-2"
                  fill="hsl(var(--muted-foreground))"
                />
                <span className="text-nowrap text-sm text-muted-foreground">
                  {momentId(article?.publishedAt).fromNow()}
                </span>
              </span>
              <Link href={`/news/@${article.author.username}/${article.slug}`}>
                <div className="flex-grow justify-between gap-x-4 sm:flex">
                  <div className="w-fit">
                    <h3 className="line-clamp-2 text-pretty font-serif text-xl font-bold capitalize leading-7 sm:text-2xl">
                      {article.title}
                    </h3>
                    <p className="hidden text-pretty text-sm leading-5 tracking-wide sm:line-clamp-3">
                      {article.content}
                    </p>
                  </div>
                  {article?.image && (
                    <div className="relative mt-2 aspect-video w-full max-w-96 overflow-hidden rounded sm:w-32">
                      <Image
                        src={article?.image ?? ""}
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
      {/* <aside className="hidden flex-col gap-y-2 md:flex md:w-1/5">
        <h3 className="mt-6 scroll-m-20 font-serif text-2xl font-medium tracking-tight">
          Postingan Instagram
        </h3>

        {instagramPosts.map((post) => (
          <div key={post.id} className="flex flex-col gap-y-2 rounded py-2">
            <span className="flex items-center gap-x-2">
              <Avatar className="h-5 w-5">
                <Image
                  src={LogoHIMARPL}
                  alt="Logo HIMARPL"
                  width={20}
                  height={20}
                />
              </Avatar>
              <span className="truncate text-sm text-muted-foreground">
                HIMARPL
              </span>
            </span>
            <Link target="_blank" href={post.href}>
              <h4 className="line-clamp-2 scroll-m-20 text-balance font-serif text-lg font-semibold capitalize leading-5 tracking-wide">
                {post.title}
              </h4>
              <p className="line-clamp-4 text-balance text-xs leading-5 tracking-normal text-muted-foreground">
                {post.content}
              </p>
            </Link>
          </div>
        ))}
      </aside> */}
    </main>
  );
}
