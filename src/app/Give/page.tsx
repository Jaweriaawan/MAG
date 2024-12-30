import Image from "next/image"
import pic from "/public/Images/banner3.jpg"

export default function GiveGet(){
 return <div className="flex">
   <div className="w-[800px] h-[700px] bg-[#efefef] font-[montserrat] text-[#414042] pt-[100px]">
      <p className="text-[20px] mb-[60px] ml-[300px]">Refer a Friend</p>
      <p className="text-4xl text-[#c77662] font-medium mb-[20px] ml-[220px]">Give $30, Get $30</p>
      <p className="text-[20px] w-[630px] text-center mb-[40px] ml-[80px]">Give your friends $30 off their first order of $50 and get $30 (600 Beauty Rewards points) for each successful referral.</p>
      <input type="email" placeholder="Enter Your Email Address" className="w-[590px] h-[55px] mb-[90px] ml-[90px] rounded pl-[20px] outline-none border-[1px] border-gray-300 active:border-[#c77662]" /><br />
      <button className="w-[300px] h-[50px] text-white bg-[#c77662] text-[20px] text-center ml-[225px]">NEXT</button>
   </div>
   <Image src={pic} alt="pics" className="w-[700px]" />
</div>
}