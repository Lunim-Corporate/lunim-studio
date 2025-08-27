import { PrismicDocument } from "@prismicio/client";

export const linkResolver = (doc: PrismicDocument) => {
  if (doc.type === "case_study") {
    return `/case-studies/${doc.uid}`;
  }

  // fallback
  return "/";
};
