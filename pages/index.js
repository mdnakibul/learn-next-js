import Link from "next/link"

const Home = () => {
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


    </div>
  )
}

export default Home