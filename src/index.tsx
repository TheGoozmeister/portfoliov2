import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppRouter from "./components/Router/index.tsx"
import { Provider } from 'react-redux';
import store from './store/store.ts';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
  </Provider>
);

