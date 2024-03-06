import React, {useEffect} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {toggleTheme} = useTheme();
    const {t} = useTranslation();

    useEffect(() => {
        const randomNum = Math.random();
        console.log("random", randomNum);
        if (randomNum > 0.5) {
            throw Error("Hello Diana");
        }
    }, []);

    return (
        <div>
            <button onClick={toggleTheme}>switch</button>
            {t("Главная страница")}
        </div>
    );
};

export default MainPage;
