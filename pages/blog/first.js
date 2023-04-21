import Link from "next/link"
const FirstBlog = () => {
    return (
        <div>
            <h2>This is first blog page</h2>
            <Link href='/blog'> Return To Blogs</Link>
        </div>
    )
}

export default FirstBlog