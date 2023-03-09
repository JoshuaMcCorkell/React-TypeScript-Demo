/*
This is the ENTRY POINT of the React app. Because this app uses React-Router, 
this file also contains the information for the router. 
*/

import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    redirect,
} from "react-router-dom";
import Root from "./routes/Root";
import Form from "./routes/Form/Form";
import Submission from "./routes/Submission/Submission";
import Team from "./routes/Team/Team";
import ErrorPage from "./ErrorPage";
import "./global.scss";

// Sets up the router with different routes so the user
// gets the experience of a multi-page app.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // See Root.tsx for explanation of why errorElement is like this
        errorElement: <Root component={<ErrorPage />} />,
        children: [
            {
                // This just redirects to /form, you could put a page here.
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
                // This loads in the data from the GET header.
                loader: async ({ request }) => {
                    const url = new URL(request.url);
                    return url.searchParams;
                },
            },
        ],
    },
]);

// The following code actually mounts the app.
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
// In a single-page app, instead of <RouterProvider /> you would use your main app element.
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
