"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Nama minimal 4 karakter",
  }),
  schoolOrigin: z.string().min(4, {
    message: "Asal sekolah minimal 4 karakter",
  }),
  question: z.string().min(10, {
    message: "Pertanyaan minimal 10 karakter",
  }),
});

export function ContactForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      schoolOrigin: "",
      question: "",
    },
  });

  function onSubmit({
    name,
    question,
    schoolOrigin,
  }: z.infer<typeof formSchema>) {
    const templateText = `Halo, perkenalkan saya ${name} dari ${schoolOrigin} dan saya ingin bertanya tentang: ${question}\n\n\n Terima kasih.`;
    router.push(`https://wa.me/+6285885725027?text=${templateText}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schoolOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asal Sekolah</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan asal sekolah..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pertanyaan</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tuliskan hal yang ingin ditanyakan..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="w-full" variant="secondary">
            {/* @ts-expect-error: Entahlah SimpleIcon gaje */}
            <SiWhatsapp color="default" className="mr-2 h-4 w-4" />
            Kirim Pesan
          </Button>
        </div>
      </form>
    </Form>
  );
}
