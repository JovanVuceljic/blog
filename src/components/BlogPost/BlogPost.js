import Placeholder from "../Placeholder/Placeholder"
import './blogPost.scss'

const BlogPost = () => {
    return (
        <article className="blog-post">
            <div className="post-header">
                <Placeholder dimension={80} />
                <div className="headline">
                    <h2>Blog post 1</h2>
                    <span>Posted date: 11.07.2021</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.ccnnvvvvccc,,,,,,,iiiiiiik,mk</p>

            <div className="post-gallery">
                <Placeholder dimension={100} />
                <Placeholder dimension={100} />
                <Placeholder dimension={100} />
            </div>
        </article>
    )
}

export default BlogPost