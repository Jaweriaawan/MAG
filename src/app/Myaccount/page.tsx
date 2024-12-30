export default function Myaccount(){
    return <div className="pl-[100px] pt-[60px]">
      <p className="text-4xl text-[#414042] font-serif mb-[30px]">Customer Login</p>
      <div className="w-[90%] h-[500px] flex gap-[30px]">
        <div className="w-[650px] h-[450px] pt-[40px] pl-[8px] border-r-[3px] border-dotted border-[#414042]">
           <label className="text-[17px] font-[montserrat] text-[#414042]">Email address*</label>
           <input type="email" placeholder="Email address" className="block w-[500px] h-[40px] mt-[6px] mb-[20px] font-[montserrat] pl-[15px] outline-none border-[1px] hover:border-[#414042]" />
           <label className="text-[17px] font-[montserrat] text-[#414042]">Password*</label>
           <input type="password" placeholder="Password" className="block w-[500px] h-[40px] mb-[20px] mt-[6px] font-[montserrat] pl-[15px] outline-none border-[1px] hover:border-[#414042]" />
           <div className="flex justify-between w-[500px]">
               <button className="bg-[#414042] text-[18px] text-white w-[160px] opacity-80 h-[50px]">LOGIN</button>
               <p className="text-[17px] font-[montserrat] text-[#c77662] mt-[14px]">Forgot your password?</p>
           </div>
           <p className="font-[montserrat] mt-[50px]">New Customer? <span className="text-[#c77662]">Sign up</span></p>
           <p className="text-[#c77662] font-[montserrat] text-center mt-[70px]">Manage subscriptions</p>
        </div>
   
        <div className="w-[600px] h-[500px] font-[montserrat] pt-[40px] pl-[8px]">
           <p className="text-3xl text-[#414042] font-serif mb-[30px]">Sign Up</p>
           <p className="text-[#414042] text-[17px] mt-[-22px] mb-[30px]">Enjoy these benefits:</p>
           <p className="text-[#414042] text-[17px] mb-[3px]">1.Checkout faster</p>
           <p className="text-[#414042] text-[17px] mb-[3px]">2.View order history</p>
           <p className="text-[#414042] text-[17px]">3.Earn rewards with our beauty rewards program <span className="text-[#c77662]">Learn more</span></p>
           <button className="bg-[#414042] text-[18px] text-white w-[160px] mt-[30px] opacity-80 h-[50px]">SIGN UP</button>
        </div>
      </div>
   </div>
   }