import Banner from '../../components/banner/banner.component';
import Button from '../../components/button/button.component';
import { CurrentThemeContext } from '../../context';
import Line from '../../components/line/line.component';
import { useContext } from 'react';

export default function Home() {
  const { currentTheme, bookContent, language } =
    useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='inicio' data-aos='fade-up'>
      <Banner>
        <Banner.Book currentTheme={currentTheme} bookAlt={content.book_alt} />

        <Banner.Content>
          <Banner.Emphasis>{content.title}</Banner.Emphasis>

          <Banner.About
            actor={content.author}
            categories={
              content.category.length > 0
                ? content.category?.join(', ').concat('.').trim()
                : ''
            }
          ></Banner.About>

          <a
            href={`/${content.sneak_peak}`}
            target='_blank'
            rel='noopener noreferrer'
            className={!content.sneak_peak ? 'ec-disabled' : ''}
          >
            <Button>{content.button}</Button>
          </a>
        </Banner.Content>
      </Banner>
      <Line />
    </section>
  );
}
