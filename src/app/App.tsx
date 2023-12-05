import React from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { clsx } from "shared/lib/clsx/clsx";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx(`app ${theme}`)}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
