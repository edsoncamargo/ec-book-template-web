# Classes de cores

Este documento descreve as classes de cores geradas automaticamente para `background-color`, `color` e `border-color` usando o mixin `generate-classes`. As classes são baseadas nas variáveis de cor definidas no projeto e incluem as seguintes classes:

- `.pcn-bg-color-{color}` para definir a cor de fundo
- `.pcn-text-color-{color}` para definir a cor do texto
- `.pcn-border-color-{color}` para definir a cor da borda

## Classes geradas

### 1. Cor de fundo (`background-color`)

Para cada cor definida, a seguinte classe é gerada para aplicar `background-color`:

```scss
.pcn-bg-color-{color}
```

**Exemplo:**

- `.pcn-bg-color-primary` – Define o fundo com a cor `primary` (#444E46).
- `.pcn-bg-color-secondary` – Define o fundo com a cor `secondary` (#D1AE6C).

### 2. Cor do texto (`color`)

Para cada cor definida, a seguinte classe é gerada para aplicar `color` ao texto:

```scss
.pcn-text-color-{color}
```

**Exemplo:**

- `.pcn-text-color-neutral-100` – Define o texto com a cor `neutral-100` (#000000).
- `.pcn-text-color-on-bg` – Define o texto com a cor `on-bg` (#FFFFFF).

### 3. Cor da Borda (`border-color`)

Para cada cor definida, a seguinte classe é gerada para aplicar `border-color`:

```scss
.pcn-border-color-{color}
```

**Exemplo:**

- `.pcn-border-color-neutral-40` – Define a borda com a cor `neutral-40` (#5E5E5E).
- `.pcn-border-color-neutral-30` – Define a borda com a cor `neutral-30` (#6F6F6F).

## Resumo das classes

| Classe                      | Propriedade CSS    | Exemplo                         |
| --------------------------- | ------------------ | ------------------------------- |
| `.pcn-bg-color-{color}`     | `background-color` | `.pcn-bg-color-primary`         |
| `.pcn-text-color-{color}`   | `color`            | `.pcn-text-color-secondary`     |
| `.pcn-border-color-{color}` | `border-color`     | `.pcn-border-color-neutral-100` |

### Variações de cor

| Cor           | RGB             | Hex     | Descrição                       |
| ------------- | --------------- | ------- | ------------------------------- |
| `primary`     | (68, 78, 70)    | #444E46 | Cor Primária                    |
| `secondary`   | (209, 174, 108) | #D1AE6C | Cor Secundária                  |
| `on-bg`       | (255, 255, 255) | #FFFFFF | Cor para elementos sob um fundo |
| `neutral-100` | (0, 0, 0)       | #000000 | Cor Neutra 100                  |
| `neutral-60`  | (51, 51, 51)    | #333333 | Cor Neutra 60                   |
| `neutral-40`  | (94, 94, 94)    | #5E5E5E | Cor Neutra 40                   |
| `neutral-30`  | (111, 111, 111) | #6F6F6F | Cor Neutra 30                   |
| `neutral-0`   | (255, 255, 255) | #FFFFFF | Cor Neutra 0                    |

| Temas                           |
| ------------------------------- |
| `pcn-a-new-story-theme`         |
| `pcn-bread-and-fish-theme`      |
| `pcn-card-board-theme`          |
| `pcn-still-in-the-garden-theme` |

> Os valores podem variar conforme o tema usado.

Essas classes ajudam a manter uma consistência nas cores aplicadas em `background-color`, `color` e `border-color` em todo o projeto, facilitando a aplicação e a troca de cores de maneira rápida e flexível.

# Classes de espaçamento

Este documento descreve as classes de espaçamento geradas automaticamente para `padding` e `margin` usando o mixin `generate-classes`. As classes são baseadas nas variáveis de espaçamento definidas no projeto e incluem versões para todos os lados, direções específicas (`top`, `bottom`, `left`, `right`), e para os eixos `x` e `y`.

## Classes geradas

### 1. Padding em todos os lados

Para cada valor de espaçamento, a seguinte classe é gerada para aplicar `padding` em todos os lados:

```scss
.pcn-padding-{spacing}
```

**Exemplo:**

- `.pcn-padding-spacing-sm` – Aplica 8px de `padding` em todos os lados.
- `.pcn-padding-spacing-lg` – Aplica 24px de `padding` em todos os lados.

### 2. Margin em Todos os Lados

Para cada valor de espaçamento, a seguinte classe é gerada para aplicar `margin` em todos os lados:

```scss
.pcn-margin-{spacing}
```

**Exemplo:**

- `.pcn-margin-md` – Aplica 16px de `margin` em todos os lados.
- `.pcn-margin-xxl` – Aplica 64px de `margin` em todos os lados.

### 3. Padding e margin por direção

Para cada valor de espaçamento e direção (`top`, `bottom`, `left`, `right`, `x`, `y`), as seguintes classes são geradas para controle de `padding` e `margin` específico:

#### Padding por direção

```scss
.pcn-padding-{spacing}-{direction}
```

**Exemplo:**

- `.pcn-padding-md-top` – Aplica 16px de `padding` apenas no `top`.
- `.pcn-padding-lg-x` – Aplica 24px de `padding` em `left` e `right`.
- `.pcn-padding-xl-y` – Aplica 48px de `padding` em `top` e `bottom`.

#### Margin por direção

```scss
.pcn-margin-{spacing}-{direction}
```

**Exemplo:**

- `.pcn-margin-sm-bottom` – Aplica 8px de `margin` apenas no `bottom`.
- `.pcn-margin-lg-x` – Aplica 24px de `margin` em `left` e `right`.
- `.pcn-margin-xl-y` – Aplica 48px de `margin` em `top` e `bottom`.

## Resumo das classes

| Classe                         | Propriedade CSS                 | Exemplo                       |
| ------------------------------ | ------------------------------- | ----------------------------- |
| `.pcn-padding-{spacing}`       | `padding` em todos os lados     | `.pcn-padding-spacing-md`     |
| `.pcn-margin-{spacing}`        | `margin` em todos os lados      | `.pcn-margin-spacing-lg`      |
| `.pcn-padding-{spacing}-{dir}` | `padding` em um lado específico | `.pcn-padding-spacing-sm-top` |
| `.pcn-margin-{spacing}-{dir}`  | `margin` em um lado específico  | `.pcn-margin-spacing-xl-y`    |

### Variações

| Variação   | Valor em Pixels | Descrição                 |
| ---------- | --------------- | ------------------------- |
| `0`        | 0px             | No Spacing                |
| `xs`       | 4px             | Micro Spacing             |
| `sm`       | 8px             | Small Spacing             |
| `xsm`      | 12px            | Small-Medium Spacing      |
| `md`       | 16px            | Medium Spacing            |
| `mdg`      | 20px            | Medium-Large Spacing      |
| `lg`       | 24px            | Large Spacing             |
| `lxm`      | 32px            | Large-Medium Spacing      |
| `xl`       | 48px            | Very Large Spacing        |
| `xxl`      | 64px            | Exaggerated Spacing       |
| `xxxl`     | 80px            | Extra Exaggerated Spacing |
| `giga`     | 96px            | Gigantic Spacing          |
| `colossal` | 128px           | Colossal Spacing          |

Essas classes ajudam a manter uma consistência de espaçamento em todo o projeto, facilitando a aplicação de `margin` e `padding` de maneira rápida e flexível.
