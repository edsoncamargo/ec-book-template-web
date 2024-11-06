import Banner from '../../components/banner/banner.component';
import Button from '../../components/button/button.component';
import { CurrentThemeContext } from '../../context';
import Line from '../../components/line/line.component';
import { useContext } from 'react';

export function Home() {
  const { currentTheme, bookContent } = useContext(CurrentThemeContext);
  const content = bookContent!.content.pt;

  return (
    <section id='inicio'>
      <Banner>
        <Banner.Book currentTheme={currentTheme} />

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

          <Button>{content.button}</Button>
        </Banner.Content>
      </Banner>
      <Line />
    </section>
  );
}
