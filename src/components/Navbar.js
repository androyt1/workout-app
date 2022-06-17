import React,{useState} from 'react'
import { exerciseOptions,fetchExercises } from '../util/axiosClient'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-[#020307] font-gent'>           
                <nav className='w-full h-full  flex justify-between items-center px-3 md:px-5'>
                    <span className='text-md text-slate-50 font-bold'>Exercise App</span>
                    <ul>
                        <li className='text-sm text-slate-50 inline-block mr-4 font-gent'>Home</li>
                        <li className='text-sm text-slate-50 inline-block mr-4 font-gent'>About</li>
                    </ul>
                </nav>         
    </div>
  )
}

export default Navbar