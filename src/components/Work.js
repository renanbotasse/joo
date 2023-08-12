import React from 'react';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between'>
            <h2 className='h2 leading-tight text-accent'>
              Serviços <br />

            </h2>
            <p className='max-w'>
              Se você quiser participar das aventuras que eu crio, você participar do meu servidor de RPG (gratuito), se juntar ao grupo no Telegram das Mesas Privadas ou uma mentoria para criação de personagens ou campanhas, 
            </p>
            <button className='btn btn-sm'> <a href='https://linktr.ee/jooanadart'> Veja todos meus links</a></button>
        {/* image1 */}
        
        <div
          className='group relative overflow-hidden border-2 border-white/50 border-radius[10px] rounded-xl'>  
        <a href='https://discord.com/invite/sfAKtkGNjQ'>
          {/* overlay1 */}
         
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
      
          </div>
          {/* img1 */}
          
          <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
           {/* pretitle1 */}
          <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Aszor: Capítulo Rosa dos Tempos</span>        
          </div>
         
          {/* title1 */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Servidor no Discord para jogar RPG (Gratuito)</span>
          </div>
          </a> 
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-between'>
        {/* image2 */}
        <div className='group relative overflow-hidden border-2 border-white/50 border-radius[10px] rounded-xl'>
          {/* overlay2 */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img2 */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
          {/* pretitle2 */}
          <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Mesas Privadas</span>
          </div>
          {/* title2 */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Grupo do Telegram em que organizamos as mesas privadas</span>
          </div>
        </div>
        {/* image3 */}
        <div className='group relative overflow-hidden border-2 border-white/50 border-radius[10px] rounded-xl'>
          {/* overlay3 */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img3 */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
          {/* pretitle3 */}
          <div className='absolute -bottom-full left-12 group-hover:top-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Mentoria</span>
          </div>
          {/* title3 */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Criar personagens, enredos ou desenvolver mesas</span>
          </div>
        </div>
      </motion.div>
    </div>
    </div >
    </section >
  );
};

export default Work;
