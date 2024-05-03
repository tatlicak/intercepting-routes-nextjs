# Intercepting Route

- Önizlemeli Route'lar
- Bir detay sayfasına yönlendirilen linke tıkladığımızda öncelikle bir model açılır. Eğer sayfayı yenilersek veya url üzerinden o sayfaya doğrudan erişmek istersek modal yerine detay sayfasını görürüz. 
- Genelde detay sayfalarında veya login/register kullanılır.

# CSR vs SSR 

- CSR => Client Side Rendering
- SSR => Server Side Rendering
- - In CSR page is rendered in client computer. Js Code and blank HTML page receive from server

- In next js, app rendering is done in server. This is important for SEO
# Note
- NEXT JS defines as server component unless we defines client component

# Data Fetching

Next.js api den çekilen veriyi belirli bir süre cache'de tutar. Veriyi çeken fonksiyonu o süre içerisinde her çağırdığımızda api'den veriyi almak yerine önceki istekten elde ettiği ve cache'de tuttuğu veriyi bize getirir.
- Veriyi birkaç sayfa içerisinde kullanmak istiyorsak  veri çeken  fonksiyonları o sayfalarda çağırıp kullanırız.
- Varsayılan olarak bütün api istekleri cache'de tutulur. Ama çektiğimiz veri türü ve yerine göre bunu değiştirmek isteriz. 
    Örneğin; B,r alışveriş sistesinin sepet sayfasına her girdiğimizde api'den güncel verileri alamasını bekleriz veya sosyal medya sitesinin anasayfasını her yenilediğimizde api'den güncel verileri almasını isteriz.
    Bir blog sitesinin bir makale sayfasında her bağlantı yapıldığında tekrar api isteği atılmasına gerek yoktur sayfanın anlık olarak değişme ihtimali düşüktür.

- revalidation: Next.js bazı sayfaları statik oluşturup kullanıcıya sürekli bu statik sayfayı sunar.
Biz bu statik sayfanın ne sıklıkla tekrar oluşturulması gerektiğini belirleyebiliyoruz.

```javascript
//fetching data function
export const getData = async () => { 

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/3',

        {
        cache: 'no-store', //no store page in cache
        next: { revalidate: 30 }} // rerender page after 30 seconds

        );
    return res.json();
} ```

