'use client'
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";




interface INavbarProps{
    className?: string
}

export default function Tarja(props:INavbarProps){
    
    return(
        <div className={`hidden w-[100vw] px-5  text-[.9rem] h-[3.5rem] bg-gray-900 lg:flex items-center text-white justify-between`}>
            <ul className="flex gap-10 text-white">
                <li className="flex gap-2">
                 8:00- 20:00 (TODOS OS DIAS)
                </li>
                <li className="flex gap-2">
                +455 91 875990000 /98 76688 8999
                </li>
                <li className="flex gap-2">
                 gramsaconsultoria@gmail.com
                </li>
                
            </ul>
             <div  className="flex gap-2 pr-4 text-white items-center text-[1.2rem]">
            <span className="text-[1rem]"> Redes sociais:</span>
            <Link href="/">            
                 <FaInstagram/>
            </Link> 
            <Link href="/">            
                 <AiOutlineLinkedin/>
            </Link> 
            <Link href="/">            
                 <MdOutlineFacebook/>
            </Link> 
            </div>
        </div>
    )}