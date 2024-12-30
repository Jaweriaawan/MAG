import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";


export default function Footer(){
 return <div className='font-sans'>

    <div className='lg:w-[45%] es:w-[100%] h-[100px] lg:mb-[50px] es:mb-[30px] lg:mt-[100px] es:mt-[70px] lg:ml-[400px] flex items-center justify-center lg:gap-[60px] es:gap-[20px]'>
      <Link href="https://www.facebook.com/"> <FaFacebookF className='lg:w-[45px] lg:h-[45px] es:w-[35px] es:h-[35px] text-[#efefef]' /></Link>
      <FaTwitter className='lg:w-[45px] lg:h-[45px] es:w-[35px] es:h-[35px] text-[#efefef]' />  
      <Link href="https://www.instagram.com/"><CiInstagram className='lg:w-[45px] lg:h-[45px] es:w-[35px] es:h-[35px] text-[#efefef]' /></Link>
      <Link href="https://www.youtube.com/"><FaYoutube className='lg:w-[45px] lg:h-[45px] es:w-[35px] es:h-[35px] text-[#efefef]' /></Link>
      <Link href="https://www.tiktok.com/foryou?lang=en"><IoLogoTiktok className='lg:w-[45px] lg:h-[45px] es:w-[35px] es:h-[35px] text-[#efefef]' /></Link>
    </div>

    <div className='w-[100%] lg:h-[300px] es:h-[360px] bg-[#efefef] lg:pt-[40px] es:pt-[30px]'>
       <p className='text-[#414042] text-3xl font-serif text-center mb-[40px]'>Sign up for emails and receive const <span className='font-sans'> 15%</span> off your first order!</p>
       <label className='text-[#414042] font-[montserrat] text-[17px] lg:ml-[450px] es:ml-[10px]'>Email*</label>
      <div className='flex lg:gap-[12px] es:gap-[9px] items-center lg:ml-[450px]'>
      <input type="email" className='block w-[400px] h-[35px] outline-none pl-[15px] border-[1px] hover:border-[#414042]' />
      <button className='lg:w-[170px] es:w-[150px] h-[40px] bg-[#c87b67] text-white rounded-[4px]'>SIGN UP</button>
      </div>
      <p className='text-[#414042] font-[montserrat] lg:w-[450px] es:w-[350px] text-center es:ml-[10px] lg:ml-[500px] mt-[20px] text-[15px]'>By signing up you accept the jane iredale <span className='text-[#c87b67]'>Terms of Use</span>, <span className='text-[#c87b67]'>Beauty Rewards Terms & Conditions</span> and <span className='text-[#c87b67]'>Privacy Notice</span>.</p>
    </div>

    <div className="w-[100%] h-[500px] border-t-[2px] shadow-dust lg:flex lg:gap-[52px] lg:mt-0 es:mt-[60px] pt-[50px]">
                      {/* first box */}
     <div className="w-[340px] lg:h-[400px] es:h-[330px] lg:pl-[40px] es:pl-[20px] lg:pt-[50px] es:pt-[10px]">
       <p className="text-[18px] tracking-[.2rem] lg:mb-[25px] es:mb-[10px] text-[#414042]">CUSTOMER SERVICE</p>
       <p className='lg:text-[18px] es:text-[16px] text-[#414042]'>Call: 877-869-9420</p>
       <p className='lg:text-[18px] es:text-[16px] text-[#414042]'>Text: 877-352-7122</p>
       <p className='mb-[15px] lg:text-[18px] es:text-[16px] text-[#414042]'>gmail012346ABG@gmail.com</p>
       <Link href="/Frone"><p className='mb-[15px] lg:text-[18px] es:text-[16px] text-[#414042]'>1-on-1 Virtual Consultations</p></Link>
       <p className='tracking-[.1rem] lg:text-[18px] es:text-[16px] text-[#414042]'>FOR PROFESSIONALS</p>
       <p className='lg:text-[18px] es:text-[16px] text-[#414042]'>Call: 800-817-5665</p>
       <Link href="/Flogin" className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Professional site login</Link><br />
       <Link href="MakeupArtist"><p className='mt-[20px] lg:text-[18px] es:text-[16px] text-[#414042]'>Makeup Artist Program</p></Link>
     </div>

                     {/* second box */}
     <div className="w-[340px] lg:h-[400px] es:h-[230px] lg:pl-[40px] es:pl-[20px] lg:pt-[50px] es:pt-[px]">
      <p className="text-[18px] tracking-[.2rem] mb-[25px] text-[#414042]">ORDER INQUIRIES</p>
      <Link href="Help"><p className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Help Center</p></Link>
      <Link href="Shipping"><p className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Shipping & Returns</p></Link>
      <Link href="TrackOrder"><p className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Track Your Order</p></Link>
      <Link href="Give"><p className='lg:text-[18px] es:text-[16px] text-[#414042]'>Give $30, Get $30</p></Link>
     </div>
                      {/* third box */}
     <div className="w-[340px] lg:h-[400px] es:h-[160px] lg:pl-[40px] es:pl-[20px] lg:pt-[50px] es:pt-[10px]">
      <p className="text-[18px] tracking-[.2rem] mb-[25px] text-[#414042]">FIND OUR PRODUCT</p>
      <Link href="ContactUs"><p className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Contact Us</p></Link>
      <Link href="US-Location"><p className='mb-[10px] lg:text-[18px] es:text-[16px] text-[#414042]'>Find a U.S. Location</p></Link>
     </div>
                         {/* fourth box */}
     <div className="w-[340px] lg:h-[400px] es:h-[280px] lg:pl-[40px] es:pl-[20px] lg:pt-[50px] es:pt-[10px]">
      <p className="text-[18px] tracking-[.2rem] mb-[25px] text-[#414042]">ABOUT US</p>
      <Link href="Career"><p className='lg:text-[18px] es:text-[16px] text-[#414042]'>Careers</p></Link>
      <p className='lg:mt-[110px] es:mt-[50px] mb-[10px] lg:text-[20px] es:text-[18px] tracking-[.2rem] text-[#414042]'>SELECT A COUNTRY</p>
      <select name="UNITED STATE" id="" className='w-[250px] h-[50px] outline-none decoration-gray-400 border-[1px] border-black px-[10px]'>
        <option value="US">UNITED STATE</option>
        <option value="IN">INDIA</option>
        <option value="PK">PAKISTAN</option>
        <option value="UK">UNITED KINGDOM</option>
        <option value="AU">AUSTRALIA</option>
      </select>
     </div>
  </div>
  <div className='w-[100%] h-[40px] bg-gray-100 lg:mt-0 es:mt-[600px]'>
     <p className='text-[13px] text-center pt-[10px] text-[#414042]'>© 2024 IREDALE COSMETICS, INC.</p>
  </div>
</div>
}