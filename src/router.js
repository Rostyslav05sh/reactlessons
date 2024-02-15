import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailsPage} from "./pages/UsersDetailsPage";
import {PostsDetailsPage} from "./pages/PostsDetailsPage";
import {UserDetail} from "./componets/UserDetail";
import {PostsPage} from "./pages/PostsPage";

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
                path: 'user-details', element: <UsersDetailsPage/>
            },
            {
                path: 'details', element: <UserDetail/>, children: [
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

export {
    router
}