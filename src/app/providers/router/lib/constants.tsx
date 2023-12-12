import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";

export const routes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
];
