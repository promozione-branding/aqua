"use client"

import { motion } from "framer-motion";
import { Factory, Boxes, PencilRuler, Building2, Play } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function AboutSection() {
  const features = [
    { icon: <Factory className="w-8 h-8 text-blue-600" />, title: "Advanced", subtitle: "Manufacturing Unit" },
    { icon: <Boxes className="w-8 h-8 text-blue-600" />, title: "Modern Moulding", subtitle: "Technology" },
    { icon: <PencilRuler className="w-8 h-8 text-blue-600" />, title: "In-house Design", subtitle: "& R&D Team" },
    { icon: <Building2 className="w-8 h-8 text-blue-600" />, title: "Large Production", subtitle: "Capacity" },
  ];

  return (
    <motion.section
      className="py-0 bg-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      
      <div className="w-full relative">
         <svg className="absolute opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L60,170.7C120,149,240,107,360,80C480,53,600,43,720,53.3C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="max-w-7xl relative mx-auto px-6">
         
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={leftVariant} className="relative overflow-hidden rounded-lg">
            <motion.img
              src="/9.png"
              alt="Crystal Impex Factory"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ scale: [1,1.08,1] }} transition={{ duration:2, repeat:Infinity }}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white ml-1"/>
                </div>
              </motion.div>
            </motion.button>
          </motion.div>

          <motion.div variants={rightVariant}>
            <motion.p variants={fadeUp} className="text-base rounded-3xl font-semibold uppercase tracking-widest text-white mb-2 bg-blue-700 w-fit px-3 py-2">About JNJ AQUA</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-gray-900 leading-tight">
              Manufacturer of Premium<br/>RO Cabinets & Spare Parts
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-black leading-7">
              JNJ Aqua is a leading manufacturer of high-quality RO Cabinets and Spare Parts. With advanced technology, modern infrastructure and strict quality control, we deliver products that ensure purity, reliability and long-lasting performance.
            </motion.p>

            <motion.div variants={container} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
              {features.map((item,index)=>(
                <motion.div key={index} variants={cardVariant} whileHover={{y:-8,scale:1.05}} className="text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
              transition={{delay:0.6}} whileHover={{scale:1.05}}
              className="relative mt-10 inline-flex items-center gap-3 overflow-hidden bg-blue-700 px-8 py-4 rounded-md font-medium text-white">
              <motion.div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                animate={{x:["-100%","400%"]}}
                transition={{duration:2,repeat:Infinity,ease:"linear"}}/>
              <span className="relative z-10">KNOW MORE ABOUT US</span>
              <motion.span className="relative z-10 text-lg"
                animate={{x:[0,5,0]}}
                transition={{duration:1,repeat:Infinity}}>→</motion.span>
            </motion.button>
   
          </motion.div>
          
        </div>
                 
      </div>
      </div>

      
    </motion.section>
  );
}
