import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    redirect,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/Root";
import Form from "./routes/Form/Form";
import Submission from "./routes/Submission/Submission";
import Team from "./routes/Team/Team";
import ErrorPage from "./ErrorPage";
import "./global.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root outlet={<ErrorPage />} />,
        children: [
            {
                path: "/",
                loader: async () => {
                    return redirect("/form");
                },
            },
            {
                path: "/form",
                element: <Form />,
            },
            {
                path: "/our-team",
                element: <Team />,
            },
            {
                path: "/submission",
                element: <Submission />,
                loader: async ({ request }) => {
                    const url = new URL(request.url);
                    return url.searchParams;
                },
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
