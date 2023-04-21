import { useRouter } from "next/router"
import Link from "next/link"
const Review = () => {
    const router = useRouter()
    const { productid } = router.query
    return (
        <div>
            <h1>Reviews of Product id {productid} </h1>
            <Link href={`/product/${productid}/reviews/1`}>Review 1</Link>
        </div>
    )
}

export default Review