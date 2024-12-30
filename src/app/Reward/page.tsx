import Image from "next/image"
import pic from "/public/Images/hpic7.jpeg"
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonUp } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";
import { TbBuildingMonument } from "react-icons/tb";
import { PiCake } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import GiveGet from "../Give/page";

export default function Rewards(){
 return <div>
   <Image src={pic} alt="pics" className="w-[1500px]" />
   <div className="absolute mt-[-450px] w-[480px] ml-[180px]">
     <p className="text-4xl text-[#414042] font-serif mb-[30px]">It's time to reward you</p>
     <p className="font-[montserrat] mb-[40px]">As a Beauty Rewards member, you’ll enjoy exclusive benefits and earn points when you shop, discover, connect and share that you can spend on your jane iredale favorites.</p>
     <div className="flex gap-[25px] font-semibold">
        <button className="w-[200px] h-[60px] bg-[#c77662] rounded-[4px] font-[montserrat] text-[18px] text-white hover:opacity-80">JOIN NOW</button>
        <button className="w-[200px] h-[60px] bg-[#efefef] rounded-[4px] font-[montserrat] text-[18px] hover:opacity-80">LOGIN</button>
     </div>
   </div>

    <p className="text-4xl text-[#414042] font-serif mt-[80px] text-center">How it Works</p>
    <div className="w-[75%] h-[200px] ml-[200px] flex gap-[100px] mt-[60px] text-center relative group">
       <div className="w-[300px] h-[200px]">
         <p className="text-8xl font-bold text-[#c77662]">01</p>
         <p className="font-serif text-[25px] text-[#414042]">Sign up</p>
         <p className="font-[montserrat] text-[#414042] w-[200px] ml-[50px]">Create an account and get 25 points.</p>
       </div>

       <div className="w-[300px] h-[200px]">
         <p className="text-8xl font-bold text-[#c77662]">02</p>
         <p className="font-serif text-[25px] text-[#414042]">Earn points</p>
         <p className="font-[montserrat] text-[#414042] w-[200px] ml-[50px]">Earn points every time you shop.</p>
       </div>

       <div className="w-[300px] h-[200px]">
         <p className="text-8xl font-bold text-[#c77662]">03</p>
         <p className="font-serif text-[25px] text-[#414042]">Redeem points</p>
         <p className="font-[montserrat] text-[#414042] w-[200px] ml-[50px]">Redeem points for exclusive discounts.</p>
       </div>
    </div>

      <p className="text-4xl text-[#414042] font-serif mt-[140px] text-center">Ways to Earn Points</p>
    <div className="w-[90%] h-[1250px] ml-[70px] mt-[70px] grid grid-cols-3 gap-[11px]">

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <BsCurrencyDollar className="text-7xl ml-[180px] mb-[20px]" />
             <p className="text-[30px] font-sans">One Poin Per Dollar</p>
             <p className="font-[montserrat] text-[20px]">Make a Purchase</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <IoPersonOutline className="text-7xl ml-[180px] mb-[20px]" />
             <p className="text-[30px] font-sans">25 Points</p>
             <p className="font-[montserrat] text-[20px]">Create an Account</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <BsPersonUp className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">50 Points</p>
             <p className="font-[montserrat] text-[20px]">Complate Your Profile</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <FaRegStar className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">20 Points</p>
             <p className="font-[montserrat] text-[20px]">Write a Review</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <TbBuildingMonument className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">15 Points</p>
             <p className="font-[montserrat] text-[20px]">Take Our Foundation Finder Quiz</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <PiCake className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">Birthday Savings</p>
             <p className="font-[montserrat] text-[20px]">On Your Special Day</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <FiYoutube className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">15 Points</p>
             <p className="font-[montserrat] text-[20px]">Follow Us On Youtube</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <FiFacebook className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">15 Points</p>
             <p className="font-[montserrat] text-[20px]">Follow Us On Facebook</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>

       <div className="w-[440px] h-[400px] bg-[#c77662] relative group rounded-[6px]">
           <div className="group-hover:hidden text-white text-center pt-[100px]">
             <CiInstagram className="text-7xl ml-[180px]" />
             <p className="text-[30px] font-sans">15 Points</p>
             <p className="font-[montserrat] text-[20px]">Follow Us On Instagram</p>
           </div>
           <button className="hidden group-hover:flex w-[200px] h-[50px] pt-[14px] pl-[55px] ml-[110px] mt-[140px] mb-[20px] text-white shadow-brownie border-gray-300 border-[1px]">JOIN NOW</button>
           <p className="hidden group-hover:flex text-white font-[montserrat] ml-[70px] text-[17px]">Already an account holder? Log in</p>
       </div>
    </div>

     <p className="text-4xl text-[#414042] font-serif mt-[200px] mb-[10px] text-center">How to Use Your Points</p>
     <p className="font-[montserrat] text-[23px] text-center mb-[100px]">Redeem earned points for a savings in your shopping cart.</p>
     <div className="w-[70%] h-[200px] flex ml-[200px] mb-[100px] gap-[82px]">

         <div className="w-[200px] h-[200px] text-center pt-[45px]">
            <p className="text-6xl text-[#c77662]">$5</p>
            <p className="text-[23px] text-[#414042]">100 points</p>
         </div>

         <div className="w-[200px] h-[200px] text-center pt-[45px]">
            <p className="text-6xl text-[#c77662]">$10</p>
            <p className="text-[23px] text-[#414042]">200 points</p>
         </div>

         <div className="w-[200px] h-[200px] text-center pt-[45px]">
            <p className="text-6xl text-[#c77662]">$25</p>
            <p className="text-[23px] text-[#414042]">500 points</p>
         </div>

         <div className="w-[200px] h-[200px] text-center pt-[45px]">
            <p className="text-6xl text-[#c77662]">$50</p>
            <p className="text-[23px] text-[#414042]">1000 points</p>
         </div>
     </div>

     <GiveGet />
 </div>
}