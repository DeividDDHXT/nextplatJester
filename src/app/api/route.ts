import { getProducts } from "app/services/shopify/product"



export async function GET() {
    const products = await getProducts()

return Response.json({products})
}