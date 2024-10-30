import './index.scss';

import App from './app.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <main className='pcn-a-new-story-theme'> */}
    {/* <main className='pcn-bread-and-fish-theme'> */}
    {/* <main className='pcn-card-board-theme'> */}
    <main className='pcn-still-in-the-garden-theme'>
      <App />
    </main>
  </StrictMode>
);
