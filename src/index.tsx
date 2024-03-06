import React from "react";
import App from "./app/App";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "./app/providers/ErrorBoundary";

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>,
    );
} else {
    console.error("root element not found");
}
