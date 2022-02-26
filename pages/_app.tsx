import "../styles/globals.css";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 overflow-hidden md:px-32 lg:px-48 gap-y-14 my-14">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-gray-900 shadow-custom-light dark:shadow-custom-dark">
          {/* sidebar  */}
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-gray-900 dark:shadow-custom-dark shadow-custom-light">
          {/* navbar  */}
          <Navbar />
          {/* layouts */}
          <AnimatePresence>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
