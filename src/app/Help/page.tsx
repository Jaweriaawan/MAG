import Image from "next/image"
import background from "/public/Images/banner.jpg"
import { IoSearchOutline } from "react-icons/io5";

export default function help(){
 return <div>
    <Image src={background} alt="pics" className="w-[100%] h-[600px]" />
    <p className="text-white text-5xl font-sans font-semibold mt-[-400px] ml-[300px] absolute">We're here to help!</p>
    <input type="text" placeholder="Search" className="w-[600px] h-[60px] absolute text-slate-400 text-[21px] pl-[62px] focus:outline-none focus:ring-2 focus:ring-[#c77662] rounded mt-[-290px] ml-[215px] font-[montserrat]" />
    <IoSearchOutline className="relative w-[23px] h-[23px] mt-[-272px] ml-[240px] text-slate-400" />
</div>
}