import Link from "next/link"

const Blog = () => {
    return (
        <div>
            <h2>This is blog page</h2>
            <ol>
                <li> <Link href='/blog/first'>First Blog</Link> </li>
                <li> <Link href='/blog/second'>Second Blog</Link> </li>
            </ol>
            <Link href='/'>Return To Home</Link>
        </div>
    )
}

export default Blog