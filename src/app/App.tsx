import React, { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { clsx } from "shared/lib/clsx/clsx";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx(`app ${theme}`)}>
            {/*// suspense for i18n load*/}
            <Suspense fallback={""}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
