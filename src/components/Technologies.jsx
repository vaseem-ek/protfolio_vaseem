import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const iconVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Technologies() {
    return (
        <div className='pb-24'>
            <motion.h2
            initial={{opacity:1,y:0}}
            whileInView={{opacity:1,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div  initial={{opacity:1,y:0}}
            whileInView={{opacity:1,y:-100}}
            transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4 '>
                <motion.div
                initial='Initial'
                animate="animate"
                variants={iconVarients(2.5)}
                >
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                initial='Initial'
                animate="animate"
                variants={iconVarients(3)} className='p-4'>
                    <TbBrandNodejs className='text-7xl  text-green-400' />
                </motion.div>
                <motion.div 
                initial='Initial'
                animate="animate"
                variants={iconVarients(5)} className='p-4'>
                    <SiMongodb className='text-7xl  text-cyan-400' />
                </motion.div>
                <motion.div 
                initial='Initial'
                animate="animate"
                variants={iconVarients(2)} className='p-4'>
                    <SiExpress className='text-7xl  text-green-400' />
                </motion.div>
                <motion.div 
                initial='Initial'
                animate="animate"
                variants={iconVarients(6)} className='p-4'>
                    <TbBrandNextjs className='text-7xl  text-cyan-400' />
                </motion.div>
                <motion.div
                initial='Initial'
                animate="animate"
                variants={iconVarients(2.5)} className='p-4'>
                    <BiLogoPostgresql className='text-7xl  text-green-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
