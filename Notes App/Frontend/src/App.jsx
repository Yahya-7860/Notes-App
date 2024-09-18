import "./App.css";
import Login from "./pages/Login";
import NoteApp from "./pages/NoteApp";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute element={NoteApp} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" autoClose={1000} />
      {/* <UserProfileCard /> */}
    </>
  );
}

export default App;
