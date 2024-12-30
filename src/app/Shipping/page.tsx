import Image from "next/image"
import pic1 from "/public/Images/shipping1.webp"
import pic2 from "/public/Images/shippin2.webp"

import App from "@/app/components/Dropdown"

export default function Shipping(){
 return <div>
  <p className="text-4xl text-[#414042] font-serif mt-[60px] mb-[100px] text-center">Shipping & Returns</p>
  <App />
  <div className="w-[1350px] h-[600px] mt-[70px] mb-[30px] ml-[72px] flex justify-between">
      <div className="w-[750px] h-[500px]">
        <Image src={pic1} alt="pics" className="w-[650px]" />
        <p className="text-[#414042] text-[40px] font-serif ml-[40px] mt-[20px]">Beauty Tips</p>
        <p className="font-[montserrat] mt-[20px] ml-[40px]">Learn how to use our products in more ways than one!</p>
        <p className="font-[montserrat] text-[#c77662] ml-[40px]">View our video tutorials</p>
      </div>
      <div className="w-[700px] h-[570px]">
        <Image src={pic2} alt="pics" className="w-[700px]" />
        <p className="text-[#414042] text-[40px] font-serif ml-[40px] mt-[20px]">The jane iredale Difference</p>
        <p className="font-[montserrat] mt-[20px] ml-[40px]">We use the highest quality ingredients available to ensure satisfaction with performance and coverage.</p>
        <p className="font-[montserrat] text-[#c77662] ml-[40px]">Learn what makes our makeup special</p>
      </div>
  </div>
</div>
}