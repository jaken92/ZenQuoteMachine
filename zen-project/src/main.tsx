import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { StyledApp } from './components';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledApp>
      <App />
      </StyledApp>
    </QueryClientProvider>
  </React.StrictMode>
);
