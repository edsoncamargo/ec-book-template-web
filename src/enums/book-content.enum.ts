export interface BookContent {
  id: string;
  theme: string;
  seo: {
    title: string;
    description: string;
  };
  content: {
    pt?: {
      title: string;
      author: string;
      category: string[];
      button: string;
      sneak_peak?: string;
      book_alt: string;
      synopsis: {
        title: string;
        contents?: Array<string>;
        show?: boolean;
      };
      purchase: {
        title: string;
        description: string;
        price?: {
          physical: {
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
          ebook: {
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
        signature: string;
        signature_alt: string;
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
        rights: { label: string; year: string };
        developer: string;
        show?: boolean;
      };
    };
    en?: {
      title: string;
      author: string;
      category: string[];
      button: string;
      sneak_peak?: string;
      book_alt: string;
      synopsis: {
        title: string;
        contents?: Array<string>;
        show?: boolean;
      };
      purchase: {
        title: string;
        description: string;
        price?: {
          physical: {
            label: string;
            prefix: string;
            value: string;
            suffix: string;
            platforms: {
              name: string;
              button: string;
              link?: string;
            }[];
          };
          ebook: {
            label: string;
            prefix: string;
            value: string;
            suffix: string;
            platforms: {
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
        signature: string;
        signature_alt: string;
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
        rights: { label: string; year: string };
        developer: string;
        show?: boolean;
      };
    };
  };
}
