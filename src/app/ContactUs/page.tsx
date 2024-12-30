import Image from "next/image"
import pic from "/public/Images/pic12.jpg"
import pic1 from "/public/Images/pic13.jpg"
import pic2 from "/public/Images/pic14.jpg"
import pic3 from "/public/Images/pic3.jpg"
import pic4 from "/public/Images/pic4.jpg"
import pic5 from "/public/Images/pic15.jpg"
import pic6 from "/public/Images/bpic1.jpg"
import pic7 from "/public/Images/bpic2.jpg"
import pic8 from "/public/Images/bpic3.jpg"

export default function ContactUs(){
 return <div className="mt-[40px]">
    <div className="flex ml-[75px]">
    <Image src={pic} alt="pics" className="w-[700px]" />
   <div className="w-[600px] h-[600px] font-sans pt-[80px] text-center">
    <p className="text-5xl font-serif mb-[35px]">Contact Us</p>
    <p className="text-[20px] mb-[10px]">We're here to help!</p>
    <p className="text-[17px] mb-[4px] font-semibold">Call us: <span className="text-[#c77662] underline">877-869-9420</span></p>
    <p className="text-[17px] mb-[4px] font-semibold">Text us: <span className="text-[#c77662] underline">877-352-7122</span></p>
    <p className="text-[17px] mb-[4px]">M-F: 9AM to 5PM (ET)</p>
    <p className="text-[17px] mb-[4px]">Sat: 9AM to 5PM (ET)</p>
    <p className="text-[17px] mb-[10px] font-semibold">Email us: <span className="text-[#c77662] underline">BeautyAdvisors@janeiredale.com</span></p>
    <p className="text-[17px] mb-[20px] font-semibold">Chat us: <span className="text-[#c77662] underline">Start chat</span></p>
    <button className="w-[280px] h-[50px] bg-[#c77662] text-[18px] text-white">VISIT OUR HELP CENTER</button>
   </div>
    </div>

   <div className="w-[90%] h-[140px] bg-[#efefef] mt-[40px] mb-[30px] ml-[70px] font-[montserrat] text-[#414042] pt-[45px]">
     <p className="text-5xl font-serif text-center">Meet our team</p>
   </div>

    <div className="w-[95%] h-[2900px]">
    <div className="w-[95%] h-[700px] ml-[40px] justify-between flex mb-[30px] pt-[40px] border-b-[1px] border-slate-300">
     <Image src={pic1} alt="pics" className="w-[400px] h-[600px]" />
     <div className="w-[500px] font-[montserrat] text-[px] text-[#414042] pt-[110px] pl-[25px]">
      <p className="text-[40px] font-serif">Katelyn</p>
      <p className="mb-[30px]">Senior Manager, Customer Experience</p>
      <p className="mb-[30px]"><span className="font-semibold">Favorite product: </span> Smooth Affair® Brightening Face Primer</p>
      <p>"I use this every single day as an extension of my skincare routine. My skin is noticeably smoother and brighter immediately after use and it helps my makeup last longer."</p>
     </div>
      <Image src={pic2} alt="pics" className="w-[500px] h-[600px]" />
   </div>

   <div className="w-[95%] h-[700px] ml-[40px] justify-between flex mb-[30px] pt-[40px] border-b-[1px] border-slate-300">
     <Image src={pic4} alt="pics" className="w-[400px] h-[600px]" />
     <div className="w-[500px] font-[montserrat] text-[px] text-[#414042] pt-[110px] pl-[25px]">
      <p className="text-[40px] font-serif">Yolanda</p>
      <p className="mb-[30px]">Beauty Advisor</p>
      <p className="mb-[30px]"><span className="font-semibold">Favorite product: </span>  Just Kissed Lip & Cheek Stain in Forever Peach</p>
      <p className="w-[450px]">"Forever Peach is my absolute favorite! It feels amazing and glides on nicely. It also gives my lips and cheeks the perfect hint of peachy color to enhance my natural coloring."</p>
     </div>
      <Image src={pic6} alt="pics" className="w-[478px] h-[600px]" />
   </div>

   <div className="w-[95%] h-[700px] ml-[40px] justify-between flex mb-[30px] pt-[40px] border-b-[1px] border-slate-300">
     <Image src={pic3} alt="pics" className="w-[400px] h-[600px]" />
     <div className="w-[500px] font-[montserrat] text-[px] text-[#414042] pt-[110px] pl-[25px]">
      <p className="text-[40px] font-serif">Kaylee</p>
      <p className="mb-[30px]">Senior Beauty Advisor</p>
      <p className="mb-[30px]"><span className="font-semibold">Favorite product: </span> Lash Fixation Length & Definition Tubing Mascara</p>
      <p>"Lash Fixation Tubing Mascara is my favorite! I love how it separates my lashes and gives me the perfect amount of volume. The removal makes it even better! All you need is warm water and it seamlessly glides off your lashes."</p>
     </div>
      <Image src={pic7} alt="pics" className="w-[500px] h-[600px]" />
   </div>

   <div className="w-[95%] h-[700px] ml-[40px] justify-between flex pt-[40px]">
     <Image src={pic5} alt="pics" className="w-[400px] h-[600px]" />
     <div className="w-[500px] font-[montserrat] text-[px] text-[#414042] pt-[110px] pl-[25px]">
      <p className="text-[40px] font-serif">Alicia</p>
      <p className="mb-[30px]">Senior Beauty Advisor</p>
      <p className="mb-[30px]"><span className="font-semibold">Favorite product: </span> Glow Time® Blush Stick</p>
      <p>"Since I have a fair complexion, I like to add a pop of color to my cheeks. Glow Time Blush Stick is my go-to product for a quick pick-me-up and has the added bonus of doubling as a lip tint."</p>
     </div>
      <Image src={pic8} alt="pics" className="w-[500px] h-[600px]" />
   </div>
    </div>
</div>
}