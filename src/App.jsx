import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./navigation/RootLayout";
import AboutMe from "./pages/AboutMe";
import Landing from "./pages/Landing";
import useFonts from "./components/useFonts"; //redundant

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing/>
        },
        { path: "aboutMe", element: <AboutMe /> },
      ],
    },
  ]);

  useFonts(); //redundant

  return (
    <RouterProvider router={router} />
  );
  
}

export default App;
