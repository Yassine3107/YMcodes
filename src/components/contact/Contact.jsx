'use client'

import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import InputArea from '../common/InputArea'
import InputFieldName from '../common/InputFieldName'
import InputFieldEmail from '../common/InputFieldEmail'
import NeonButtonUp from '../common/NeonButtonUp'
import { useInView } from 'react-intersection-observer'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/app/firebase'
import SentFailed from './SentFailed'
import SentSuccess from './SentSuccess'

function Contact() {
 
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [text, setText] = useState(null)
  const [sentSuccess, setSentSuccess] = useState(null)

  const { ref: contactRef, inView: visible } = useInView({
    threshold: .2,
    triggerOnce: true
  });

  const submitForm = async (e) => {
    e.preventDefault();

    if (email !== '' && name !== '' && text != '') {
      await addDoc(collection(db, 'messages'), {
        name: name,
        email: email,
        text: text
      }).then((res) => {
        console.log('success: ', res)
        setSentSuccess(true)
      }).catch((err) => {
        console.log('error: ', err)
        setSentSuccess(false)
      })
    }
  }



  return (
    <div id='contact' className='flex flex-col relative items-center justify-evenly w-full min-h-screen'>
      <div className='lgt:w-3/6'>
        <Title title="Contact"/>
      {
        sentSuccess === null ?
        <div ref={contactRef} className={`flex flex-col justify-center mx-auto 2xl:w-[70%] contact ${visible ? 'contactShow' : 'contactHidden'}`} >
          <div className='mb-2 p-4'>
            <strong className='text-blue-500 text-xl'>Do you have a question? <br></br>Contact me.</strong>
          </div>

          <InputFieldName placeholder="Name" onFormChange={setName}/>
          <InputFieldEmail placeholder="Email" onFormChange={setEmail}/>
          <InputArea placeholder="Your message" onFormChange={setText}/>
          <button className={`w-[200px] mx-4 smt:mx-1 rounded-lg border-[3px] cyberpunk-button text-xl font-bold relative z-50 border-2 border-[#3B82F6] text-[#3B82F6] hover:text-white py-3 px-8 transition-all duration-300  shadow-lg shadow-blue-500/50 hover:shadow-blue-500/100`}   
            onClick={(e) => {
              console.log(text, name, email);
              submitForm(e)
            }}>
            Submit
          </button>
        </div>
        : sentSuccess === true ?
        <SentSuccess/>

        : 
        <SentFailed/>
        }
      </div>
      <div className='flex justify-center mx-auto relative smt:hidden z-[61]'>
        <NeonButtonUp text="Home" section="about"/>
      </div>
    </div>


  )
}

export default Contact