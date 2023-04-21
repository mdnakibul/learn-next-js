import Link from "next/link"
const SecondBlog = () => {
    return (
        <div>
            <h2>This is second blog page</h2>
            <Link href='/blog'> Return To Blogs</Link>
        </div>
    )
}

export default SecondBlog