import { motion } from "framer-motion";

function Button({
 children
}) {
 return (
  <motion.button
   whileHover={{
    scale:1.05
   }}
   whileTap={{
    scale:0.95
   }}
   className="
   px-7
   py-4
   rounded-2xl
   bg-blue-600
   text-white
   font-semibold
   shadow-xl"
  >
   {children}
  </motion.button>
 );
}

export default Button;