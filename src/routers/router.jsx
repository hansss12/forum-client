import { createBrowserRouter, redirect } from "react-router-dom";
import LoginImg from "../views/LoginImg";
import Layout from "../views/Layout";
import RegisterImg from "../views/RegisterImg";
import Home from "../components/Home";
import LayoutForum from "../components/forum/LayoutForum";
import Thread from "../components/forum/Thread";
import TopThread from "../components/forum/TopThread";
import Saved from "../components/forum/Saved";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/forum",
        element: <Layout />,
        loader: async () => {
            const user = await localStorage.getItem("x-auth-token");
            if (!user) {
                return redirect("/");
            }
            return null;
        },
        children: [
            {
                path: "/forum",
                element: <LayoutForum />,
                children: [
                    {
                        path: "/forum/",
                        element: <Thread />
                    },
                    {
                        path: "/forum/top",
                        element: <TopThread />
                    },
                    {
                        path: "/forum/saved",
                        element: <Saved />
                    }
                ]
            },
        ],
    },
    {
        path: "/login",
        element: <LoginImg />,
        loader: async () => {
            const user = await localStorage.getItem("x-auth-token");
            if (user) {
                return redirect("/forum");
            }
            return null;
        },
    },
    {
        path: "/register",
        element: <RegisterImg />,
        loader: async () => {
            const user = await localStorage.getItem("x-auth-token");
            if (user) {
                return redirect("/forum");
            }
            return null;
        },
    },
]);

export default router;
