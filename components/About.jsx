import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600' >I am not your normal developer</p>
                <p className='py-2 text-gray-600'> I am Will Mendez Computer Engineering student, with great interest in Artificial Intelligence and 
                    Software development. With the ability to learn and apply my knowledge to the professional field.
                     Looking for an opportunity to develop my skills and gain experience.
                </p>
                <p className='py-2 text-gray-600'> I have been speed the last 4 years Studing Computindg Engineer, 
                    and be building some projects in the school, like 
                    User Interface, API's, Apps in Android Studio, some little projects 
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
