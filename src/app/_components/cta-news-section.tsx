"use client";

import Link from "next/link";
import { Circle } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const articlePmb = [
  {
    id: 1,
    title: "Selamat datang mahasiswa RPL angkatan 24 jalur SNBP!",
    slug: "selamat-datang-mahasiswa-rpl-angkatan-24-jalur-snbp",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam ipsam dolor sequi vel. Inventore quo dolorum dolor fugiat consequatur cum, vitae quasi totam perspiciatis itaque error, asperiores quas perferendis ducimus quisquam culpa eos, iure facilis provident est ipsum blanditiis ad! Iusto natus cumque a eius mollitia et quasi, illum dolores ducimus inventore omnis reprehenderit ipsum neque aperiam blanditiis aspernatur voluptatum distinctio officiis culpa iure pariatur eligendi deserunt. Voluptas nulla atque molestiae aut libero voluptatibus doloremque vero magnam corrupti, cum consequuntur doloribus dolor, assumenda pariatur. Necessitatibus ipsam impedit aliquam quos error asperiores mollitia in quo. Dolor animi commodi obcaecati distinctio.",
    category: {
      title: "PMB",
      slug: "pmb",
    },
    tags: [
      {
        title: "SNBP",
        slug: "snbp",
      },
    ],
    author: {
      name: "Andika Eka Kurnia",
      image:
        "https://images.unsplash.com/photo-1708353273691-0186eaa03dc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMDkxMDUxOQ&ixlib=rb-4.0.3&q=80&w=300",
      username: "dikdns",
    },
    publishedAt: new Date("2024-03-26"),
  },
  {
    id: 2,
    title: "Selamat datang mahasiswa RPL angkatan 24 jalur SNBP!",
    slug: "selamat-datang-mahasiswa-rpl-angkatan-24-jalur-snbp",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam ipsam dolor sequi vel. Inventore quo dolorum dolor fugiat consequatur cum, vitae quasi totam perspiciatis itaque error, asperiores quas perferendis ducimus quisquam culpa eos, iure facilis provident est ipsum blanditiis ad! Iusto natus cumque a eius mollitia et quasi, illum dolores ducimus inventore omnis reprehenderit ipsum neque aperiam blanditiis aspernatur voluptatum distinctio officiis culpa iure pariatur eligendi deserunt. Voluptas nulla atque molestiae aut libero voluptatibus doloremque vero magnam corrupti, cum consequuntur doloribus dolor, assumenda pariatur. Necessitatibus ipsam impedit aliquam quos error asperiores mollitia in quo. Dolor animi commodi obcaecati distinctio.",
    category: {
      title: "Berita",
      slug: "berita",
    },
    tags: [
      {
        title: "PMB",
        slug: "pmb",
      },
      {
        title: "SNBP",
        slug: "snbp",
      },
    ],
    author: {
      name: "Andika Eka Kurnia",
      image:
        "https://images.unsplash.com/photo-1708353273691-0186eaa03dc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMDkxMDUxOQ&ixlib=rb-4.0.3&q=80&w=300",
      username: "dikdns",
    },
    publishedAt: new Date("2024-03-26"),
  },
];
