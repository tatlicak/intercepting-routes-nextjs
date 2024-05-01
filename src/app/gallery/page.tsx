'use client';

import Link from 'next/link';
import { data } from './constants';
import Image from 'next/image';


const Gallery = () => {
    return (

        <main className='container mx-auto p-4'>
            <h1 className='text-center text-3xl font-bold my-4'>
                Custom Images Examples for Intercepting Routing
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-20'>
                { 
                    data.map((item) => (
                        <Link href={`/gallery/${item.id}`}>
                        <Image src={item.src} alt={item.name} className='w-full object-cover aspect-square rounded-md cursor-pointer shadow hover:shadow-white'/>
                        </Link>
                    ))
                }
            </div>

        </main>
    );
};

export default Gallery