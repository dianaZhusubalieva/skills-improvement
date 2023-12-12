import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "app/providers/router/lib/constants";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({path, element}, i) => (
                    <Route
                        key={i}
                        path={path}
                        element={
                            <Suspense fallback={<div>loading...</div>}>
                                <div className={"page-wrapper"}>{element}</div>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
