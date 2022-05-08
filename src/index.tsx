import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
// @ts-ignore
import preset from '@rebass/preset';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={preset}>
        <App />
        <ReactQueryDevtools  position="bottom-right" />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
