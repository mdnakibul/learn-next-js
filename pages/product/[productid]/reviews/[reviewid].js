import { useRouter } from "next/router"

const Review = () => {
    const router = useRouter()
    const { productid, reviewid } = router.query
    return (
        <div>
            <h1>Product id {productid} and review id {reviewid}</h1>
        </div>
    )
}

export default Review