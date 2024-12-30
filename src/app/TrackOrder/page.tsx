import Image from "next/image"
import banner from "/public/Images/banner2.jpg"
import pic from "/public/Images/shipping3.webp"

export default function OrderTracking(){
 return <div>
   <Image src={banner} alt="pics" className="w-full h-[600px]"/>
   <div className="w-[480px] h-[580px] bg-transparent border-[1px] rounded relative mt-[-590px] ml-[900px] font-[montserrat] pt-[80px] pl-[60px]">
     <p className="mb-[10px] font-semibold">Order Number</p>
     <input type="text" className="w-[350px] h-[45px] mb-[25px] outline-none pl-[10px] bg-[#efefef] border-[1px] border-gray-400" />
     <p className="mb-[10px] font-semibold">Email Address</p>
     <input type="text" className="w-[350px] h-[45px] mb-[10px] outline-none pl-[10px] bg-[#efefef]  border-[1px] border-gray-400" />
     <p className="ml-[170px] mb-[10px]">or</p>
     <p className="font-semibold">Tracking Number</p>
     <input type="text" className="w-[350px] h-[45px] outline-none pl-[10px] bg-[#efefef]  border-[1px] border-gray-400" />
     <button className="w-[350px] h-[50px] mt-[20px] bg-[#c77662] mb-[15px] text-white font-semibold">TRACK YOUR ORDER</button>
     <p className="text-[#c77662]">Powered by Malomo</p>
   </div>

   <div className="w-full h-[500px] mb-[100px] mt-[50px]">
      <div className="flex font-[montserrat]">
      <Image src={pic} alt="pics" className="w-[700px] h-[500px]" />
        <div className="font-[montserrat] mt-[140px] ml-[70px]">
          <p className="text-[40px] font-sans mb-[25px]">Give $30, Get $30</p>
          <p className="w-[600px] mb-[25px]">Give your friends $30 off their first order of $50 and get $30 (600 Points) for each successful referral.</p>
          <button className="w-[250px] h-[50px] bg-[#c77662] font-semibold text-white">REFER A FRIEND</button>
        </div>
      </div>
   </div>
     <p className="text-5xl text-[#414042] font-serif text-center mb-[80px]">Join us on Instagram @janeiredale</p>
 </div>
}