import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Authentication from "./components/Authentication";
import UserAuthentication from "./components/UserAuthentication";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
      children: [
        {
          path: "auth",
          element: <UserAuthentication />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
