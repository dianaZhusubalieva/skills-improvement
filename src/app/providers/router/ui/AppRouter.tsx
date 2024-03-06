import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routes} from "app/providers/router/lib/constants";
import Loader from "shared/ui/Loader/ui/Loader";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}, i) => (
                <Route
                    key={i}
                    path={path}
                    element={
                        <Suspense fallback={<Loader />}>
                            <div className={"page-wrapper"}>{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
