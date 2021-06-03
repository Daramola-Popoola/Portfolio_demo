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
        <div className=" bg-gray-50 py-10">
            <div className="flex flex-row sectional-caption-text w-full service-font md:text-5xl">
                <div className="flex  float-right justify-start items-start w-2/4">
                    Contact <span>&nbsp;Me</span>
                </div>
                <div className=" flex justify-end items-end w-2/4">
                    <div className="w-14 float-right mr-0 md:mr-20">
                        <Navbar  className="absolute"/>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col shadow-lg bg-white mt-20 py-20 md:flex-row">
                <div className="flex flex-col text-xl text-gray-600 w-2/4 mb-40 ml-20  px-0 md:px-28 md:ml-0">
                    <div className="flex service-font text-3xl justify-center items-start text-gray-600 md:justify-start">
                        Find Me
                    </div>
                    <div className="flex justify-start items-start mt-14">
                        <div className="font-bold hidden md:inline">Address</div>
                        <div className="ml-3 text-sm md:text-base">
                            #Wennovation Hub ,12 Rev'd Ogunbiyi Street G.R.A Ikeja, Lagos state, Nigeria.
                        </div>
                         
                    </div>
                    <div className="flex justify-start items-start mt-14">
                        <div className=" font-bold hidden md:inline">Email</div>
                        <div className="ml-3 text-sm md:text-base">daramolapopoola17@gmail.com</div>
                         
                    </div>
                    <div className="flex justify-center items-start mt-14 md:justify-start">
                    <div className=" font-bold hidden md:inline">Tel No</div>
                    <div className="ml-3 text-sm md:text-base">
                        08167370030
                    </div>
                        
                    </div>
                    
                    <div className="mt-20">
                    <button type="button" className="py-3 px-7 float-left bg-green-400 text-white text-2xl service-font rounded shadow-md  hover:shadow-xl ml-12 md:ml-0">
                        Hire
                    </button>
                    </div>
                </div>
                <div className="flex flex-col justify-start w-2/4 ml-10 md:ml-0">
                    <div className="service-font text-2xl md:text-3xl text-center  text-gray-600 float-none md:float-left">
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
                                className="h-12 w-64 border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:border-green-600 transition duration-300" />
                       </div>
                            <div className="mt-14">
                            <div className="text-red-500 text-sm">{validation.mailMsg}</div>
                                <input type="email"
                                name="email"
                                value={info.mail.value}
                                onChange={e=> setInfo({...info, mail: {value: e.target.value}})}
                                placeholder="Mail *"
                                className="h-12 w-64 border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:border-green-600 transition duration-300" />
                            </div>
                            
                            <div className="mt-14">
                                <textarea className="border-2 shadow-inner outline-none rounded focus:border-green-600 transition duration-300" rows="6" cols="37" value={info.msg} onChange={e=> setInfo({...info, msg: e.target.value})} placeholder="Speak with me">
                             
                                </textarea>
                            </div>
                            <div>
                                <button type="button" className="py-4  px-10 mt-20 bg-green-400 shadow-md hover:shadow-xl text-white text-xl service-font rounded outline-none outliner ml-20 md:ml-32" onClick={checkData}>
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
