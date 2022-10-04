import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter()
    const productId = router.query.productid
    return (
        <div>
            <h2>Product Details - {productId}</h2>
        </div>
    )
}

export default ProductDetails