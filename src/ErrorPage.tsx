import { FC } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

/**
 * The Error Page for the app.
 * Displays when there is an error, either in rendering, or in routing.
 * e.g. 404 Not Found Error
 * @returns {FC}
 */
const ErrorPage: FC = () => {
    const error = useRouteError();

    // The return type from useRouteError is unknown, so we have to check
    // the type before using any properties of error.
    let status = "Programmatic Error";
    if (isRouteErrorResponse(error)) {
        status = error.status + ": " + error.statusText;
    }
    return (
        <div className="app">
            <h1 style={{ fontSize: "45px", color: "#f33" }}>
                An Error Occurred
            </h1>
            <h3 style={{ fontSize: "35px", color: "#4278d6" }}>{status}</h3>
        </div>
    );
};

export default ErrorPage;
