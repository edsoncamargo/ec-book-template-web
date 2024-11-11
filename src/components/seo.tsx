import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  theme: string;
  isbn: string;
}

export default function SEO({
  title,
  description,
  theme,
  isbn,
}: Readonly<SEOProps>) {
  const imageUrl = `${
    window.location.origin
  }/assets/images/books/${theme.replace('-theme', '')}.png`;
  const faviconsUrl = `${
    window.location.origin
  }/assets/images/favicons/${theme.replace('-theme', '')}.ico`;

  return (
    <Helmet>
      {/* Definir o favicon */}
      <link rel='icon' href={faviconsUrl} type='image/x-icon' />

      <title>{title} | Paulo C. N. dos Santos</title>
      <meta name='description' content={description} />

      {/* Open Graph Meta Tags */}
      <meta property='og:image' content={imageUrl} />
      <meta property='og:type' content='book' />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      {/* Twitter Meta Tags */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />

      {/* JSON-LD Schema.org Data */}
      <script type='application/ld+json'>
        {`
          {
            "@context": "http://schema.org",
            "@type": "Book",
            "name": "${title}",
            "author": {
              "@type": "Person",
              "name": "Paulo C. N. dos Santos"
            },
            "description": "${description}",
            "isbn": "${isbn}",
            "image": "${imageUrl}",
            "publisher": {
              "@type": "Organization",
              "name": "Nome da Editora"
            }
          }
        `}
      </script>
    </Helmet>
  );
}
