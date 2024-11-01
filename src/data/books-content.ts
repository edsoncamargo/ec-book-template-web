import { ThemeKeys } from '../enums/theme.enum';

export interface BookContent {
  id: string;
  theme: string;
  content: {
    pt: {
      title: string;
      author: string;
      category: string[];
      button: string;
      synopsis: string;
      purchase: {
        title: string;
        description: string;
        price: {
          physical: {
            label: string;
            value: string;
            platforms: { name: string; button: string }[];
          };
          ebook: {
            label: string;
            value: string;
            platforms: { name: string; button: string }[];
          };
        };
      };
      characteristics: {
        title: string;
        details: { type: string; value: string }[];
      };
      about_author: {
        title: string;
        description: string;
        signature: string;
      };
      other_publications: {
        title: string;
        books: { title: string; cover_image: string }[];
      };
      partners: {
        title: string;
        partners: string[];
      };
      footer: {
        logo: string;
        menu: string[];
        rights: string;
        developer: string;
      };
    };
  };
}

export const BOOKS_CONTENT = [
  {
    id: 'uma-nova-historia',
    theme: 'a-new-story-theme',
    content: {
      pt: {
        title:
          'Plantar uma árvore, escrever um livro, ter um filho, mesmo que seja na fé.',
        author: 'Por Paulo Cesar Nascimento dos Santos',
        category: [
          'Biografia e Autobiografia',
          'Autoria',
          'Vida Cristã',
          'Devocional',
          'Corpo',
          'Mente e Espírito',
          'Biografia e Testemunho',
          'Autoajuda',
        ],
        button: 'LEIA UM POUCO',
        synopsis:
          "Em um mundo onde as pressões diárias nos afastam de nossa verdadeira essência, 'Ainda no Jardim' nos convida a redescobrir o propósito original da humanidade, plantado por Deus no Jardim do Éden. Inspirado em Gênesis 2:15, este livro leva você a uma jornada profunda de reflexão sobre a vida de Adão e como sua missão de 'lavrar e guardar' o Éden ressoa até hoje no nosso cotidiano.\n\nImagine um lugar onde cada tarefa é uma expressão de adoração, onde o trabalho é realizado em perfeita harmonia com a criação e onde a presença de Deus é constante e íntima. Esse foi o plano original de Deus para a humanidade – e ainda pode ser para você.\n\nCom narrativa envolvente e clara, Paulo Cesar Nascimento dos Santos convida o leitor a se reencontrar com o jardim do Éden em um mundo moderno. Ele revela como podemos resgatar os princípios eternos em nossas vidas. Seja para enfrentar seu propósito, equilibrar emoções ou reencontrar-se com a paz em um mundo caótico, 'Ainda no Jardim' oferece uma perspectiva renovada e profundamente espiritual.\n\nEste é um convite para aqueles que buscam algo mais – uma chama para retornar ao jardim, onde o trabalho e a vida se unem em seu verdadeiro significado. Descubra como viver de forma que honre a criação e o Criador, e como, mesmo em um mundo caótico, podemos permanecer 'Ainda no Jardim'.",
        purchase: {
          title: 'ONDE ADQUIRIR O LIVRO?',
          description:
            'Disponível em formato físico e eBook, compre agora nas seguintes plataformas:',
          price: {
            physical: {
              label: 'FÍSICO',
              value: 'R$49,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Americanas', button: 'COMPRE AGORA' },
                { name: 'Mercado Livre', button: 'COMPRE AGORA' },
                { name: 'Estante Virtual', button: 'COMPRE AGORA' },
              ],
            },
            ebook: {
              label: 'eBOOK',
              value: 'R$26,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Google Play', button: 'COMPRE AGORA' },
                { name: 'Kobo Rakuten', button: 'COMPRE AGORA' },
                { name: 'Apple', button: 'COMPRE AGORA' },
              ],
            },
          },
        },
        characteristics: {
          title: 'CARACTERÍSTICAS',
          details: [
            {
              type: 'ISBN',
              value: '9786501130637',
            },
            {
              type: 'Número de páginas',
              value: '156',
            },
            {
              type: 'Edição',
              value: '1 (2024)',
            },
            {
              type: 'Formato',
              value: 'A5 (148x210)',
            },
            {
              type: 'Acabamento',
              value: 'Brochura c/ orelha',
            },
            {
              type: 'Coloração',
              value: 'Preto e branco',
            },
            {
              type: 'Tipo de papel',
              value: 'Polen',
            },
            {
              type: 'Idioma',
              value: 'Português',
            },
          ],
        },
        about_author: {
          title: 'SOBRE O AUTOR',
          description:
            "Paulo Cesar Nascimento dos Santos é advogado, teólogo, escritor, pastor e personal coaching. Com uma abordagem única que combina suas experiências jurídicas e teológicas, ele oferece insights profundos e transformadores.\n\nEntre seus livros estão 'Ainda no Jardim', 'Entre Pães e Peixes, Uma Nova História!' e uma obra inspiradora de narrativas clássicas, 'Casa de Papelão', que revela a resiliência humana em tempos difíceis.\n\nComo praticante de Programação Neurolinguística (PNL), Paulo Cesar dedica-se a ajudar as pessoas a desbloquearem seu potencial e alcançar seus objetivos. Sua fé e seu trabalho têm inspirado muitos a buscar crescimento pessoal e profissional e a alinhar de tudo uma experiência com Deus nos dias atuais.",
          signature: 'Paulo C.',
        },
        other_publications: {
          title: 'OUTRAS PUBLICAÇÕES DO AUTOR',
          books: [
            {
              title: 'Entre Pães e Peixes',
              cover_image: 'caminho/para/imagemEntrePaesEPeixes.jpg',
            },
            {
              title: 'Casa de Papelão',
              cover_image: 'caminho/para/imagemCasaDePapeleo.jpg',
            },
            {
              title: 'Uma Nova História!',
              cover_image: 'caminho/para/imagemUmaNovaHistoria.jpg',
            },
          ],
        },
        partners: {
          title: 'NOSSOS PARCEIROS',
          partners: [
            'Brasil Formaturas',
            'IATD',
            'Demandante Tech',
            'RCCA',
            'Arimat',
            'Olympus',
          ],
        },
        footer: {
          logo: 'caminho/para/logo.jpg',
          menu: [
            'Home',
            'Sinopse',
            'Características',
            'Onde adquirir o livro?',
            'Sobre o autor',
            'Outras publicações',
          ],
          rights: 'Todos os direitos reservados 2024.',
          developer: 'Desenvolvido por edsoncamargo.dev',
        },
      },
    },
  },
  {
    id: 'paes-e-peixes',
    theme: 'bread-and-fish-theme',
    content: {
      pt: {
        title:
          'Uma jornada de <strong>esperança</strong> e <strong>fé</strong>.',
        author: 'Por Paulo Cesar Nascimento dos Santos',
        category: [
          'Inspiracional & Religioso',
          'Cristã Contemporânea',
          'Bíblia',
          'Vida Cristã',
          'Religião',
          'Ficção',
        ],
        button: 'LEIA UM POUCO',
        synopsis:
          "Em um mundo onde as pressões diárias nos afastam de nossa verdadeira essência, 'Ainda no Jardim' nos convida a redescobrir o propósito original da humanidade, plantado por Deus no Jardim do Éden. Inspirado em Gênesis 2:15, este livro leva você a uma jornada profunda de reflexão sobre a vida de Adão e como sua missão de 'lavrar e guardar' o Éden ressoa até hoje no nosso cotidiano.\n\nImagine um lugar onde cada tarefa é uma expressão de adoração, onde o trabalho é realizado em perfeita harmonia com a criação e onde a presença de Deus é constante e íntima. Esse foi o plano original de Deus para a humanidade – e ainda pode ser para você.\n\nCom narrativa envolvente e clara, Paulo Cesar Nascimento dos Santos convida o leitor a se reencontrar com o jardim do Éden em um mundo moderno. Ele revela como podemos resgatar os princípios eternos em nossas vidas. Seja para enfrentar seu propósito, equilibrar emoções ou reencontrar-se com a paz em um mundo caótico, 'Ainda no Jardim' oferece uma perspectiva renovada e profundamente espiritual.\n\nEste é um convite para aqueles que buscam algo mais – uma chama para retornar ao jardim, onde o trabalho e a vida se unem em seu verdadeiro significado. Descubra como viver de forma que honre a criação e o Criador, e como, mesmo em um mundo caótico, podemos permanecer 'Ainda no Jardim'.",
        purchase: {
          title: 'ONDE ADQUIRIR O LIVRO?',
          description:
            'Disponível em formato físico e eBook, compre agora nas seguintes plataformas:',
          price: {
            physical: {
              label: 'FÍSICO',
              value: 'R$49,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Americanas', button: 'COMPRE AGORA' },
                { name: 'Mercado Livre', button: 'COMPRE AGORA' },
                { name: 'Estante Virtual', button: 'COMPRE AGORA' },
              ],
            },
            ebook: {
              label: 'eBOOK',
              value: 'R$26,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Google Play', button: 'COMPRE AGORA' },
                { name: 'Kobo Rakuten', button: 'COMPRE AGORA' },
                { name: 'Apple', button: 'COMPRE AGORA' },
              ],
            },
          },
        },
        characteristics: {
          title: 'CARACTERÍSTICAS',
          details: [
            {
              type: 'ISBN',
              value: '9786501130637',
            },
            {
              type: 'Número de páginas',
              value: '156',
            },
            {
              type: 'Edição',
              value: '1 (2024)',
            },
            {
              type: 'Formato',
              value: 'A5 (148x210)',
            },
            {
              type: 'Acabamento',
              value: 'Brochura c/ orelha',
            },
            {
              type: 'Coloração',
              value: 'Preto e branco',
            },
            {
              type: 'Tipo de papel',
              value: 'Polen',
            },
            {
              type: 'Idioma',
              value: 'Português',
            },
          ],
        },
        about_author: {
          title: 'SOBRE O AUTOR',
          description:
            "Paulo Cesar Nascimento dos Santos é advogado, teólogo, escritor, pastor e personal coaching. Com uma abordagem única que combina suas experiências jurídicas e teológicas, ele oferece insights profundos e transformadores.\n\nEntre seus livros estão 'Ainda no Jardim', 'Entre Pães e Peixes, Uma Nova História!' e uma obra inspiradora de narrativas clássicas, 'Casa de Papelão', que revela a resiliência humana em tempos difíceis.\n\nComo praticante de Programação Neurolinguística (PNL), Paulo Cesar dedica-se a ajudar as pessoas a desbloquearem seu potencial e alcançar seus objetivos. Sua fé e seu trabalho têm inspirado muitos a buscar crescimento pessoal e profissional e a alinhar de tudo uma experiência com Deus nos dias atuais.",
          signature: 'Paulo C.',
        },
        other_publications: {
          title: 'OUTRAS PUBLICAÇÕES DO AUTOR',
          books: [
            {
              title: 'Entre Pães e Peixes',
              cover_image: 'caminho/para/imagemEntrePaesEPeixes.jpg',
            },
            {
              title: 'Casa de Papelão',
              cover_image: 'caminho/para/imagemCasaDePapeleo.jpg',
            },
            {
              title: 'Uma Nova História!',
              cover_image: 'caminho/para/imagemUmaNovaHistoria.jpg',
            },
          ],
        },
        partners: {
          title: 'NOSSOS PARCEIROS',
          partners: [
            'Brasil Formaturas',
            'IATD',
            'Demandante Tech',
            'RCCA',
            'Arimat',
            'Olympus',
          ],
        },
        footer: {
          logo: 'caminho/para/logo.jpg',
          menu: [
            'Home',
            'Sinopse',
            'Características',
            'Onde adquirir o livro?',
            'Sobre o autor',
            'Outras publicações',
          ],
          rights: 'Todos os direitos reservados 2024.',
          developer: 'Desenvolvido por edsoncamargo.dev',
        },
      },
    },
  },
  {
    id: 'casa-de-papelao',
    theme: 'card-board-house-theme',
    content: {
      pt: {
        title: 'LANÇAMENTO EM <strong>BREVE</strong>.',
        author: 'Por Paulo Cesar Nascimento dos Santos',
        category: [],
        button: 'LEIA UM POUCO',
        synopsis:
          "Em um mundo onde as pressões diárias nos afastam de nossa verdadeira essência, 'Ainda no Jardim' nos convida a redescobrir o propósito original da humanidade, plantado por Deus no Jardim do Éden. Inspirado em Gênesis 2:15, este livro leva você a uma jornada profunda de reflexão sobre a vida de Adão e como sua missão de 'lavrar e guardar' o Éden ressoa até hoje no nosso cotidiano.\n\nImagine um lugar onde cada tarefa é uma expressão de adoração, onde o trabalho é realizado em perfeita harmonia com a criação e onde a presença de Deus é constante e íntima. Esse foi o plano original de Deus para a humanidade – e ainda pode ser para você.\n\nCom narrativa envolvente e clara, Paulo Cesar Nascimento dos Santos convida o leitor a se reencontrar com o jardim do Éden em um mundo moderno. Ele revela como podemos resgatar os princípios eternos em nossas vidas. Seja para enfrentar seu propósito, equilibrar emoções ou reencontrar-se com a paz em um mundo caótico, 'Ainda no Jardim' oferece uma perspectiva renovada e profundamente espiritual.\n\nEste é um convite para aqueles que buscam algo mais – uma chama para retornar ao jardim, onde o trabalho e a vida se unem em seu verdadeiro significado. Descubra como viver de forma que honre a criação e o Criador, e como, mesmo em um mundo caótico, podemos permanecer 'Ainda no Jardim'.",
        purchase: {
          title: 'ONDE ADQUIRIR O LIVRO?',
          description:
            'Disponível em formato físico e eBook, compre agora nas seguintes plataformas:',
          price: {
            physical: {
              label: 'FÍSICO',
              value: 'R$49,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Americanas', button: 'COMPRE AGORA' },
                { name: 'Mercado Livre', button: 'COMPRE AGORA' },
                { name: 'Estante Virtual', button: 'COMPRE AGORA' },
              ],
            },
            ebook: {
              label: 'eBOOK',
              value: 'R$26,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Google Play', button: 'COMPRE AGORA' },
                { name: 'Kobo Rakuten', button: 'COMPRE AGORA' },
                { name: 'Apple', button: 'COMPRE AGORA' },
              ],
            },
          },
        },
        characteristics: {
          title: 'CARACTERÍSTICAS',
          details: [
            {
              type: 'ISBN',
              value: '9786501130637',
            },
            {
              type: 'Número de páginas',
              value: '156',
            },
            {
              type: 'Edição',
              value: '1 (2024)',
            },
            {
              type: 'Formato',
              value: 'A5 (148x210)',
            },
            {
              type: 'Acabamento',
              value: 'Brochura c/ orelha',
            },
            {
              type: 'Coloração',
              value: 'Preto e branco',
            },
            {
              type: 'Tipo de papel',
              value: 'Polen',
            },
            {
              type: 'Idioma',
              value: 'Português',
            },
          ],
        },
        about_author: {
          title: 'SOBRE O AUTOR',
          description:
            "Paulo Cesar Nascimento dos Santos é advogado, teólogo, escritor, pastor e personal coaching. Com uma abordagem única que combina suas experiências jurídicas e teológicas, ele oferece insights profundos e transformadores.\n\nEntre seus livros estão 'Ainda no Jardim', 'Entre Pães e Peixes, Uma Nova História!' e uma obra inspiradora de narrativas clássicas, 'Casa de Papelão', que revela a resiliência humana em tempos difíceis.\n\nComo praticante de Programação Neurolinguística (PNL), Paulo Cesar dedica-se a ajudar as pessoas a desbloquearem seu potencial e alcançar seus objetivos. Sua fé e seu trabalho têm inspirado muitos a buscar crescimento pessoal e profissional e a alinhar de tudo uma experiência com Deus nos dias atuais.",
          signature: 'Paulo C.',
        },
        other_publications: {
          title: 'OUTRAS PUBLICAÇÕES DO AUTOR',
          books: [
            {
              title: 'Entre Pães e Peixes',
              cover_image: 'caminho/para/imagemEntrePaesEPeixes.jpg',
            },
            {
              title: 'Casa de Papelão',
              cover_image: 'caminho/para/imagemCasaDePapeleo.jpg',
            },
            {
              title: 'Uma Nova História!',
              cover_image: 'caminho/para/imagemUmaNovaHistoria.jpg',
            },
          ],
        },
        partners: {
          title: 'NOSSOS PARCEIROS',
          partners: [
            'Brasil Formaturas',
            'IATD',
            'Demandante Tech',
            'RCCA',
            'Arimat',
            'Olympus',
          ],
        },
        footer: {
          logo: 'caminho/para/logo.jpg',
          menu: [
            'Home',
            'Sinopse',
            'Características',
            'Onde adquirir o livro?',
            'Sobre o autor',
            'Outras publicações',
          ],
          rights: 'Todos os direitos reservados 2024.',
          developer: 'Desenvolvido por edsoncamargo.dev',
        },
      },
    },
  },
  {
    id: 'ainda-no-jardim',
    theme: 'still-in-the-garden-theme',
    content: {
      pt: {
        title: 'Uma jornada interior na presença de <strong>Deus</strong>.',
        author: 'Por Paulo Cesar Nascimento dos Santos',
        category: [
          'Religião',
          'Espiritualidade',
          'Religião e Espiritualidade',
          'Vida Cristã',
          'Religião',
        ],
        button: 'LEIA UM POUCO',
        synopsis:
          "Em um mundo onde as pressões diárias nos afastam de nossa verdadeira essência, 'Ainda no Jardim' nos convida a redescobrir o propósito original da humanidade, plantado por Deus no Jardim do Éden. Inspirado em Gênesis 2:15, este livro leva você a uma jornada profunda de reflexão sobre a vida de Adão e como sua missão de 'lavrar e guardar' o Éden ressoa até hoje no nosso cotidiano.\n\nImagine um lugar onde cada tarefa é uma expressão de adoração, onde o trabalho é realizado em perfeita harmonia com a criação e onde a presença de Deus é constante e íntima. Esse foi o plano original de Deus para a humanidade – e ainda pode ser para você.\n\nCom narrativa envolvente e clara, Paulo Cesar Nascimento dos Santos convida o leitor a se reencontrar com o jardim do Éden em um mundo moderno. Ele revela como podemos resgatar os princípios eternos em nossas vidas. Seja para enfrentar seu propósito, equilibrar emoções ou reencontrar-se com a paz em um mundo caótico, 'Ainda no Jardim' oferece uma perspectiva renovada e profundamente espiritual.\n\nEste é um convite para aqueles que buscam algo mais – uma chama para retornar ao jardim, onde o trabalho e a vida se unem em seu verdadeiro significado. Descubra como viver de forma que honre a criação e o Criador, e como, mesmo em um mundo caótico, podemos permanecer 'Ainda no Jardim'.",
        purchase: {
          title: 'ONDE ADQUIRIR O LIVRO?',
          description:
            'Disponível em formato físico e eBook, compre agora nas seguintes plataformas:',
          price: {
            physical: {
              label: 'FÍSICO',
              value: 'R$49,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Americanas', button: 'COMPRE AGORA' },
                { name: 'Mercado Livre', button: 'COMPRE AGORA' },
                { name: 'Estante Virtual', button: 'COMPRE AGORA' },
              ],
            },
            ebook: {
              label: 'eBOOK',
              value: 'R$26,19',
              platforms: [
                { name: 'Amazon', button: 'COMPRE AGORA' },
                { name: 'Google Play', button: 'COMPRE AGORA' },
                { name: 'Kobo Rakuten', button: 'COMPRE AGORA' },
                { name: 'Apple', button: 'COMPRE AGORA' },
              ],
            },
          },
        },
        characteristics: {
          title: 'CARACTERÍSTICAS',
          details: [
            {
              type: 'ISBN',
              value: '9786501130637',
            },
            {
              type: 'Número de páginas',
              value: '156',
            },
            {
              type: 'Edição',
              value: '1 (2024)',
            },
            {
              type: 'Formato',
              value: 'A5 (148x210)',
            },
            {
              type: 'Acabamento',
              value: 'Brochura c/ orelha',
            },
            {
              type: 'Coloração',
              value: 'Preto e branco',
            },
            {
              type: 'Tipo de papel',
              value: 'Polen',
            },
            {
              type: 'Idioma',
              value: 'Português',
            },
          ],
        },
        about_author: {
          title: 'SOBRE O AUTOR',
          description:
            "Paulo Cesar Nascimento dos Santos é advogado, teólogo, escritor, pastor e personal coaching. Com uma abordagem única que combina suas experiências jurídicas e teológicas, ele oferece insights profundos e transformadores.\n\nEntre seus livros estão 'Ainda no Jardim', 'Entre Pães e Peixes, Uma Nova História!' e uma obra inspiradora de narrativas clássicas, 'Casa de Papelão', que revela a resiliência humana em tempos difíceis.\n\nComo praticante de Programação Neurolinguística (PNL), Paulo Cesar dedica-se a ajudar as pessoas a desbloquearem seu potencial e alcançar seus objetivos. Sua fé e seu trabalho têm inspirado muitos a buscar crescimento pessoal e profissional e a alinhar de tudo uma experiência com Deus nos dias atuais.",
          signature: 'Paulo C.',
        },
        other_publications: {
          title: 'OUTRAS PUBLICAÇÕES DO AUTOR',
          books: [
            {
              title: 'Entre Pães e Peixes',
              cover_image: 'caminho/para/imagemEntrePaesEPeixes.jpg',
            },
            {
              title: 'Casa de Papelão',
              cover_image: 'caminho/para/imagemCasaDePapeleo.jpg',
            },
            {
              title: 'Uma Nova História!',
              cover_image: 'caminho/para/imagemUmaNovaHistoria.jpg',
            },
          ],
        },
        partners: {
          title: 'NOSSOS PARCEIROS',
          partners: [
            'Brasil Formaturas',
            'IATD',
            'Demandante Tech',
            'RCCA',
            'Arimat',
            'Olympus',
          ],
        },
        footer: {
          logo: 'caminho/para/logo.jpg',
          menu: [
            'Home',
            'Sinopse',
            'Características',
            'Onde adquirir o livro?',
            'Sobre o autor',
            'Outras publicações',
          ],
          rights: 'Todos os direitos reservados 2024.',
          developer: 'Desenvolvido por edsoncamargo.dev',
        },
      },
    },
  },
];

export function getBookContentById(id: ThemeKeys) {
  return BOOKS_CONTENT.find((book) => book.id === id);
}
