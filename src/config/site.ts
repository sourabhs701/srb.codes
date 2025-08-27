import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const SOURCE_CODE_GITHUB_REPO = "sourabhs701/srb.codes";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/sourabhs701/srb.codes";

export const UTM_PARAMS = {
  utm_source: "srb.codes",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
