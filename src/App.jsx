// import Navbar from "./components/Navbar";
// import Hero from "./components/pages/Hero";
// import Divider from "./components/Divider";
// import Projects from "./components/pages/Projects";
// import Skills from "./components/pages/Skills";
// import Contact from "./components/pages/Contact";
// import Footer from "./components/Footer";
// import useFonts from "./components/useFonts";
// import ScrollToTopButton from "./components/ScrollToTopButton";

// function App(){
  
//   useFonts();

//   return (
//     <div className="font-sans bg-[#F7F5F0] text-[#1A1814] min-h-screen">
//       <Navbar />
//       <Hero/>
//       <Divider/>
//       <Projects/>
//       <Divider/>
//       <Skills/>
//       <Divider/>
//       <Contact/>
//       <ScrollToTopButton/>
//       <Footer/>
//     </div>
    
//   );
// }

// export default App;

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
import useFonts from "./components/useFonts";

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

  useFonts();

  return (
    <RouterProvider router={router} />
  );
  
}

export default App;

// for react router dom v1

// import Hero from "./components/pages/Hero";
// import Projects from "./components/pages/Projects";
// import useFonts from "./components/useFonts";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/pages/RootLayout";
// import Skills from "./components/pages/Skills";
// import Contact from "./components/pages/Contact";
// import AboutMe from "./components/pages/AboutMe";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { index: true, element: <Hero /> },
//         { path: "projects", element: <Projects /> },
//         { path: "skills", element: <Skills /> },
//         { path: "contact", element: <Contact /> },
//         { path: "aboutMe", element: <AboutMe /> },
//       ],
//     },
//   ]);
//   useFonts();

//   return (
//       <RouterProvider router={router} />
//   );
// }

// export default App;
