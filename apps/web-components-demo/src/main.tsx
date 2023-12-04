import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

import App from './app/app';

import { WebShareAsStaatEmail } from "@staat/staat-email";
customElements.define("share-as-staat-email", WebShareAsStaatEmail);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <FluentProvider theme={teamsLightTheme}>
      <App />
    </FluentProvider>
  </StrictMode>
);
