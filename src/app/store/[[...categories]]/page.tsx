// interface CategoryProps{
//     params: {

//         categories:string[],
//         searchParams: string
//     }
// }


// export default function Category(props:CategoryProps){

//     const {categories}= props.params
//     console.log(props)
//     console.log(categories)

//     return(


//         <h1>Category dinamica {categories}</h1>
//     )
// }
import { ProductsWrapper } from "../../../components/Store/ProductWrapper"
// import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "../../../services/shopify"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()
  const { categories } = props.params



  return (
    <ProductsWrapper products={products} />
  )
}