

// const getProducts = async() =>{

//     const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`, {
//         headers: new Headers({
//             'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ||""

//         })
//     })

//     const data = await response.json()
//         return data
    
// }


// export const MainProducts = async () =>{
//  const products = await getProducts()

//  console.log(products)
//     return(
// <section>

// <h1>MainProducts</h1>

// </section>


//     )
// }
import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { getProducts } from 'app/services/shopify/product'


export const MainProducts = async () => {
  const reponse = await fetch('http://localhost:3000/api/')
  const { products } = await reponse.json()
  
  
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
}