import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {App} from "./App";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(
    <RouterProvider router={router} />
);
