import BlogPost from "../BlogPost/BlogPost"
import "./page.scss"

const Page = () => {
    return (
        <div className="page">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
    )
}

export default Page