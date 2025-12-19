// src/router/routing.jsx
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { HomePage } from "../pages/HomePage/HomePage";


export const routes = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/:category',
        element: <CategoryPage/>,
    }
];

