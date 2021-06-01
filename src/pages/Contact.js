import React, { useState } from 'react'
import '../components/styles/style.css'
import Navbar from '../components/Navbar'

const Contact = () => {
    const [info, setInfo] = useState({
        name: {
            value: '',
        },
        mail: {
            value: ''
        },
        
        msg: ''
    })
    const [validation, setValidation] = useState({nameMsg: '', mailMsg: ''});
    const checkData = ()=> {
        
        if(info.name.value === ''){
            setValidation({...validation, nameMsg: 'This field is required*'})
        }else if(info.mail.value === ''){
            setValidation({ ...validation, mailMsg: 'This field is required*'})
        }else{
            setValidation({status: '', MailMsg: ''})
            console.log(info)
        }
    }
    
    
    return (
        <div className="">
            <div className="flex flex-row sectional-caption-text w-full service-font">
                <div className="flex  float-right justify-start items-start w-2/4">
                    Contact Me
                </div>
                <div className=" flex justify-end items-end w-2/4">
                    <div className="w-14 float-right mr-20">
                        <Navbar  className="absolute"/>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col justify-center items-center mt-20 py-20 md:flex-row">
                <div className="flex flex-col justify-start items-start text-xl text-gray-600 w-2/4 mb-40 md:px-28">
                    <div className="service-font text-3xl text-gray-600">
                        Find Me
                    </div>
                    <div className="flex justify-start items-start mt-14 w-2/4">
                        <div className="font-bold">Address</div>
                        <br/>
                        <div className="ml-3">
                            #Wennovation Hub ,12 Rev'd Ogunbiyi Street G.R.A Ikeja, Lagos state, Nigeria.
                        </div>
                         
                    </div>
                    <div className="flex justify-start items-start mt-14">
                        <div className=" font-bold">Email</div>
                        <div className="ml-3">daramolapopoola17@gmail.com</div>
                         
                    </div>
                    <div className="flex justify-start items-start mt-14">
                    <div className=" font-bold">Tel No</div>
                    <div className="ml-3">
                        08167370030
                    </div>
                        
                    </div>
                    
                    <div className="mt-20">
                    <button type="button" className="py-3 px-7 float-left bg-green-400 text-white text-2xl service-font rounded shadow-md  hover:shadow-xl">Hire</button>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-2/4">
                    <div className="service-font float-left text-3xl  text-gray-600">
                        Speak With Me
                    </div>
                    <div className="">
                        <form action="" method="POST" >
                       <div className="mt-14">
                           <div className="text-red-500 text-sm">{validation.nameMsg}</div>
                               <input type="text"
                                name="name"
                                value={info.name.value}
                                onChange={e=> setInfo({...info, name: {value: e.target.value}})}
                                placeholder="Name *"
                                className="h-12 w-64 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-green-800 transition duration-300" />
                       </div>
                            <div className="mt-14">
                            <div className="text-red-500 text-sm">{validation.mailMsg}</div>
                                <input type="email"
                                name="email"
                                value={info.mail.value}
                                onChange={e=> setInfo({...info, mail: {value: e.target.value}})}
                                placeholder="Mail *"
                                className="h-12 w-64 border-t-0 border-l-0 border-r-0 border-b-2 focus:border-green-800 transition duration-300" />
                            </div>
                            
                            <div className="mt-14">
                                <textarea className="border-2 shadow-inner rounded focus:border-green-800 transition duration-300" rows="6" cols="40" value={info.msg} onChange={e=> setInfo({...info, msg: e.target.value})} placeholder="Speak with me">
                             
                                </textarea>
                            </div>
                            <div>
                                <button type="button" className="py-4 ml-32 px-10 mt-20 bg-green-400 text-white text-xl service-font rounded-full " onClick={checkData}>
                                    Send
                                </button>
                            </div>
                       </form>  
                       
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default Contact
