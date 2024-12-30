'use client'

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Dropdown = ({ title, content }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-[#414042] active:bg-[#41404208] text-[20px] px-[8px] font-sans w-[650px] h-[60px] pt-[15px] border-t-[1px] border-b-[1px] border-[#dddada] flex justify-between"
      >
        {title}
        {!isOpen ? (
          <FaPlus className="border-[#414042] w-[12px] mt-[5px]" />
        ) : (
          <FaMinus className="border-[#414042] w-[12px] mt-[5px]" />
        )}
      </button>
      {isOpen && (
        <div className="text-[#414042] w-[650px] h-auto font-[montserrat] px-[20px] pl-[40px] pt-[20px]">
          {content}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const dropdownData = [
    {
      title: 'Processing Time',
      content: (
        <>
          <p>Order processing occurs Monday through Saturday, excluding major holidays.</p>
          <p className="mt-[30px]">Questions? Contact our Beauty Advisors</p>
          <p>
            <span className="text-[#c77662]">at 877.869.9420</span> or{' '}
            <span className="text-[#c77662]">BeautyAdvisors@janeiredale.com.</span>
          </p>
        </>
      ),
    },
    {
      title: 'Delivery Times',
      content: <div className='w-[550px] h-[800px] mb-[100px] pb-[10px]'>
        <p className='text-[18px] font-semibold mb-[10px]'>Delivery to the contiguous U.S.:</p>
        <p>USPS Standard Shipping</p>
        <p>Cost: FREE!</p>
        <p>Delivery Time: 2-5 days*</p>
        <p className='mt-[30px]'>USPS Priority Mail Express</p>
        <p>Cost: $35</p>
        <p>Delivery time: 1-2 days*</p>
        <p className='mt-[30px]'>*Time stated in business days, excluding weekends and holidays.</p>
        <p>Delivery times are estimates to most addresses.</p>
        <p className='mt-[30px]'>Delivery to Alaska, Hawaii, & most U.S. Territories:</p>
        <p>USPS Standard Shipping: FREE!</p>
        <p>Delivery time: 2-5 business days</p>
        <p className='mt-[30px]'>USPS Priority Mail Express Cost: Actual cost</p>
        <p>Delivery time: 3-5 business days</p>
        <p className='text-[18px] w-[580px] font-semibold ml-[-20px] mt-[30px]'>Shipping delays may occur due to inclement weather and the impact of Covid-19.</p>
        <p className='ml-[-20px] mt-[30px]'><span className='text-[18px] w-[300px] h-[80px] font-semibold'>Shipping Days:</span> Monday thru Saturday, excluding U.S. federal holidays. Please note, shipping time is based on business days only. (Sunday is not counted as a business day.)</p>
        <p className='ml-[-20px] mt-[30px]'><span className='text-[18px] w-[300px] h-[80px] font-semibold'>Undeliverable packages:</span>Refused shipments and packages that have failed delivery will be returned to jane iredale and assessed a $15 Non-Delivery fee. The Non-Delivery fee will be charged to the payment form selected during checkout, and will be subtracted from any refund.</p>
      </div>,
    },
    {
      title: 'Customer Support',
      content: <div className='h-[650px]'>
        <p className='text-[18px] font-semibold mb-[3px]'>International Delivery:</p>
        <p className='mb-[3px]'><span className='text-[18px] font-semibold'>USPS International Cost:</span> Actual cost</p>
        <p className='mb-[30px]'><span className='text-[18px] font-semibold'>Delivery time:</span> 10-60 business days</p>
        <p className='w-[550px] h-[200px]'>Some international packages may be subject to a customs charge. Any customs charge is determined by the country to which the package is shipped, not by jane iredale. Please check with your local postal service regarding customs charges prior to ordering. The following countries either have local distribution or shipping restrictions, so we cannot process an order with a billing and/or shipping address in these locations.</p>
        <p className='w-[550px] h-[200px]'>Please visit our international contact page for information on our authorized international distributors: Andorra, Australia, Austria, Belarus, Belgium, Bermuda, Brazil, Bulgaria, Canada, Caribbean Islands (Greater Antilles, The Lesser Antilles and Lucayan Archipelago), China, Cuba, Czech Republic, Croatia, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Guatemala, Hong Kong, Hungary, Indonesia, Iran, Ireland, Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxemburg, Malta, Mexico, Monaco, Netherlands, New Zealand, North Korea, Norway, Panama, Philippines, Poland, Portugal, Puerto Rico, Romania, Russia, Slovenia, Slovakia, Somalia, South Sudan, Spain, Syria, Sweden, Switzerland, Taiwan, Turkey, U.A.E (Dubai, Saudi Arabia, Pakistan, Bahrain, Qatar, Oman, Lebanon, Morocco and Kuwait), United Kingdom, or Ukraine.</p>
      </div>,
    },
    {
      title: 'Return & Exchange Policy',
      content: <div>
        <p className='w-[550px] h-[200px]'>If you are dissatisfied with any product purchased through our site for any reason, you may return the item(s) within 30 days for an exchange or refund. We offer a 100% color match guarantee. If you ordered the incorrect color, please let us know within 30 days of purchase and we will be happy to replace it with a more appropriate choice.</p>
        <p>Items purchased from our Last Chance and Limited-Edition Merch page are <span className='text-[18px] font-semibold mt-[20px]'>final sale.</span></p>
      </div>,
    },
    {
      title: 'Return & Exchande Instructions',
      content: <div>
         <p className='w-[550px] h-[100px] mb-[20px]'>Please be advised that prior authorization is required on all returns and exchanges. Any return or exchange sent to us without return authorization cannot be accepted. Return acceptance is at the sole discretion of jane iredale.</p>
         <p className='mb-[4px]'>Follow the steps below to return or exchange the item(s):</p>
         <p className='w-[550px] h-[100px] mb-[20px]'>Call us at 877-869-9420 or via email at <span className='text-[#c77662]'>beautyadvisors@janeiredale.com </span> A Beauty Advisor will provide you with a return authorization number and a pre-paid return label will be sent to you via email.</p>
      </div>,
      
    },
  ];

  return (
    <div  className='w-full flex justify-between px-[70px]'>
      <div>
       {dropdownData.slice(0,3).map((item, index) => (
         <Dropdown key={index} title={item.title} content={item.content} />
       ))}
     </div>

     <div>
       {dropdownData.slice(3).map((item, index) => (
         <Dropdown key={index} title={item.title} content={item.content} />
       ))}
     </div>
    </div>
  );
};

export default App;