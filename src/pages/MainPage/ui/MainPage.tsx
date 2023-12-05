import React from "react";
import { useTheme } from "app/providers/ThemeProvider";

const MainPage = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>switch</button>
        </div>
    );
};

export default MainPage;
