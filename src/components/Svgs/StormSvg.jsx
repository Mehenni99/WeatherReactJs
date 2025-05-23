import React from "react";
import { SvgHoc } from "./SvgHoc";
import { motion } from "framer-motion";
function StormSvg({width='25px', height='25px'}) {
    return (
        <>
      <svg width={width} height={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g >
        <motion.path fill="white" d="M8.56.084C6.672.085 5.068 1.249 4.301 2.912l-.055.113-.121.01C2.38 3.162 1 4.672 1 6.508 1 8.427 2.5 10 4.357 10h8.125C13.874 10 15 8.818 15 7.385c0-1.087-.653-2-1.578-2.393l-.121-.05-.01-.13C13.172 2.194 11.115.086 8.562.084zm0 1c2.004.001 3.635 1.652 3.731 3.773v.016l.06.748.677.291v.002c.57.242.973.785.973 1.47 0 .91-.692 1.616-1.518 1.616H4.36C3.069 9 2 7.905 2 6.508c0-1.334.988-2.388 2.198-2.477l.705-.049.305-.648v-.002c.618-1.343 1.872-2.247 3.351-2.248z" font-family="sans-serif" font-weight="400" overflow="visible" />
        <motion.path 
         
         initial={{
            opacity:0
         }}
        animate={{
opacity:1,
y:[0,0.5,0]
        }}
        transition={{duration:4}}
        fill="yellow" d="M6.67 9l-.26 3.5h1.613l-.38 3.5 2.767-5H8.5l.324-2z"/>
    </g>
</svg>
        </>
    )
}

export default SvgHoc(StormSvg);