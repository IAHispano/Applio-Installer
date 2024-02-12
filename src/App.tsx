import { useEffect, useState } from "react";
import Page1 from "./components/1";
import { BackgroundGradientAnimation } from "./components/gradients";
import "./styles/App.css";
import { motion } from "framer-motion";
import aihispano_logo from "./assets/aihispano_logo.png";
import Download from "./components/2.1";

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPage(1);
    }, 5000);
  }, []);

  return (
    <section>
      {page === 0 && (
        <motion.main className="relative flex items-center justify-center h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
         <div className="text-white font-bold px-4 pointer-events-none flex items-center justify-center">
            <motion.img src={aihispano_logo} alt="ai hispano logo" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 4 }} className="m-auto w-80 h-80"/>
          </div>
        </motion.main>
      )}
      {page === 1 && (
        <motion.main className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
          <BackgroundGradientAnimation>
            <div className="mb-12">
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
              <motion.p className="z-50 font-bold tracking-tighter text-white max-w-4xl text-7xl items-center flex justify-center text-center mb-[80px]">Create, experiment, enjoy: with Applio.</motion.p>
            </div>
            <motion.div className="absolute inset-x-0 flex items-center justify-center z-50" initial={{ bottom: 100, opacity: 0, filter: "blur(5px)" }} animate={{ bottom: 280, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.3, delay: 3.6}}>
            <motion.a onClick={() => setPage(2)} className="bg-black/30 p-3 px-6 rounded-md text-white hover:scale-105 gtransition">
              <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-125 gtransition">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </motion.a>
            </motion.div>
            </div>
          </BackgroundGradientAnimation>
          <Page1 />
        </motion.main>
      )}
      {page === 2 && (
        <motion.main className="relative">
          <BackgroundGradientAnimation>
            <motion.div initial={{ bottom: 100 }} animate={{ bottom: 600 }} transition={{ duration: 1, delay: 1 }} className="absolute top-0 right-0 left-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none">
              <p className="z-50 font-bold tracking-tight md:tracking-tighter pt-10 text-white max-w-4xl text-6xl">Welcome</p>
            </motion.div>
            <motion.div className="absolute inset-0  z-50 flex flex-col items-center justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2 }}>
              <p className="z-50 font-medium text-white max-w-4xl text-2xl pointer-events-none">To begin, choose which installation you want:</p>
              <div className="flex gap-6">
                  <a className="w-80 h-64 bg-black/30 hover:bg-black/60 rounded-[20px] flex items-center justify-center p-4 flex-col shadow-xl gtransition" onClick={() => setPage(3.1)}>
                  <p className="text-white font-bold text-3xl">Easy</p>
                  <p className="text-white text-lg text-center mt-2">We will download a pre-built version of Applio for you, this includes all the features and you will not need to download anything else.</p>
                </a>
                <a className="w-80 h-64 bg-black/10 rounded-[20px] flex items-center justify-center p-4 flex-col shadow-xl gtransition cursor-not-allowed">
                  <p className="text-white font-bold text-3xl">Custom</p>
                  <p className="text-white text-lg text-center mt-2">We will download the official Applio code, install the dependencies and check that it works properly. <strong>It is possible that this option gives errors.</strong></p>
                </a>
              </div>
            </motion.div>
          </BackgroundGradientAnimation>
        </motion.main>
      )}
      {page === 3.1 && (
        <motion.main className="relative">
          <BackgroundGradientAnimation>
            <div className="p-12">
            <h1 className='font-bold tracking-tighter text-white text-6xl z-50'>Downloading...</h1>
            {/* <Download /> Actually not working */}
            </div>
          </BackgroundGradientAnimation>
        </motion.main>
      )}
    </section>
  );
}

export default App;
