import Image from "next/image"
import pic1 from "/public/Images/fpic1.jpg"
import logo from "/public/Images/logo.svg"

export default function Login(){
 return <div>
   <div className="w-[100%] h-[80px] bg-[#f1ede9] shadow-brownie pl-[50px] pt-[10px]"><Image src={logo} alt="pics" className="w-[60px] h-[60px]" /></div>   
    <div className="">
    <Image src={pic1} alt="pics" className="w-[100%px] h-[750px]" />
    <div className="w-[450px] h-[690px] bg-[#efefef] absolute mt-[-720px] ml-[530px] opacity-80 text-center pt-[10px]">
      <p className="text-[#414042] w-[330px] font-[montserrat] ml-[60px]">If you have questions regarding order placement or your product shipment,</p>
      <p className="font-[montserrat] text-[#414042]">please email <span className="text-[#c87b67] underline">order@janeiredale.com</span></p>
      <p className="font-[montserrat] text-[#414042]">or call us at  <span className="text-[#c87b67] underline">800-817-5665.</span></p>
      <p className="text-4xl font-serif text-center mt-[25px] text-[#414042]">Professional Login</p>
      <p className="w-[300px] font-[montserrat] ml-[73px] mt-[10px]">Please sign in below to access OLO, the Pro Site or eLearning.</p>
      <input type="text" placeholder="Email address" className="w-[300px] h-[50px] outline-none px-[16px] font-[montserrat] text-[19px] text-[#414042] border-[#e3e3e3] border-[1px] shadow-gryesh mt-[40px]" />
      <input type="text" placeholder="Password" className="w-[300px] h-[50px] outline-none px-[16px] font-[montserrat] text-[19px] text-[#414042] border-[#e3e3e3] border-[1px] shadow-gryesh mt-[25px]" />
      <button className="w-[300px] h-[50px] bg-[#c87b67] mt-[25px] text-white font-[montserrat]">Login</button>
      <p className="text-[#c87b67] underline font-[montserrat] mt-[20px]">Help</p>
      <p className="w-[280px] font-[montserrat] mt-[25px] ml-[80px]">Interested in carrying jane iredale at your business?</p>
      <p className="font-[montserrat] mt-[15px]"><span className="text-[#c87b67] underline">Email us</span> or call us at <span className="text-[#c87b67] underline">800-817-5665.</span></p>
      <p className="w-[280px] font-[montserrat] mt-[15px] ml-[80px]">Makeup artist looking to work with us? <span className="text-[#c87b67] underline">Click here</span></p>
    </div>
    </div>
    <div className="w-[100%] h-[80px] bg-[#f1ede9] shadow-brownie"></div>  
</div>
}
