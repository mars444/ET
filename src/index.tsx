import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {App} from "./App";

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<App />);
