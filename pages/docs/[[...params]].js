import { useRouter } from "next/router"

const Doc = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)

    if (params && params.length > 2) {
        return (
            <h2>This is example page. URL: docs/{params[0]}/{params[1]}/{params[2]}</h2>
        )
    }
    if (params && params.length > 1) {
        return (
            <h2>This is Concept page. URL: docs/{params[0]}/{params[1]}</h2>
        )
    }
    if (params && params.length > 0) {
        return (
            <h2>This is Feature page. URL: docs/{params[0]}</h2>
        )
    }

    return (
        <div>
            <h2>Documentation Home page</h2>
        </div>
    )
}

export default Doc