interface CommonContent {
  title: string;
  author: string;
  category: string[];
  button: string;
  sneak_peak?: string;
  book_alt: string;
  synopsis: {
    title: string;
    contents?: string[];
    show?: boolean;
  };
  purchase: {
    title: string;
    description: string;
    link?: string;
    price?: {
      physical?: {
        label: string;
        prefix: string;
        value: string;
        suffix: string;
        platforms?: {
          name: string;
          button: string;
          link?: string;
        }[];
      };
      ebook?: {
        label: string;
        prefix: string;
        value: string;
        suffix: string;
        platforms?: {
          name: string;
          button: string;
          link?: string;
        }[];
      };
    };
    show?: boolean;
  };
  characteristics: {
    title: string;
    details: { type: string; value: string }[];
    show?: boolean;
  };
  about_author: {
    title: string;
    description: string;
    signature?: string;
    signature_alt?: string;
    author_image: string;
    show?: boolean;
  };
  other_publications: {
    title: string;
    books: { title: string; cover_image: string; link: string }[];
    show?: boolean;
  };
  partners: {
    title: string;
    logos: string[];
    show?: boolean;
  };
  footer: {
    menu: Array<Array<{ label: string; link: string }>>;
    social_medias: {
      buttons: Array<{
        icon: string;
        link: string;
      }>;
      show: boolean;
    };
    rights: { label: string; year: string };
    developer: string;
    show?: boolean;
  };
  donation: {
    show?: boolean;
  };
}

export interface BookContent {
  id: string;
  theme: string;
  seo: {
    title: string;
    description: string;
  };
  content: {
    pt?: CommonContent;
    en?: CommonContent;
  };
}
