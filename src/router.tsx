import { createBrowserRouter } from "react-router";
import App from "./App";
import { Events } from "./pages/Events";
import { _20242 } from "./pages/events/_20242";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/events/20242",
        element: <_20242/>,
    }
]);