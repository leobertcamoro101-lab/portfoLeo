// for react router dom v2

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/pages/RootLayout";
// import Hero from "./components/pages/Hero";
// import Projects from "./components/pages/Projects";
// import Skills from "./components/pages/Skills";
// import Contact from "./components/pages/Contact";
// import Divider from "../Divider";
// import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutMe from "./components/pages/AboutMe";
import Landing from "./components/pages/Landing";
import useFonts from "./components/useFonts"; //redundant

//this is debug code
// Paste this above your App function temporarily
// const origError = console.error;
// console.error = (...args) => {
//   if (args[0]?.includes?.('key')) {
//     console.trace('Missing key here ↑');  // shows exact stack trace
//   }
//   origError(...args);
// };

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          // element: (
          //   <> {/* ← Fragment wraps all — no extra div needed */}
          //     <Hero />
          //     <Divider/>
          //     <Projects />
          //     <Divider/>
          //     <Skills />
          //     <Divider/>
          //     <Contact />
          //     <ScrollToTopButton />
          //   </>
          // ),
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
