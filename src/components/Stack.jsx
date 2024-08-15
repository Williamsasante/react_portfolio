import {RiReactjsLine} from "react-icons/ri";
import {DiPhp} from "react-icons/di";
import {DiLaravel} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaHtml5} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import { motion } from "framer-motion"




const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,  
      repeatType: "reverse",
    },
  },
});



const Stack = () => {
  return <div className="border-neutral-800 pb-24">
    <h2 className="y-20 text-center text-4xl">Tech <span className="text-cyan-900">Stack</span></h2>
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className="flex flex-wrap tems-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-neutral-800 py-4">
            <RiReactjsLine className="text-7xl text-cyan-300"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-neutral-800 py-4">
        <DiPhp className="text-7xl text-[#4F5B93]" />

        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-neutral-800 py-4">
            <DiLaravel className="text-7xl text-red-600"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-neutral-800 py-4">
        <DiMysql className="text-7xl text-[#00758F]" />
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-neutral-800 py-4">
        <BiLogoPostgresql className="text-7xl"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-neutral-800 py-4">
        <FaHtml5 className="text-7xl" style={{ color: '#E34F26' }}/>
        </motion.div>

        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-neutral-800 py-4">
             <FaPython className="text-7xl" style={{ color: '#306998' }} />
        </motion.div>
    </motion.div>
  </div>
}

export default Stack
