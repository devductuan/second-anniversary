import React from 'react'
import { motion } from "framer-motion";

type Props = {
    children: any
}

function SpringLayout({ children }: Props) {
    return (
        <motion.div
            initial={{ x: '-120%', rotate: 45, y: 50 }}
            animate={{ x: 0, y: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.25, stiffness: 50, }}
        >
            {children}
        </motion.div>
    )
}

export default SpringLayout