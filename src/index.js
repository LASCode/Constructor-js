import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const ErrorContext = createContext([]);
const root = ReactDOM.createRoot(document.getElementById('ConstructorRootNode'));
root.render(
  <App />
);
export { ErrorContext }
