import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { facultyPaths } from "./faculty.routes";
import { adminPaths } from "./admin.route";
import { studentPaths } from "./student.routes";
import { routeGenerator } from "../pages/utils/routesGenerator";
// import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: facultyPaths,
  },
  {
    path: "/student",
    element: <App />,
    children: studentPaths,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
