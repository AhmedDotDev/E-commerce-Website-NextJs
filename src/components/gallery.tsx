import { IProduct } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/lib/image';
interface ProductCardsProps {
    product: IProduct;
    catname: string;
}

const Gallery=({product,catname}:ProductCardsProps)=>{
    return(
        <div id='gallery' className='shadow transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>
           <Link href={`/shop/${catname}/${product.title}`}> <Image width={400} height={240} className="w-[100%] h-[240px] max-w-full rounded-lg" src={urlForImage(product.image).url()} alt=""/>
           </Link>
        </div>
)}

export default Gallery;