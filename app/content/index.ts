import { en } from "./en";
import { fr } from "./fr";
import type { Content, Lang } from "./types";

export const locales: Lang[] = ["fr", "en"];

export function isLang(value: string): value is Lang {
  return (locales as string[]).includes(value);
}

export function getContent(lang: Lang): Content {
  return lang === "en" ? en : fr;
}

export type { Content, Lang };
