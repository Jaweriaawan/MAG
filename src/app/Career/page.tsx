import Image from "next/image"
import pic from "/public/Images/career.jpg"

export default function Careers(){
 return <div>
    <Image src={pic} alt="pics" className="w-full h-[900px] opacity-55" />
    <div className="w-[90%] h-[140px] bg-[#c77662] realtive mt-[-850px] mb-[30px] ml-[70px] font-[montserrat] text-white pt-[52px]">
     <p className="text-4xl font-serif text-center">Careers at Jane Iredale</p>
   </div>
    <p className="font-[montserrat] w-[90%] ml-[80px] text-[#414042]">Iredale Cosmetics, Inc. (Jane Iredale) is ‘the skincare makeup’ – a makeup brand committed to creating high-quality products that are good for the skin – equal parts clean ingredients, skin-loving benefits and no-fade makeup performance. Available in more than 50 countries worldwide, Jane Iredale is championed by skincare professionals and sold in spas, salons, and medical offices as well as premium retailers such as Blue Mercury, Ulta and Nordstrom. The company fosters an inclusive company culture where team members can grow, thrive and make a beautiful difference, both personally and professionally.</p>
    <p className="font-[montserrat] w-[90%] ml-[80px] text-[#414042] mt-[30px] mb-[30px]">If you are interested in applying for one of our openings please submit your resume and cover letter to <span className="text-[#c77662] underline">dchurchball@janeiredale.com.</span></p>
    <div className="w-[90%] h-[475px] rounded-lg bg-[#c77662] ml-[70px] pt-[10px]">
      <p className="font-serif text-white text-4xl ml-[40px]">Perks of working at Jane Iredale:</p>

      <div className="flex gap-[60px]">
       <div className="w-[48%] h-[410px] mt-[15px] pl-[40px]">
         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px] ">Parental Leave</p>
         <p className="font-[montserrat] text-white w-[400px]">Up to 20 weeks of leave based upon your unique circumstance</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Summer Fridays</p>
         <p className="font-[montserrat] text-white w-[400px]">Enjoy early release on Fridays to take advantage of the Summer Sun & Fun</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Your Future</p>
         <p className="font-[montserrat] text-white w-[400px]">Robust 401(K) plan with a company match and free access to a one-on-one financial advisor</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Hybrid Work Model</p>
         <p className="font-[montserrat] text-white w-[400px]">Balance work and life with options for some in-office days and some remote days for some roles</p>
       </div>

       <div className="w-[47%] h-[410px] mt-[15px] pl-[40px]">
         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Employee Discount</p>
         <p className="font-[montserrat] text-white w-[400px]">75% off retail on jane iredale products</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Paid Holidays</p>
         <p className="font-[montserrat] text-white w-[400px]">Floating holidays too!</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Health & Wellbeing Benefits</p>
         <p className="font-[montserrat] text-white w-[400px]">Generous company contributions to health insurance, company paid Life & Short-Term disability insurance, extensive EAP services</p>

         <p className="font-[montserrat] text-white font-bold text-[20px] mt-[20px]">Paid Time Off</p>
         <p className="font-[montserrat] text-white w-[400px]">Generous time off bank that includes vacation, personal and sick time</p>

       </div>
      </div>
    </div>
</div>
}