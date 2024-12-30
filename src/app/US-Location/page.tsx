import Image from "next/image"
import map from "/public/Images/map1.jpg"
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import pic1 from "/public/Images/pic16.jpg"
import pic2 from "/public/Images/pic17.jpg"
import pic3 from "/public/Images/pic18.jpg"

export default function Locatin(){
 return <div>
    <p className="text-4xl text-[#414042] font-serif mt-[30px] ml-[50px]">Find a Location - United States</p>
    <p className="font-[montserrat] mt-[10px] mb-[18px] ml-[50px]">Don't live in the United States? Check out our <span className="text-[#c77662] underline">international locations</span> page.</p>
    <div className="w-[90%] h-[600px] ml-[50px] flex">
      <div><Image src={map} alt="pics" className="w-[900px]" /></div>
      <div className="flex gap-[20px] pl-[50px]">
       <input type="text" placeholder="Type a postcode or address" className="w-[300px] h-[40px] pl-[15px] outline-none border-[1px] font-[montserrat] border-gray-400" />
       <div className="w-[40px] h-[40px] bg-[#c77662] rounded-sm text-white"><IoIosSearch className="w-[25px] h-[25px] ml-[6px] mt-[7px]" /></div>
      </div>
      <div className="w-[400px] h-[60px] mt-[70px] ml-[-350px] flex">
         <FaLocationDot className="text-[#c77662] w-[22px] h-[22px]" />
         <p className="w-[250px] font-[montserrat] ml-[15px] text-[#414042]">Sorry, we didn't find any stores nearby.</p>
      </div>
    </div>

    <p className="w-[90%] text-4xl text-[#414042] font-serif mt-[100px] mb-[35px] ml-[50px] text-center">Benefits of visiting your jane iredale professional:</p>
    <div className="w-[78%] h-[500px] flex ml-[160px] mb-[60px] gap-[14px]">
       <div>
       <Image src={pic1} alt="pics" className="w-[380px] h-[350px]" />
       <p className="w-[300px] font-[montserrat] text-center mt-[30px] ml-[35px] text-[#414042]">Support an independent, locally owned business in your community.</p>
       </div>
       <div>
       <Image src={pic2} alt="pics" className="w-[380px] h-[350px]" />
       <p className="w-[280px] font-[montserrat] text-center mt-[30px] ml-[40px] text-[#414042]">Explore and experience our products in person before you buy.</p>
       </div>
       <div>
       <Image src={pic3} alt="pics" className="w-[380px] h-[350px]" />
       <p className="w-[280px] font-[montserrat] text-center mt-[30px] ml-[42px] text-[#414042]">Receive shade and formula recommendations for your unique skin type and tone.</p>
       </div>
    </div>
</div>
}