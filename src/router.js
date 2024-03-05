import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <CarsPage/>
            }
        ]
    }
])

export {
    router
}