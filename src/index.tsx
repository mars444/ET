// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { createRoot } from 'react-dom/client';
// @ts-expect-error TS(6142): Module './App' was resolved to '/home/petr/Рабочий... Remove this comment to see the full error message
import  {App } from "./App";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
root.render(<App />);
