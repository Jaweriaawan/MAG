import Image from "next/image";
import logo from "/public/Images/logo.svg"
import Link from "next/link";

export default function Header(){
 return <div>
    <div className="bg-[#efefef] h-[40px] w-[100%] text-[#c87b67] flex items-center justify-center">
      <p className=" text font-semibold">COMPLIMENTARY HYDRATION SPRAY WITH ANY $100 ORDER. <Link href=""><span className="underline">GET OFFER</span></Link></p>
    </div>
    <div className="bg-[#c87b67] h-[60px] w-[100%] flex justify-between items-center px-[100px]">
      <p className="text-white font-serif text-[25px]">Fast Free <span className="font-sans text-[18px]">Shipping & Returns</span></p>
      <ul className="font-[montserat alternates SemiBold] font-sans text-white text-[18px]">
         <Link href="Offer" className="mr-[20px]">offers</Link>
         <Link href="Reward" className="mr-[20px]">beauty rewards</Link>
         <Link href="ProfessionalLogin" className="mr-[20px]">for professionals</Link>
         <Link href="Myaccount" className="mr-[20px]">my account</Link>
      </ul>
    </div>

    <div className="w-[100%] h-[100px] bg-slate-100 pt-[px] pl-[60px] flex justify-between border-b-[1px] border-[#414042]">
       <Image src={logo} alt="pics" className="w-[90px]" />
       <div className="pt-[33px] pr-[150px]">
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">New</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Best Sellers</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Complexion</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Eyes</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Lips + Chicks</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Skincare</Link>
       <Link href="" className="mr-[20px] text-red-600 font-[montserrat] text-[20px]">Gift Guide</Link>
       <Link href="" className="mr-[20px] font-[montserrat] text-[19px]">Learn</Link>
       </div>
    </div>

 </div>
}