import Image from "next/image"
import pic1 from "/public/Images/hpic1.jpg"

export default function Offer(){
 return <div>
    <p className="text-3xl text-[#414042] font-serif text-center mt-[70px]">Today's special offers</p>
    <div className="w-[90%] h-[450px] bg-[#efefef] mt-[40px] ml-[75px] flex pl-[60px] pt-[50px] rounded-lg">
       <Image src={pic1} alt="pics" className="w-[350px] h-[350px]" />
        <div className="pt-[65px] pl-[90px]">
          <p className="font-[montserrat] text-[#414042] mb-[22px]">TAKE AN EXTRA 20% OFF LAST CHANCE ITEMS.</p>
          <p className="font-[montserrat] mb-[20px]">CODE: <span className="font-bold">TAKE20</span></p>
          <button className="w-[150px] h-[50px] bg-[#c77662] rounded-[5px] font-bold text-white mb-[35px]">SHOP NOW</button>
          <p className="font-bold font-[montserrat]">offer details:</p>
          <p className="font-[montserrat] text-[15px]">Limit 3 per shade. All sales final. Enter code <span className="font-bold">TAKE20</span> at checkout. Offer ends 12/31/24, while supplies last.</p>
        </div>
    </div>

    <p className="text-3xl text-[#414042] font-serif text-center mt-[70px]">Our everyday offers</p>
    <div className="w-[90%] h-[650px] ml-[75px] mt-[20px] grid grid-cols-3 gap-[12px] pt-[20px] mb-[80px]">

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Enjoy 15% off your first order</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Receive your code by signing up to receive the latest news and offers.</p>
          <p className="font-[montserrat] text-[#c77662]">Sign Up</p>
       </div>

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Complimentary sample</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Pick a complimentary sample at checkout with any $75 order.</p>
          <p className="font-[montserrat] text-[#c77662]">Shop Now</p>
       </div>

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Beauty Rewards</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Discover, connect, shop and share to earn rewards you can spend on your favorites.</p>
          <p className="font-[montserrat] text-[#c77662]">Join Now</p>
       </div>

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Give $30, Get $30</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Give your friends $30 off their first order of $50 and get $30 (600 Points) for each successful referral.</p>
          <p className="font-[montserrat] text-[#c77662]">Refer your Friends</p>
       </div>

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Pretty now, Pay later</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Split your purchase into regular payments with Shop Pay Installments.</p>
          <p className="font-[montserrat] text-[#c77662]">Learn More</p>
       </div>

       <div className="w-[440px] h-[300px] border-[1px] border-gray-400 rounded-[6px] text-center pt-[60px]">
          <p className="font-bold text-[18px] mb-[30px]">Auto-Replenishment</p>
          <p className="font-[montserrat] w-[400px] mb-[60px] ml-[20px]">Free auto-replenishment delivery available on your favorites.</p>
          <p className="font-[montserrat] text-[#c77662]">Learn More</p>
       </div>
    </div>
 </div>
}