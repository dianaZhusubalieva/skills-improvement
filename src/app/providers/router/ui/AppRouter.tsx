import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "app/providers/router/lib/constants";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
