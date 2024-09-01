import React from "react";
import { SvgHoc } from "./SvgHoc";
import { motion } from "framer-motion";
function CloudySvg({width='25px',height='25px'}) {
    
    return (
        <>

    <svg fill="#FFFFFF" width={width} height={height} viewBox="-0.4 -1.5 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
   
    <motion.path 
        stroke={'white'}
                        strokeWidth={0.5}
                        initial={{
                            pathLength: 0,
                            opacity: 0.5,
                            fill: 'transparent',
                        }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                            fill: 'whitesmoke', 
                          
                            y:[0,-5, 0]
                        }}
                        transition={{
                            default:{ duration: 2, ease: 'easeInOut'},                         
                   
                            y: {  duration: 2, ease: 'easeInOut'},
                        
                        }}
                        fill={'#FFFFFE'}
    
    d="M27.873 28c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070s0.649-8.743-7.361-9.74c-6.865-0.701-8.954 5.679-8.954 5.679s-2.068-1.988-4.873-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.577 1.084-5.577 6.768c0.125 5.677 6.057 5.734 6.057 5.734"></motion.path>
    </svg>
        </>
    )
}

export default SvgHoc(CloudySvg) ;