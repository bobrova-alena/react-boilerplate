import React from 'react';
import { AppRoutes } from 'src/app/AppRoutes';
import { App } from 'src/app/App';
import 'src/public/css/global.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);

  root.render(
    <App>
      <AppRoutes />
    </App>
  );
}
