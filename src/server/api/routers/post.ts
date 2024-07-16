import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  newest: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.post.findMany({
      where: {
        publishedAt: {
          not: null,
        },
        tags: {
          some: {
            OR: [
              { title: "berita pmb" },
              { title: "snbt" },
              { title: "snbp" },
              { title: "pmb" },
              { title: "prestasi istimewa" },
              { title: "sm upi" },
            ],
          },
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: 5,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            image: true,
            name: true,
          },
        },
        tags: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });
  }),
});
