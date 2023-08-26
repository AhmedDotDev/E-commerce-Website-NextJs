import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
   

<section className="bg-center bg-no-repeat bg-[url('/hero-bg.png')] bg-gray-300 bg-blend-multiply">
    <div className=" flex flex-col justify-center items-center self-center text-center px-4 my-auto mx-auto max-w-screen-xl h-[60vh]">
        <h1 className="mb-4 text-3xl px-2 md:px-30 lg:px-40 font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">Discover Digital Excellence: Your Gateway to Innovation</h1>
        <p className="mb-8 text-md font-normal text-gray-100 lg:text-lg sm:px-16 lg:px-48">Millions of designers and agencies around the world showcase their portfolio work on ICOMM - the home to the world s best design and creative professionals.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/shop" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-xl bg-gradient-to-l from-primary-lightpink to-primary-pink hover:bg-blue-800 transition duration-300 ease-in-out focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-900">
              Shop Now
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link href="#gallery" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-xl border border-white hover:bg-gray-100 focus:ring-1 focus:ring-gray-400">
                Learn more 
            </Link>  
        </div>
    </div>
</section>


  );
};

export default HeroSection;