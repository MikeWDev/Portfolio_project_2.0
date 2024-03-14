import AdminPanel from "./Pages/AdminPanel";
import AddProjectPanel from "./Pages/AddProjectPanel/AddProjectPanel";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Messages from "./Pages/Messages/Messages";
import AddSkill from "./Pages/AddSkill/AddSkill";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminPanel />,
      children: [
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "addproject",
          element: <AddProjectPanel />,
        },
        {
          path: "addskill",
          element: <AddSkill />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
