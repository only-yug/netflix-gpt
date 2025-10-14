import React from "react";

import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const AppRouter = createBrowserRouter([
    { path: "/browse", element: <Browse /> },
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
