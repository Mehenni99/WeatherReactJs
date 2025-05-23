import React from "react";
import { motion } from "framer-motion";
function DefaultWeather({width='250px', height='250px'}) {
    return (
        <>
<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width={width} height={height} viewBox="0 0 582.486 582.486"
	 xmlSpace="preserve">
<g>
	<g>
		<motion.path
        stroke={'white'}
        strokeWidth={4}
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            ease:'easeIn'
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
        }}
        
        
        
        fill='yellow'
        d="M385.584,343.002c2.131,0.113,4.275,0.172,6.436,0.172c67.018,0,121.348-54.331,121.348-121.348
			s-54.33-121.347-121.348-121.347c-65.998,0-119.652,52.699-121.271,118.309c24.874,8.538,47.735,22.562,67.015,41.497
			C361.252,283.356,377.58,311.86,385.584,343.002z"/>
		<motion.polygon fill= 'yellow'
        initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            y:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            y: {  duration: 2, ease: 'easeInOut'},
        
        }}
        
        points="426.107,84.713 392.02,31.359 357.928,84.713 		"/>
		<motion.polygon 
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            y:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            y: {  duration: 2, ease: 'easeInOut'},
        
        }}
        fill= 'yellow' points="529.133,255.917 582.486,221.829 529.133,187.741 		"/>
		<motion.path 
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            x:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            x: {  duration: 2, ease: 'easeInOut'},
        
        }}
        fill= 'yellow' d="M254.904,187.741l-33.789,21.588c11.497,0.536,22.797,2.167,33.789,4.826V187.741z"/>
		<motion.polygon 
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            y:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            y: {  duration: 2, ease: 'easeInOut'},
        
        }}
        fill= 'yellow' points="464.869,100.769 513.076,148.977 526.699,87.146 		"/>
		<motion.polygon 
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            y:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            y: {  duration: 2, ease: 'easeInOut'},
        
        }}
        fill= 'yellow' points="513.076,294.678 464.869,342.889 526.699,356.508 		"/>
		<motion.polygon 
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'yellow',       
            y:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            y: {  duration: 2, ease: 'easeInOut'},
        
        }}
        fill= 'yellow' points="270.96,148.977 319.168,100.769 257.337,87.146 		"/>
		<motion.path
        stroke={'white'}
        strokeWidth={4}
         initial={{
            pathLength: 0,
            opacity: 0.5,
            fill: 'transparent',
        }}
        animate={{
            pathLength: 1,
            opacity: 1,
            fill: 'skyblue',       
            x:[0,-5, 0]
        }}
        transition={{
            default:{ duration: 2, ease: 'easeInOut'},                         
   
            x: {  duration: 2, ease: 'easeInOut'},
        
        }}
        
        
        fill='skyblue' d="M436.545,362.426c-4.504,0-8.928,0.326-13.262,0.938c-17.891,2.521-34.17,10.059-47.371,21.146
			c-0.172-8.707-1.047-17.242-2.531-25.564c-1.09-6.117-2.539-12.104-4.289-17.963c-14.477-48.495-50.836-87.513-97.648-105.601
			c-5.382-2.081-10.899-3.892-16.539-5.4c-13.482-3.605-27.641-5.561-42.265-5.561c-2.268,0-4.517,0.08-6.763,0.172
			c-87.079,3.549-156.592,75.233-156.592,163.181c0,16.686,2.515,32.781,7.163,47.943C25.166,436.412,0,461.938,0,493.393
			c0,31.885,25.851,57.734,57.736,57.734H212.64h7.041h216.864c52.109,0,94.35-42.242,94.35-94.348S488.654,362.426,436.545,362.426
			z"/>
	</g>
</g>
</svg> </>    
    )
}

export default DefaultWeather;