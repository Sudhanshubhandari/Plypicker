import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import './bootstrap.min.css'
import { MantineProvider } from '@mantine/core';
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
    </Provider>
);

