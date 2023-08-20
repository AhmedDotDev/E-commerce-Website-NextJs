import Link from 'next/link'
import CategoryCards from '../components/category_cards'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroSection from '../components/hero'
import { Image as IImage } from 'sanity'
import { client } from '../lib/sanityClient'
import CategoryCardsHome from '@/components/category_cards_home'
import Features from '@/components/feature'
import Gallery from '@/components/gallery'
import Accordian from '@/components/accordian'


 const getCat = async () => {
  const res = await client.fetch(`*[_type == 'category'] | order(_random) [0...4]`);
  return res;
}

 const getPro = async () => {
  const res = await client.fetch(`*[_type == 'product'] | order(_random) [0...5]`);
  return res;
}
const getImg = async () => {
  const res = await client.fetch(`*[_type == 'product'] | order(_random) [0...16]`);
  return res;
}


export interface ICat {
  _id: string,
  name: string,
  image: IImage
}
export interface ICategory {
  _id: string,
  name: string,
  description: string,
  image: IImage
}

export interface IProduct {
  _id: string,
  title: string,
  description: string,
  image: IImage,
  price: Number,
  category: {
    _ref: string
  }
}

const getC = async (products: IProduct[]) => {
  const categoryRefs = products.map(product => product.category._ref);
  const data = await client.fetch(`*[ _type == 'category' && _id in $categoryRefs]`, {
    "categoryRefs": categoryRefs
  });

  return data;
}

export default async function Home() {
  const data: ICat[] = await getCat();
  const pro_data: IProduct[] = await getPro();
  const img_data: IProduct[] = await getImg();
  const cat: ICat[] = await getC(pro_data);

  // const breadcrumbItems = [
  //   { label: 'Home', url: '/' },
  //   { label: 'Categories', url: '/shop/' },
  //   { label: 'Product', url: '/shop/category/' },
  // ];

  return (

    < div >
      <Header />
      <HeroSection />
      {/* Category Section */}



      <section className="prefix-px max-w-screen-6xl w-full my-10">

        <div>
          <h3 className="font-bold text-3xl text-gray-800 leading-5">
          Popular categories
          </h3>
          <h5 className="text-gray-800 font-light text-lg pt-2 mb-5">
            Explore diverse collections of our most incredible high-resolution,
            royalty-free, stock assets
          </h5>
        </div>
        <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] gap-x-5">
          {data.map(
            (item: any) => { return (<div key={item._id} > <CategoryCardsHome category={item} /></div>) }
          )}

        </div>
      </section>

      <div className='prefix-px'>
<Features />
</div>

      <div className='prefix-px my-5'>
      <div>
          <h3 className="font-bold text-3xl text-gray-800 leading-5">
          Explore Our Digital Delights
          </h3>
          <h5 className="text-gray-800 font-light text-lg pt-2 mb-5">
          Dive into a world of innovative digital products that inspire and elevate your online experience. Discover the future of creativity.
          </h5>
        </div>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto,auto] custom:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto] gap-x-5 gap-y-3">
      {img_data.map((item: any, index: number) => {
              const catItem = cat.find((catItem) => catItem._id === item.category._ref);
              const catName = catItem ? catItem.name : 'Photos'; // Retrieve the category name

              return (
                <div className='w-[100%] h-[240px]' key={item._id}>
                  <Gallery product={item} catname={catName} />
                </div>
              );
            })}
      </div>
      <div className='flex justify-center'>
      <Link href={'/shop'} className='text-center'>
          <button className='text-lg block lg:m-0 bg-gradient-to-l from-primary-lightpink to-primary-pink py-3 px-14 text-white rounded-xl my-8'>
         
              View All -{'>'}
          
          </button>
          </Link>
          </div>
      </div>

      <div className='prefix-px my-10'>
        <div>
      <Accordian/>
      </div>
      </div>
      {/*@ts-ignore */}
      <Footer />

    </div >
  )
}
