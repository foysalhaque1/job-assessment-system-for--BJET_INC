import React from 'react';

import { motion } from "motion/react"
import img1 from '../../assets/Cyan And Blue Colorful Illustrative Coding YouTube Thumbnail .png'
import img2 from '../../assets/Blue Modern Futuristic Top Programming Language Youtube Thumbnail.png'
import FeatureSection from './FeatureSection';
import Faq from './Faq';
import Faq2 from './Faq2';


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen mt-3.5 w-11/12 mx-auto">
                <div className="hero-content  grid grid-cols-1 md:grid-cols-2">

                    <div className='flex-1'>
                        {/* <motion.h1
                       animate={{rotate:180,
                        transition:{duration:4}
                       }}
                       className="text-5xl font-bold flex-1">Latest <motion.span
                       animate={{color:['#1cbb28','#ee3611'],transition:{duration:2,repeat:Infinity}}}
                       
                       >jobs</motion.span>  for you</motion.h1> */}
                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, transition: { duration: 4 } }}
                            className="text-5xl font-bold">A website  <motion.span
                                animate={{ color: ['#1cbb28', '#ee3611', '#1139ee'], transition: { duration: 2, repeat: Infinity } }}

                            >that works</motion.span>, a team that collaborates</motion.h1>
                        <p className="py-6">
                            A web development group assignment typically involves students collaborating to create a website or web application.
                        </p>
                       
                    </div>
                    <div className='flex-1'>

                        <motion.img

                            src={img1}
                            animate={{ y: [-50, 150, -50] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="md:max-w-2xl max-w-2xs rounded-t-4xl border-s-8 shadow-2xl flex-1"
                        />
                        <motion.img

                            src={img2}
                            animate={{ x: [30, 50, -30],y: [-150]  } }
                            transition={{ duration: 10, repeat: Infinity }}
                            className="md:max-w-2xl max-w-2xs rounded-t-4xl border-s-8 shadow-2xl flex-1"
                        />
                    </div>
                    
                </div>
            </div>
            <FeatureSection></FeatureSection>

            
            
            
        </div>
    );
};

export default Banner;