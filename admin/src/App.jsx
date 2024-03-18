import AdminPanel from "./Pages/AdminPanel";
import AddProjectPanel from "./Pages/AddProjectPanel/AddProjectPanel";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Messages from "./Pages/Messages/Messages";
import AddSkill from "./Pages/AddSkill/AddSkill";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAJPejfnab2BlV-0HBzHDChhz_hzFZsKUY",
  authDomain: "portfolioadmin-c132b.firebaseapp.com",
  projectId: "portfolioadmin-c132b",
  storageBucket: "portfolioadmin-c132b.appspot.com",
  messagingSenderId: "26924730973",
  appId: "1:26924730973:web:731a2910e7ee44a3395bb4",
  measurementId: "G-K76C43JM8R",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
