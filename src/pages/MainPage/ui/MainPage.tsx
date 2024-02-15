import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {toggleTheme} = useTheme();
    const {t} = useTranslation();
    // const myVariable = "diana";

    console.log("window", window);
    return (
        <div>
            <button onClick={toggleTheme}>switch</button>
            {t("Главная страница")}
        </div>
    );
};

export default MainPage;
