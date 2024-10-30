import './index.scss';

import App from './app.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='pcn-a-new-story-theme'>
      <App />
    </main>
  </StrictMode>
);
