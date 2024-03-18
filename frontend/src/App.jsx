import AllProjects from "./Pages/AllProjects";
import Footer from "./Pages/Footer/Footer";
import MainPage from "./Pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDobfliXAiUb5pCe8MSKvubTxWBtFiSdT4",
    authDomain: "portfolioproject-c30ae.firebaseapp.com",
    projectId: "portfolioproject-c30ae",
    storageBucket: "portfolioproject-c30ae.appspot.com",
    messagingSenderId: "805406393048",
    appId: "1:805406393048:web:0333f2c67365de0f574dad",
    measurementId: "G-KL1FCPW0KY",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
