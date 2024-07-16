import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

import "moment/locale/id";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getContent(content: string) {
  // remove html tags
  return content.replace(/<[^>]+>/g, "");
}

export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const text = getContent(content);
  const wordsLength = text.split(" ").length;
  return Math.ceil(wordsLength / wordsPerMinute);
}

export function getFirstImageSrc(content: string) {
  const regex = /<img.*?src="(.*?)"/;
  const result = regex.exec(content);
  return result?.[1];
}

export function momentId(input: string | number | Date | undefined | null) {
  moment.locale("id");
  return moment(input);
}
