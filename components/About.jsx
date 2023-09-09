import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Perfil.jpg';
export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600' >I am not your normal developer</p>
                <p className='py-2 text-gray-600'> I am a Computer Engineer, passionate about artificial intelligence and software development. 
                  I have demonstrated my ability to design and develop efficient web and mobile applications, reducing processing times and improving data management.
                  I have also participated in the team development of a Rappi-type sales software, contributing my skills in the design of the architecture and the implementation of key functionalities. 
                  I am always looking for new challenging and collaborative projects where I can apply my knowledge.
                </p>
                <p className='py-2 text-gray-600'> I have been speed the last 5 years Studing Computindg Engineer, 
                    and be building some projects in the school, like 
                    User Interface, API&apos;s, Apps in Android Studio, some little projects 
                    from IA, and something else.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'> You can Check my own Projects on my GH</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        </div>
    </div>
  )
}
export default About;
