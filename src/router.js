import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailPage} from "./pages/UsersDetailPage";
import {PostsPage} from "./pages/PostsPage";
import {PostsDetailsPage} from "./pages/PostsDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'usersDetail', element: <UsersDetailPage/>, children: [
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path: 'postDetail', element: <PostsDetailsPage/>
            }
        ]
    }
])