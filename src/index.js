import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "Components/Main/Main";
import {SearchPage} from "Components/SearchPage/SearchPage";

const router = createBrowserRouter([{
    path: '/',
    element: <Main/>
},
    {
        path: '/search',
        element: <SearchPage/>
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}/>
);

