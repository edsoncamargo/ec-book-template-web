import * as dotenv from 'dotenv';

import { appConfig } from './src/app-config';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

dotenv.config();

export default defineConfig({
  base: '/',
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: appConfig().title,
          description: appConfig().description,
          image: appConfig().image,
          favicon: appConfig().favicon,
        },
      },
    }),
    react(),
  ],
});
