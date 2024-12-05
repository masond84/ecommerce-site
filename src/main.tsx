import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found. Ensure there is a <div id="root"></div> in your index.html.');
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
