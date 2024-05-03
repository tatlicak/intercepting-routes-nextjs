
//fetching data function
export const getData = async () => { 

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/3',

       /*  {
        cache: 'no-store', //no store page in cache
        next: { revalidate: 30 }} */ // rerender page after 30 seconds

        );
    return res.json();
}

export const getData2 = async () => { 

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/4',

        );
    return res.json();
}

export const getData3 = async () => { 

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/5',

        {
        cache: 'no-store', //no store page in cache
        next: { revalidate: 30 }} // rerender page after 30 seconds

        );
    return res.json();
}


export type CustomImage = {
    id:string;
    name:string;
    photographer:string;
    location:string;
}

// component must asyncronous for api request
const Home = async () => {

  /*   const user = await getData(); */
const promise = getData();
const promise2 = getData2();
const promise3 = getData3();

// we do all requests at the same time with Promise all method
// it returns response data array
const [data1, data2, data3] = await Promise.all([promise, promise2, promise3]);

  return (
    <div>
        <h1>{data1.name}</h1>
        <h1>{data2.name}</h1>
        <h1>{data3.name}</h1>
        
    </div>
    
    )
  
}

export default Home