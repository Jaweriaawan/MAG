import Image from "next/image"
import pic1 from "/public/Images/fpic4.jpg"
import pic2 from "/public/Images/fpic5.jpg"
import pic3 from "/public/Images/fpic6.jpg"
import pic4 from "/public/Images/fpic7.jpg"
import pic5 from "/public/Images/fpic8.jpg"
import pic6 from "/public/Images/fpic9.jpg"
import pic7 from "/public/Images/fpic10.jpg"
import pic8 from "/public/Images/fpic11.jpg"
import pic9 from "/public/Images/fpic12.jpg"
import pic10 from "/public/Images/fpic13.jpg"
import pic11 from "/public/Images/fpic14.jpg"

export default function MakeupArtist(){
 return <div>
   <div className="w-[1040px] h-[400px] flex justify-between ml-[220px]">
   <Image src={pic1} alt="pics" className="rotate-180 w-[500px] h-[400px]" />
   <div className="w-[500px] h-[300px] pt-[100px] mt-[40px]">
    <p className="text-5xl text-[#414042] font-serif">Professional Makeup Artist Program</p>
    <p className="w-[445px] text-[#414042] font-[montserrat]">We are excited to welcome you to our network of highly trained makeup professionals who work with jane iredale products to enhance natural beauty world-wide.</p>
   </div>
   </div>

   <div className="w-[90%] h-[140px] bg-[#efefef] mt-[40px] mb-[30px] ml-[70px] font-[montserrat] text-[#414042] pt-[45px]">
     <p className="text-4xl font-serif text-center">Are you an experienced makeup artist interested in using jane iredale?</p>
   </div>

   <div className="w-[90%] h-[450px] mb-[100px] flex ml-[70px]">
     <Image src={pic2} alt="pics" className="w-[650px] h-[450px]" />
     <div className="pl-[30px] pt-[70px]">
       <p className="w-[650px] font-[montserrat] ml-[7px]">Makeup artists play a very important role in our business and we value your support. We have an exciting program for professional artists to purchase our products for makeup kits and personal use at substantial savings.</p>
       <p className="font-[montserrat] mt-[30px] ml-[7px] mb-[8px]">Benefits of joining our Professional Makeup Artist Program:</p>
       <ul className="list-disc ml-[38px] font-[montserrat]">
         <li>Product and shipping discounts</li>
         <li>Online ordering 24/7</li>
         <li>Online webinars and e-learning</li>
         <li>Advance updates on new products</li>
       </ul>
       <button className="w-[250px] h-[50px] ml-[8px] bg-[#c77662] text-white text-[17px] font-[montserrat] hover:opacity-85 mt-[30px]">APPLY NOW</button>
     </div>
   </div>

   <div className="w-[90%] h-[140px] bg-[#c77662] mt-[40px] mb-[30px] ml-[70px] font-[montserrat] text-white pt-[45px]">
     <p className="text-4xl font-serif text-center">Show us your work #cleanbeautyartists @janeiredale</p>
   </div>

   <div className="grid grid-cols-3 grid-rows-3 w-[90%] h-[1550px] ml-[70px] gap-[12px]">
      <div className="w-[445px] h-[500px]"><Image src={pic3} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic4} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic5} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic6} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic7} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px]  h-[500px]"><Image src={pic8} alt="pics" className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic9} alt="pics"  className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[500px]"><Image src={pic10} alt="pics" className="w-[440px] h-[500px]" /></div>
      <div className="w-[445px] h-[400px]"><Image src={pic11} alt="pics" className="w-[440px] h-[500px]" /></div>
   </div>
</div>
}