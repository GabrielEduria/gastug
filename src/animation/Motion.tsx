'use client';
import { motion } from "motion/react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Motion({ children }: { children: any}){
    return(
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
        {children}
      </motion.div>   
    )
}
