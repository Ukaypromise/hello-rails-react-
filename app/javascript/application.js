import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { getMessage } from './redux/greetings/greetingsSlice';

store.dispatch( getMessage() );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);