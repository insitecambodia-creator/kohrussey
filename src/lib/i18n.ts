// Languages of the site. English is the main one; French and Chinese have a home page of their own
// (the old WordPress addresses /fr/ and /zh-hans/ are kept). Inner pages are in English only for now.

export type Locale = "en" | "fr" | "zh";

export const locales = {
  en: { label: "EN", name: "English", htmlLang: "en", ogLocale: "en_US", hreflang: "en", home: "/" },
  fr: { label: "FR", name: "Français", htmlLang: "fr-FR", ogLocale: "fr_FR", hreflang: "fr", home: "/fr/" },
  zh: { label: "中文", name: "中文", htmlLang: "zh-CN", ogLocale: "zh_CN", hreflang: "zh-hans", home: "/zh-hans/" },
} as const;

/** The three home pages, for the hreflang links that tell search engines they are the same page in other languages. */
export const homeAlternates: Record<Locale, string> = { en: "/", fr: "/fr/", zh: "/zh-hans/" };

type Link = { href: string; label: string };

/** Fixed words in the header and footer. English keeps the full menu defined in lib/site.ts. */
export const ui: Record<
  Locale,
  {
    skip: string;
    menu: string;
    book: string;
    language: string;
    tagline: string;
    whatsapp: string;
    whatsappMessage: string;
    copyright: string;
    /** The menu on this language's pages; null means the English menu in lib/site.ts. */
    nav: Link[] | null;
  }
> = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    book: "Book now",
    language: "Language",
    tagline: "A Private Island Resort in Cambodia",
    whatsapp: "Message us on WhatsApp",
    whatsappMessage: "Hello! I'd like to ask about staying at Koh Russey Resort.",
    copyright: "© Koh Russey Resort. All rights reserved.",
    nav: null,
  },
  fr: {
    skip: "Aller au contenu",
    menu: "Menu",
    book: "Réserver",
    language: "Langue",
    tagline: "Un resort sur une île privée au Cambodge",
    whatsapp: "Écrivez-nous sur WhatsApp",
    whatsappMessage: "Bonjour ! J’aimerais avoir des informations sur un séjour au Koh Russey Resort.",
    copyright: "© Koh Russey Resort. Tous droits réservés.",
    nav: [{ href: "/gallery/", label: "Galerie" }],
  },
  zh: {
    skip: "跳到内容",
    menu: "菜单",
    book: "立即预订",
    language: "语言",
    tagline: "柬埔寨私人海岛度假村",
    whatsapp: "通过 WhatsApp 联系我们",
    whatsappMessage: "你好！我想了解入住 Koh Russey Resort 的相关信息。",
    copyright: "© Koh Russey Resort 版权所有。",
    nav: [{ href: "/gallery/", label: "图库" }],
  },
};
