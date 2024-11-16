import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { getBookContentById } from './data/books-content';

export const appConfig = () => {
  const themeKey = process.env.VITE_TEMPLATE_NAME as ThemeKeys;
  const currentContent = getBookContentById(themeKey);
  const currentTheme =
    THEME_MAPPINGS[themeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim];

  return {
    title: currentContent!.seo.title,
    description: currentContent!.seo.description,
    image: `/assets/images/covers/${currentTheme.replace('-theme', '')}.jpeg`,
    favicon: `/assets/images/favicons/${currentTheme.replace(
      '-theme',
      ''
    )}.ico`,
  };
};
