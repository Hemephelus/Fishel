import React from 'react'
import AboutImg from '../assets/About.png'

const About = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className="about-details text-start px-[70px] pt-28">
        <h1 className='text-3xl text-[#0C4A5A] font-bold'>About Us</h1>
            <p className='text-[24px] text-[#353C3E] pt-10 font-["Nunito"] font-semibold'>
            Fishel is an exam and test question bank site. We help teacher generate questions for exams or test and allow them to print them offline.
            <br />We also provide a platform that can allow teacher to host their exams and test online.
            <br /> With the use of artificial intelligence, we allow teachers to automatically mark students script on our platform.
            </p>
        </div>
        <div className="image">
            <img src={AboutImg} alt="" />
        </div>
    </div>
  )
}

export default About