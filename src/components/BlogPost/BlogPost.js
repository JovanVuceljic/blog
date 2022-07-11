import Placeholder from "../Placeholder/Placeholder"
import axios from 'axios'
import './blogPost.scss'

const BlogPost = ({ id, createdAt, text, title, updatedAt, categoryId }) => {

    const formatedDate = date => {
        const d = new Date(date)
        return `${d.getDate()}.${d.getDate()}.${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`
    }

    const deleteBlogPost = async () => {
        const apiUrl = "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts";

        await axios.delete(`${apiUrl}/${id}`)
            .then((response) => console.log("deleted", response))
            .catch(err => console.error("Err: ", err))
    }


    const handleDelete = id => {
        if (window.confirm("Are you sure you want to delete this post?"))
            deleteBlogPost(id)
    }

    return (
        <article className="blog-post">
            <div className="post-header">
                <Placeholder dimension={80} />
                <div className="headline">
                    <h2>{title}</h2>
                    <span>Posted date: {formatedDate(createdAt)} by Some Person</span>
                </div>
                <div className="btn-wrap">
                    <button className="btn">Edit</button>
                    <button className="btn" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
            <p>{text}</p>

            <div className="post-gallery">
                <Placeholder dimension={100} />
                <Placeholder dimension={100} />
                <Placeholder dimension={100} />
            </div>
        </article>
    )
}

export default BlogPost