import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { theme } from 'src/theme';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import 'src/public/css/global.css';
import { PageTemplate } from 'components/PageTemplate';
import { ChildrenProps } from 'src/model/props';
import { store } from '../state';

export const App = (props: ChildrenProps): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
              <PageTemplate>{props.children}</PageTemplate>
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};
