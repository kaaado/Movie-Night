import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import Search from "../pages/Search";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: ":explore",
                element: <Explore/>
            },
            {
                path: ":explore/:id",
                element: <Details/>
            },
            {
                path: "search",
                element: <Search/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
        ],
    },
]);

export default router