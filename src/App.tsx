import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {clsx} from "./helpers/clsx/clsx";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={clsx(`app ${theme}`)}>
            <button onClick={toggleTheme}>switch</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;