import photo1 from './photos/1.avif';
import photo2 from './photos/2.avif';
import photo3 from './photos/3.avif';
import photo4 from './photos/4.avif';
import photo5 from './photos/5.avif';
import photo6 from './photos/6.avif';
import photo7 from './photos/7.avif';

//image type in next js
import { StaticImageData } from 'next/image';

//Each object type in data
export type CustomImage = {
    id:string;
    name:string;
    src:StaticImageData;
    photographer:string;
    location:string;
}

//instant data
export const data: CustomImage[] = [
    {
        id:'1',
        name:'Picture-1',
        src: photo1,
        photographer:'Photographer 1',
        location:'Eskişehir',

    },
    {
        id:'2',
        name:'Picture-2',
        src: photo2,
        photographer:'Photographer 2',
        location:'İstanbul',

    },
    {
        id:'3',
        name:'Picture-3',
        src: photo3,
        photographer:'Photographer 3',
        location:'Diyarbakır',

    },
    {
        id:'4',
        name:'Picture-4',
        src: photo4,
        photographer:'Photographer 4',
        location:'Manisa',

    },
    {
        id:'5',
        name:'Picture-5',
        src: photo5,
        photographer:'Photographer 5',
        location:'Antalya',

    },
    {
        id:'6',
        name:'Picture-6',
        src: photo6,
        photographer:'Photographer 6',
        location:'Kocaeli',

    },
    {
        id:'7',
        name:'Picture-7',
        src: photo7 ,
        photographer:'Photographer 7',
        location:'Edirne',

    }
];
