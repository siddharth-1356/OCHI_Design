import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {

  return (  
    <div className='w-full h-screen bg-zinc-900 pt-1'>
<div className='textstructure mt-52 px-20'>
    {["We Create","Eye Opening","Presentations"].map((item,index)=>{
        return  <div className='masker'>
            <div className="w-fit flex">
{index === 1 && (<motion.div initial={{width:0}}animate={{width:"9vw"}}
className="w-[7vw] h-[5.5vw] mt-2 bg-red-500 border-[1px] border-zinc-400 font-light text md uppercase rounded-full" ></motion.div>) }
        <h1 className=" uppercase text-[7.5vw] leading-[6.3vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
            {item}
            </h1> 
            </div>
            </div>
    
    })}    
<div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20 gap-11">
    {["For public and private companies","From the first pitch to IPO "].map((item,index)=><p className="text-md font-light tracking-tight leading-none">{item}</p>)}
<div className="start">
    <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text md uppercase rounded-full"> start the project</div>
</div>
</div>
   
    </div> 
    </div>
  )
}

export default LandingPage