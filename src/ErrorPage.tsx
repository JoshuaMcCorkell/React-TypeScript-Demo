import { FC } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: FC = () => {
    const error = useRouteError();
    let status = "Dev Error";
    if (isRouteErrorResponse(error)) {
        status = error.status + ": " + error.statusText;
    }
    return (
        <div className="app">
            <h1 style={{"fontSize": "45px", "color": "#f33"}}>An Error Occurred</h1>
            <h3 style={{"fontSize": "35px", "color": "#4278d6"}}>{status}</h3>
        </div>
    );
};

export default ErrorPage;
