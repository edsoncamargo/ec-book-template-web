import { A_NEW_STORY } from './_a-new-story';
import { BREAD_AND_FISH } from './_bread-and-fish';
import { BookContent } from '../enums/book-content.enum';
import { CARD_BOARD_HOUSE } from './_card-board-house';
import { STILL_IN_THE_GARDEN } from './_still-in-the-garden';
import { THE_AMAZING_ADVENTURES_OF_DOG_ONION_AND_KITTY_MICA } from './_the-amazing-adventures-of-dog-onion-and-kitty-mica';
import { ThemeKeys } from '../enums/theme.enum';

export function getBookContentById(id: ThemeKeys): BookContent | undefined {
  return BOOKS_CONTENT.find((book) => book.id === id);
}

export const BOOKS_CONTENT = [
  A_NEW_STORY,
  BREAD_AND_FISH,
  STILL_IN_THE_GARDEN,
  CARD_BOARD_HOUSE,
  THE_AMAZING_ADVENTURES_OF_DOG_ONION_AND_KITTY_MICA,
];
