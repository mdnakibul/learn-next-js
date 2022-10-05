import Link from "next/link"

const Products = ({ productId = 100 }) => {
    return (
        <div>
            <ol>
                <li><Link href="/product/1"><a>Product - 1</a></Link></li>
                <li><Link href="/product/2"><a>Product - 2</a></Link></li>
                <li><Link href="/product/3" replace><a>Product - 3</a></Link></li>
                <li><Link href={`/product/${productId}`}><a>Product - {productId}</a></Link></li>
            </ol>

            <Link href="/">
                <a>Back To Home Page</a>
            </Link>
        </div>
    )
}

export default Products