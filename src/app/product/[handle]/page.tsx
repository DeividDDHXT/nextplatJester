"use client"

import { useParams, useSearchParams } from "next/navigation"

// interface ProductPageProps{

// searchParams: {
// id:string

// }

// }




export default function ProductPage() {
    
    // console.log(props.searchParams.id)

    const params = useParams()
    const searchParams =useSearchParams()

    const id = searchParams.get("id")
    console.log(searchParams, id)

    return (<h1>Product</h1>)
    
}