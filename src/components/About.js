import React from 'react';

// countup
import CountUp from 'react-countup';

// intersection observer hook
import { useInView } from 'react-intersection-observer';

// motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../variants'; 

import { Link } from 'react-scroll';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
       <div className='flex-1 flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

        {/* text */}
        <motion.div 
         variants={fadeIn('left', 0.7)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}
        className='flex-1'>
     <h2 className='h2 text-accent'>Sobre mim</h2>
<h3 className='h3 mb-4'>Joana Kretzer Brandenburg</h3>
<p className='mb-6 text-justify'>Oi, sou Joana, também conhecida como Joo. Doutora em Teatro pela Universidade do Estado de Santa Catarina, com graduação em Design de Produto. Minha paixão de infância por RPG influenciou minha jornada em atuação, figurino, cenografia e direção de arte.
<br/>
Há mais de duas décadas, sou entusiasta do RPG, atuando como narradora em emocionante campanha com 50+ jogadores (servidor público) e mesas privadas. Crio personagens e enredos compartilhados em redes sociais. Participei de campanhas notáveis como Skyfall, Sufrágio e Instituto Flamel!</p>
      {/* stats */}
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              +{
                inView ? <CountUp start={0} end={20} duration={2} /> : null
              }
            </div>
            <div className='font-primary text-sm'>
              anos<br/>
              de RPG
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              +{
                inView ? <CountUp start={0} end={50} duration={5} /> : null
              }
            </div>
    
            <div className='font-primary text-sm tracking-[2px]'>
              Aventuras <br/>
              Mestradas
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
             +{
                inView ? <CountUp start={0} end={100} duration={10} /> : null
              }
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Personagens <br/>
              Criados
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
            <Link
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
         Contato
        </Link>
            </button>
            <a href='work' className='text-gradient btn-link'>        <Link
          to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[80px] h-[80px] flex items-center justify-center'>
         Serviços
        </Link></a>
          </div>
        </div>
        </motion.div>
              {/* img */}
              <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex flex bg-about bg-no-repeat h-[440px] mix-blend-lighten bg-top'>
        </motion.div>
      </div>
      
      </div>
      
    </section>
  );
};

export default About;
