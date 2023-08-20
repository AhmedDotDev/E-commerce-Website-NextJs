import Link from "next/link";



const Accordian=()=>{
    return(
<div id="accordion-open" data-accordion="open" >
  <div className="my-2" >
  <h2 id="accordion-open-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-b-1  border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What is our company's mission?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Our company is driven by the mission to empower individuals and businesses with transformative digital solutions. We aim to redefine the digital landscape by offering innovative products that enhance online experiences, simplifying intricate processes, and fostering a more connected world.</p>
    </div>
  </div>
  </div>
  <div className="my-2" >
  <h2 id="accordion-open-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-b-1 border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> How can I purchase products from your website?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400"> To purchase our products, you can effortlessly navigate through our thoughtfully curated collection. Once you've chosen the products that resonate with your needs, proceed to the secure checkout process. We've integrated trusted payment gateways to ensure your financial transactions are seamless, protected by cutting-edge encryption.You can engage with our offerings on the platform of your choice without compromising quality or usability.</p>
    </div>
  </div>
  </div>
  <div className="my-2" >
  <h2 id="accordion-open-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What types of digital products do you offer?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Our diverse selection encompasses a wide spectrum of digital solutions, ranging from versatile software applications to beautifully designed templates, captivating graphics, and insightful e-books. We believe in catering to the myriad needs of our clientele, ensuring that each product carries the potential to contribute significantly to your digital aspirations.</p>
    </div>
  </div>
  </div>
  <div className="my-2" >
  <h2 id="accordion-open-heading-4">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Is technical support available for your products?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-4" className="hidden" aria-labelledby="accordion-open-heading-4">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Absolutely, our commitment to your satisfaction extends beyond the point of purchase. Our dedicated technical support team is at your service to provide assistance with any challenges or inquiries related to our products. From troubleshooting to guidance on optimal utilization, we're here to ensure your journey with our products is smooth and rewarding.</p>
    </div>
  </div>
  </div>
  <div className="my-2" >
  <h2 id="accordion-open-heading-5">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-5" aria-expanded="false" aria-controls="accordion-open-body-5">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> How do you ensure the security of my payment information?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-5" className="hidden" aria-labelledby="accordion-open-heading-5">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The security of your payment information is of paramount importance to us. Our website is fortified with state-of-the-art encryption protocols that safeguard your sensitive data during transmission. Additionally, we remain vigilant in adopting industry best practices to fortify our security infrastructure and protect your financial information from potential threats.</p>
    </div>
  </div>
  </div>
  <div className="my-2" >
  <h2 id="accordion-open-heading-6">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 text-[16px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover: bg-primary-pink dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-6" aria-expanded="false" aria-controls="accordion-open-body-6">
      <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Is my personal information kept private?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-6" className="hidden" aria-labelledby="accordion-open-heading-6">
    <div className="p-5 border border-b-1 rounded-xl border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400"> Rest assured, your personal information is treated with the utmost respect for your privacy. We adhere to stringent data protection standards and utilize your personal data exclusively for the purpose of order processing and communication. Your information remains confidential, and we are committed to maintaining the trust you place in us.</p>
    </div>
  </div>
</div>
</div>
)}


export default Accordian;