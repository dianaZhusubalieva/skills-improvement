import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider";
import {clsx} from "shared/lib/clsx/clsx";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={clsx(`app ${theme}`)}>
            <button onClick={toggleTheme}>switch</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;