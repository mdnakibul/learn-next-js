import Link from "next/link"
import { useRouter } from "next/router"
const Home = () => {
  const router = useRouter()
  const shoppingHandler = () => {
    router.push("/product")
  }
  return (
    <div>
      <h2>Home Page</h2>
      <ul style={{ listStyle: 'none' }}>
        <li><Link href="/blog">
          <a>Blog</a>
        </Link></li>
        <li><Link href="/product">
          <a>Products</a>
        </Link></li>
      </ul>

      <button onClick={shoppingHandler}>Go To Shopping</button>


    </div>
  )
}

export default Home