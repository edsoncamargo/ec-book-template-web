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
      synopsis: {
        title: string;
        contents?: Array<string>;
      };
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
        synopsis: {
          title: 'Sinopse',
          contents: [
            'Ter um filho, plantar uma árvore, escrever um livro. Esta frase, atribuída ao poeta cubano José Martí, orienta sobre quais realização devemos focar em nossas vidas. Conheço várias pessoas que gostariam de escrever um livro, uma dessas pessoas sou eu, mas assim como muitas pessoas encontro uma grande dificuldade chamada falta de tempo.',
            'Para Philip Chesterrffild a mais lamentável de todas as perdas é a perda do tempo. Millôr Fernandes também corrobora com sua frase dizendo: "quem mata o tempo não é assassino é suicida." Também vejo desta forma, pois quem mata o tempo, mata a si mesmo e o sonho das futuras gerações.',
            'Independente de qualquer religião ou crença todos nós temos o favor imerecido de Deus chamado graça que nos possibilita a fazer aquilo que desejamos e sonhamos, ou seja, temos o livre arbítrio para administração de nossas vidas. Mas como desperdiçar a vida e os momentos felizes que passamos sem dividir estes momentos com quem amamos ou temos qualquer tipo de afeto? Desperdiçamos estes momentos quando não registramos, ou seja, quando não escrevemos. Imagine só quando vem a inspiração de uma letra musical e você não a escreve, em minutos não conseguirá mais lembrar da letra ou melodia, ou até mesmo uma invenção, um sonho uma ideia se não forem escritas desaparecerão e só Deus sabe quando aparecerá outra inspiração.',
            'Neste contexto nasce este projeto, chamo de projeto e não de um livro, pois foi uma inspiração que recebi em um congresso que participei em Marília chamado PIB Marília, sendo assim ele só se tornará um livro quando este projeto estiver totalmente escrito por você. Use este projeto como desejar, crie metas a serem alcançadas, conte momentos importantes, escreva ideias mesmo que elas não façam sentido algum, escreva fatos ocorridos que marcaram história, use-o como uma retrospectiva de sua vida, você irá se surpreender com que poderá encontrar em algo escrito por você em alguns anos, poderá até publicar sua autobiografia, ou servirá de legado para seus filhos e netos.',
            'Para complementar este projeto você poderá plantar uma árvore de sua escolha cultivando-a com muito amor, colaborando assim para um meio ambiente melhor e mais saudável. Por último e não menos importante, ter um filho, mesmo que não seja biológico poderá ser um aprendiz, um aluno, um discípulo ou até mesmo um filho na fé, assim, após ganhar, integrar e consolidar todos seus projetos terá seu livro escrito.',
            'Que Deus te abençoe neste novo projeto de vida, e que você possa escrever uma nova história.',
          ],
        },
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
        synopsis: {
          title: 'Sinopse',
          contents: [
            'Em meio às águas turbulentas da vida, "Entre Pães e Peixes" nos convida a embarcar em uma jornada de fé, milagres e transformação. Inspirado no milagre da multiplicação dos pães e peixes, este livro traz à tona a história de Arthur, um homem comum, que carrega um propósito extraordinário. Assim como o jovem que entregou seus poucos pães e peixes nas mãos de Jesus, Arthur descobre que, nas mãos de Deus, o pouco que oferecemos pode ser multiplicado para alimentar multidões — não só de pão físico, mas com o Pão da Vida.',
            'Ao longo da narrativa, acompanhamos Arthur desde sua infância até sua jornada de maturidade espiritual, onde desafios, perdas e momentos de incerteza são transformados em ocasiões de crescimento, renovação e esperança. Unidos por laços de amor e fé, Arthur e sua família enfrentam a perseguição, as adversidades e os mistérios da vida, tudo com a convicção de que, assim como o milagre dos pães e peixes, Deus nunca abandona aqueles que n’Ele confiam.',
            'Este livro é um convite para que cada leitor perceba que, mesmo em meio aos momentos mais difíceis, Jesus está presente, multiplicando a graça, o amor e a esperança em nossas vidas. Assim como o pão e os peixes alimentaram milhares, a mensagem de Jesus, entregue por meio desta história, continua a nutrir e transformar corações ao longo dos séculos.',
          ],
        },
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
        synopsis: {
          title: 'Sinopse',
          content: [
            "Quando olhamos para as ruas de nossas cidades, muitas vezes somos confrontados com uma realidade desconcertante. Entre a correria do dia a dia, as conversas apressadas e os compromissos inadiáveis, há aqueles que vivem à margem, cujas histórias de vida se desenrolam sob a sombra dos edifícios, embaixo de pontes e nos bancos de parques. 'Casa de Papelão' surge como um tributo a essas vidas, um chamado à empatia e à reflexão.",
            'Este livro é mais do que uma coleção de histórias; é um testemunho da resiliência humana e um grito de socorro. Baseado nas experiências reais de Osmar, Sandro e Wilson, cujos nomes e narrativas são verdadeiros, ele nos leva a uma jornada profunda através de suas infâncias, sonhos e, inevitavelmente, a transição para a vida nas ruas. Cada capítulo revela não apenas os desafios que enfrentam, mas também a beleza de suas esperanças e a força de seus espíritos.',
            'Fui, inspirado pelo Espírito Santo, foi levado a este projeto ao observar um morador de rua deitado no chão, coberto apenas por uma caixa de papelão. Aquela cena tocou profundamente meu coração e  me motivou a buscar as histórias de vida de quem vive nessa realidade. Por meio de entrevistas reais com Osmar, Sandro e Wilson moradores de rua, este projeto se tornou um canal de amor e compaixão, vindo direto do coração de Deus, para aqueles que se sentem chamados, nascidos de novo e filhos de Deus. Ao ler estas páginas, será impossível não se emocionar com as histórias reais aqui contadas. Osmar, Sandro e Wilson não são apenas personagens; são vozes que ecoam o sofrimento e a luta por dignidade de milhões de pessoas. Suas narrativas nos convidam a olhar além dos estigmas e preconceitos que cercam a população de rua, desafiando-nos a reconhecer a humanidade que reside em cada um deles. Em suas histórias, encontramos risos e lágrimas, triunfos, medos, anseios, sonhos e derrotas, mas, acima de tudo, a busca incessante por um lugar ao sol.',
            'O relato de cada um deles é um grito de socorro, um pedido urgente para que a sociedade e o governo os vejam e os ouçam. Eles nos mostram que a situação em que se encontram não é apenas uma questão individual, mas um reflexo de um sistema que falha em proteger os mais vulneráveis. Ao compartilharem suas vivências, nos instigam a agir, a transformar compaixão em ação e a pressionar por mudanças significativas nas políticas sociais.',
            'Neste livro, o papelão, que muitas vezes simboliza a precariedade, transforma-se em um símbolo de resistência e esperança. As casas de papelão, que abrigam sonhos e anseios, nos lembram que, mesmo nas circunstâncias mais adversas, a vida continua a pulsar e a esperança nunca é totalmente extinguida.',
            '"Casa de Papelão" não é apenas um livro; é um projeto de transformação social. Comprometemo-nos a destinar 100% de todas as vendas para entidades que cuidam daqueles que são menos favorecidos  seus Pets. Cada exemplar adquirido será uma contribuição direta para melhorar a vida daqueles que se encontram à margem da sociedade. Este projeto não é meu, nem seu; é nosso, escrito pelo dedo de Deus, e cada um de nós é chamado a contribuir.',
            'Como igreja de Jesus Cristo, temos a responsabilidade de agir em amor e solidariedade. A Palavra de Deus nos lembra em 1 João 3:18: "Filhinhos, não amemos de palavra, nem de língua, mas em ação e em verdade." Não basta ter compaixão em nossos corações; somos chamados a traduzir essa compaixão em ações concretas. Ao compartilharmos estas histórias, espero que os leitores se sintam desafiados a olhar para os moradores de rua com mais empatia e compreensão. É uma convocação à ação coletiva. Como homens e mulheres, criaturas de Deus, temos a responsabilidade de nos envolver ativamente na transformação desse cenário. Que possamos nos perguntar: Como podemos ser agentes de mudança em nossa comunidade? Que pequenas ações podem fazer uma grande diferença na vida daqueles que se encontram à margem? Seja através da doação de roupas, alimentos ou até mesmo oferecendo um ouvido amigo, cada gesto conta. E, mais importante, ao ouvirmos e reconhecermos a dignidade de cada indivíduo, criamos um ambiente mais acolhedor e humano.',
            'Não há como permanecer indiferente ao ler estas histórias. Cada um de nós é chamado a agir, a olhar nos olhos de quem sofre e a lembrar que, por trás de cada rosto, há uma história e um ser humano que merece respeito e dignidade. Que possamos, juntos, construir uma sociedade onde não haja espaço para o abandono e onde todos possam encontrar seu lugar. Agradeço a Osmar, Sandro e Wilson por confiarem em mim suas histórias. Que suas vozes ressoem e inspirem muitos a se unirem em solidariedade, para que possamos, juntos, transformar realidades e construir um mundo melhor através deste livro.',
            'Com gratidão, Paulo Cesar Nascimento dos Santos (Autor).',
          ],
        },
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
        synopsis: {
          title: 'Sinopse',
          contents: [
            'Em um mundo onde as pressões diárias nos afastam de nossa verdadeira essência, "Ainda no Jardim" nos convida a redescobrir o propósito original da humanidade, plantado por Deus no Jardim do Éden. Inspirado em Gênesis 2:15, este livro leva você a uma jornada profunda de reflexão sobre a vida de Adão e como sua missão de "lavrar e guardar" o Éden ressoa até hoje em nosso cotidiano.',
            'Imagine um lugar onde cada tarefa é uma expressão de adoração, onde o trabalho é realizado em perfeita harmonia com a criação, e onde a comunhão com Deus é constante e íntima. Este foi o plano original de Deus para a humanidade — e ainda pode ser o seu.',
            'Com uma narrativa envolvente, Paulo Cesar Nascimento dos Santos explora a conexão entre o Jardim do Éden e o mundo moderno, revelando como podemos aplicar os princípios divinos em nossas vidas hoje. Seja para entender melhor seu propósito, encontrar equilíbrio em meio ao caos ou simplesmente para se reconectar com o Criador, "Ainda no Jardim" oferece uma perspectiva renovada e profundamente espiritual.',
            'Este livro é um convite para todos aqueles que buscam algo mais — um chamado para retornar ao jardim, onde o trabalho e a vida encontram seu verdadeiro significado. Descubra como viver de forma que honre a criação e o Criador, e como, mesmo em um mundo caótico, podemos permanecer "Ainda no Jardim."',
          ],
        },
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
