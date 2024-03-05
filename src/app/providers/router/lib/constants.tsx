import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";
import React from "react";
import {NotFoundPage} from "pages/NotFoundPage";

export const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
