import AllProjects from "./Pages/AllProjects";
import Footer from "./Pages/Footer/Footer";
import MainPage from "./Pages/MainPage";
import "./Styles/Css/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "all-projects",
      element: <AllProjects />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
