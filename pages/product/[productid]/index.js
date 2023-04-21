import Link from "next/link"
import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter()
    const productId = router.query.productid
    return (
        <div>
            <h2>Product Details - {productId}</h2>
            <Link href={`/product/${productId}/reviews`}>See Reviews</Link> <br />
            <Link href="/product"><a>Back To Products</a></Link><br />
            <Link href="/"><a>Back To Home</a></Link>
        </div>
    )
}

export default ProductDetails