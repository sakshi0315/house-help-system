import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";

import { motion } from "framer-motion";

function Landing() {
 return (
  <>
   <Navbar />

   <section
    className="
    hero-bg
    min-h-screen"
   >
    <div
     className="
     max-w-7xl
     mx-auto
     px-6
     py-20
     grid
     md:grid-cols-2
     gap-10
     items-center"
    >
     <div>

      <motion.h1
       initial={{
        opacity:0,
        y:40
       }}
       animate={{
        opacity:1,
        y:0
       }}
       className="
       text-6xl
       font-bold
       leading-tight"
      >
        Book Home Services

        <span
         className="
         block
         gradient-text"
        >
          Within 15 Minutes
        </span>
      </motion.h1>

      <p
       className="
       mt-6
       text-gray-600
       text-lg"
      >
        Verified helpers,
        live tracking,
        secure payments
        and instant auto assignment.
      </p>

      <div
       className="
       flex
       gap-4
       mt-8"
      >
       <Button>
        Book Service
       </Button>

       <button
        className="
        px-6
        py-4
        rounded-2xl
        border"
       >
        Watch Demo
       </button>
      </div>
     </div>

     <div
      className="
      flex
      justify-center"
     >
      <motion.div
       animate={{
        y:[0,-20,0]
       }}
       transition={{
        duration:4,
        repeat:Infinity
       }}
       className="
       w-[450px]
       h-[450px]
       rounded-full
       bg-gradient-to-r
       from-blue-600
       to-teal-500
       shadow-2xl"
      />
     </div>
    </div>
   </section>

   <section
    className="
    py-20"
   >
    <div
     className="
     max-w-7xl
     mx-auto
     grid
     md:grid-cols-4
     gap-6"
    >
      {[
        "Cleaning",
        "Cooking",
        "Laundry",
        "Plumbing"
      ].map(item=>(
       <div
        key={item}
        className="
        bg-white
        rounded-3xl
        p-8
        shadow-xl"
       >
        <h3
         className="
         font-bold
         text-xl"
        >
          {item}
        </h3>
       </div>
      ))}
    </div>
   </section>

   <Footer />
  </>
 );
}

export default Landing;