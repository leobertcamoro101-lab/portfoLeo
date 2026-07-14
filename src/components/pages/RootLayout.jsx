import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import { fadeIn, pageVariants } from "../../utils/animations";
import Navbar from "../Navbar";
// import Divider from '../Divider';
import Footer from "../Footer";
import FloatingMenu from "../FloatingMenu";
import AnimatedSection from "../AnimatedSection";

function RootLayout() {
  const location = useLocation();
  return (
    <div className="font-sans bg-[#F7F5F0] dark:bg-[#1A1814] text-[#1A1814] dark:text-[#F7F5F0] flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <main className="flex-grow">
            <Outlet />
            {/* <Divider/> */}
            <FloatingMenu />
          </main>
        </motion.div>
      </AnimatePresence>
      <AnimatedSection variants={fadeIn}>
      <Footer />
      </AnimatedSection>
    </div>
  );
}

export default RootLayout;
