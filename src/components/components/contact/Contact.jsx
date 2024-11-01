import React, {useState, useEffect} from 'react'
import InputField from './InputField';
import InputArea from './InputArea';
import SentSuccess from './SentSuccess';
import SentFailed from './SentFailed';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/firebase';

const logo = <svg xmlns="http://www.w3.org/2000/svg" width={14} fill="#a3e635" viewBox="0 0 512 512">
  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
<path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
const user = <svg xmlns="http://www.w3.org/2000/svg" width={14} fill="#a3e635" viewBox="0 0 448 512">
  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
const destination = <svg xmlns="http://www.w3.org/2000/svg" width={14} fill="#a3e635" viewBox="0 0 512 512">
  {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
<path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z"/></svg>


function Contact({cord}) {
    const [isVisible, setIsVisible] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [sentSuccess, setSentSuccess] = useState(null);
    const [valid, setValid] = useState(false);



    useEffect(() => {
        if(cord > 0.3 && cord <= 1) {
            setIsVisible(true); 
        } else {
            setIsVisible(false)
        } 
    }, [cord]);


    const submitForm = async (e) => {
      e.preventDefault();
      if (email !== '' && name !== '' && text != '') {
        await addDoc(collection(db, 'messages'), {
          name: name,
          lastname: lastname,
          email: email,
          text: text
        }).then((res) => {
          setSentSuccess(true)
        }).catch((err) => {
          setSentSuccess(false)
        })
      }
    }

    useEffect(() => {
      if (email !== '' && name !== '' && text != '') {
        setValid(true)
      } else {
        setValid(false)
      }
    },[name, email, text])

  return (
    <div className={`absolute z-[102] pointer-events-none top-1/2 left-2 right-2 transform -translate-y-1/2 max-w-[40rem] mx-auto border py-3 pl-5 bg-black bg-opacity-40 transition-transform duration-700 mx-3 ${
      isVisible ? 'translate-x-0 opacity-100 visible' : 'translate-y-[250%] opacity-0 invisible'
    }`}>
            {
              sentSuccess === null ? 
              <div className='max-w-[500px] mx-auto'>
                <h2 className='font-bold pb-4 pt-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-lime-400 text-5xl'>Contact</h2>
                <div className='grid grid-cols-2'>
                    <InputField title={"Name"} placeholder={"Johns"} logo={user} update={setName}/>
                    <InputField title={"Lastname"} placeholder={"Johnson"} logo={user} update={setLastName}/>
                    <InputField title={"Email"} placeholder={"Johns@Johnson.com"} logo={logo} update={setEmail}/>
                </div>
                <InputArea title={"Message"} optional={true} placeholder={"Your message..."} logo={destination} update={setText}/>
                <button 
                  className={`rounded-full py-2 px-4 border-2 border-slate-700 pointer-events-auto xs:mx-auto 
                  ${!valid ? 'bg-slate-700 text-gray-400 cursor-not-allowed' : 'hover:bg-gradient-to-r from-green-500 to-lime-400'}
                  disabled:hover:bg-slate-700 disabled:hover:cursor-not-allowed`}
                  disabled={!valid}
                  onClick={(e) => submitForm(e)}>Send</button>
            </div>
            : sentSuccess === true ?
            <SentSuccess/>
            : <SentFailed/>
            }
        {isVisible && <div className="absolute top-1/2 left-0 h-[2px] w-[40rem] bg-white transform translate-y-1/2 -translate-x-[100%]"></div>}
          {isVisible && <div className="absolute top-1/2 right-0 h-[2px] w-[40rem] bg-white transform translate-y-1/2 translate-x-[100%]"></div>}
    </div>
  )
}

export default Contact