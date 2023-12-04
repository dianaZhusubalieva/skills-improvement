import React from "react";
import App from "./app/App";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";


const root = createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
