import Image from "next/image"
import pic1 from "/public/Images/pic1.jpg"
import pic2 from "/public/Images/pic2.jpg"
import pic3 from "/public/Images/pic3.jpg"
import pic4 from "/public/Images/pic4.jpg"
import pic7 from "/public/Images/pic7.jpg"
import pic8 from "/public/Images/pic8.jpg"
import pic9 from "/public/Images/pic9.jpg"
import pic10 from "/public/Images/pic10.jpg"
import { TiClipboard } from "react-icons/ti";
import { GrSchedule } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";

export default function Consultants(){
  return <div>
   <div className="justify-between flex w-[100%] h-[400px]">
   <div className="flex w-[550px] h-[350px] gap-[20px] mt-[30px]">
       <div className="w-[300px] h-[350px]"><Image src={pic2} alt="pics" className="bg-cover w-[300px] h-[350px]" /></div>
       <div className="grid-rows-2">
         <div className="w-[230px] h-[240px]"><Image src={pic1} alt="pics" className="w-[230px] h-[240px]" /></div>
          <div className="w-[230px] h-[95px] mt-[14px]"><Image src={pic7} alt="pics" className="bg-cover w-[230px] h-[95px]" /></div>
       </div>
    </div>

    <div className="font-[montserrat] text-center w-[300px] h-[200px] mt-[200px]">
      <p className="text-2xl text-[#414042]">1-on-1</p>
      <p className="text-5xl text-[#414042] font-serif">Virtual</p>
      <p className="text-5xl text-[#414042] font-serif">Consultation</p>
    </div>

    <div className="flex w-[550px] h-[350px] gap-[20px] mt-[30px]">
       <div className="grid-rows-2">
         <div className="w-[230px] h-[95px] mb-[10px]"><Image src={pic8} alt="pics" className="w-[230px] h-[95px] bg-cover" /></div>
         <div className="w-[230px] h-[240px]"><Image src={pic4} alt="pics" className="w-[230px] h-[240px] bg-cover" /></div>
       </div>
       <div className="w-[300px] h-[350px]"><Image src={pic3} alt="pics" className="bg-cover w-[300px] h-[350px]" /></div>
    </div>
   </div>

   <div className="w-[100%] lg:h-[160px] es:h-[200px] bg-[#efefef] mt-[10px] font-[montserrat] text-[#414042] pt-[45px]">
     <p className="text-6xl font-serif text-center">Choose your consultation</p>
   </div>

   <div className="w-[100%] h-[800px] mt-[30px] flex gap-[20px] items-center justify-center">
      <div className="w-[700px] h-[700px]">
        <Image src={pic9} alt="pics" className="h-[500px] bg-cover bg-center" />
        <div className="w-[500px] text-center ml-[95px]">
          <p className="text-4xl font-serif text-center mt-[25px] text-[#414042]">Clean Beauty Consultation</p>
          <p className="font-[montserrat] mt-[10px] text-[#414042]">Let us help you with personalized recommendations as we shop together and discover the best options for your needs.</p>
          <a href=""><button className="w-[200px] h-[60px] bg-gray-500 hover:bg-gray-600 hover:opacity-60 mt-[30px] text-white">BOOK NOW</button></a>
        </div>
      </div>

      <div className="w-[700px] h-[700px]">
        <Image src={pic10} alt="pics" className="h-[500px]" />
        <div className="w-[600px] text-center ml-[50px]">
          <p className="text-4xl font-serif text-center mt-[25px] text-[#414042]">Find Your Foundation Consultation</p>
          <p className="font-[montserrat] mt-[10px] text-[#414042]">Let us help you find your perfect foundation formula and shade we know your skin is going to love.</p>
          <a href=""><button className="w-[200px] h-[60px] bg-gray-500 hover:bg-gray-600 hover:opacity-60 text-white mt-[30px]">BOOK NOW</button></a>
        </div>
      </div>
   </div>

   <div className="w-[100%] h-[160px] bg-[#efefef] mt-[30px] mb-[20px] font-[montserrat] text-[#414042] pt-[45px]">
     <p className="text-6xl font-serif text-center">How it works</p>
   </div>

   <div className="w-[100%] h-[500px] pt-[30px] text-center">
     <p className="font-[montserrat] w-[820px] ml-[370px] text-[#414042]">Want to learn more about clean beauty and get expert advice? Book your complimentary one-on-one video consultation with one of our Beauty Advisors for recommendations tailored just for you.</p>
     <div className="font-sans flex mt-[-100px] gap-[300px] ml-[180px]">
         <p className="text-[#efefef] text-[300px]">1</p>
         <GrSchedule className="absolute w-[140px] h-[140px] mt-[180px] ml-[105px] text-[#414042]" />
         <div className="w-[200px] mt-[400px] ml-[-470px]">
          <p className="text-[#414042] text-[24px] tracking-[.1rem]">SCHEDULE</p>
          <p className="text-[#414042] text-[20px]">your appointment</p>
         </div>
       <p className="text-[#efefef] text-[300px]">2</p>
        <TiClipboard className="absolute w-[150px] h-[150px] ml-[550px] mt-[180px] text-[#414042]" />
        <div className="w-[200px] mt-[400px] ml-[-480px]">
          <p className="text-[#414042] text-[24px] tracking-[.1rem]">PREPARE</p>
          <p className="text-[#414042] text-[20px]">your questions</p>
         </div>
       <p className="text-[#efefef] text-[300px]">3</p>
        <IoVideocamOutline className="absolute w-[100px] h-[100px] ml-[1070px] mt-[200px] text-[#414042]" />
        <div className="w-[200px] mt-[400px] ml-[-480px]">
          <p className="text-[#414042] text-[24px] tracking-[.1rem]">JOIN</p>
          <p className="text-[#414042] text-[20px]">your consultation</p>
         </div>
     </div>
   </div>

   <div className="w-[100%] h-[515px] mb-[100px] mt-[20px] bg-[#efefef] pt-[30px]">
      <p className="text-6xl font-serif text-center text-[#414042]">What fans are saying</p>
      <div className="text-[#414042] w-[580px] h-[120px] text-center mt-[20px] ml-[465px]">
       <p className="font-[montserrat]"> “This is a terrific service! What a wonderful way to get expert recommendations that are personalized for me, without leaving home!”</p>
       <p>Carole</p>
       <p>Galveston, TX</p>
       <hr className="w-[18px] h-[1px] border-[#414042] ml-[280px] mt-[15px]" />
      </div>

      <div className="text-[#414042] w-[580px] h-[120px] text-center mt-[20px] ml-[465px]">
       <p className="font-[montserrat]">“Yolanda was very jovial and personable. It was like talking to a girlfriend. And she was very knowledgeable about products.”</p>
       <p>Linda</p>
       <p>New Bern, NC</p>
       <hr className="w-[18px] h-[1px] border-[#414042] ml-[280px] mt-[15px]" />
      </div>

      <div className="text-[#414042] w-[580px] h-[120px] text-center mt-[20px] ml-[465px]">
       <p className="font-[montserrat]">"I'm really glad I scheduled the virtual consultation as it helped me to fine tune what products I needed and how to use them to achieve the look I'm going for."</p>
       <p>Christy</p>
       <p>Fairfax Station, VA</p>
      </div>
   </div>
</div>
}

