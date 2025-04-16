import AddUser from "./component/AddUser";
import Update from "./component/Update";
import User from "./component/User";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/add",
    element: <AddUser />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);
