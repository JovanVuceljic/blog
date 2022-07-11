import { useEffect, useState } from "react"
import axios from 'axios';
import BlogPost from "../BlogPost/BlogPost"
import "./page.scss"

const Page = () => {

    const [blogPosts, setBlogPosts] = useState([])
    
    const fetchBlogPosts = async () => {
        const apiUrl = "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts";

        await axios.get(apiUrl)
            .then((response) =>
                setBlogPosts(response.data.resultData || []))
            .catch(err => {
                console.error("Err: ", err);
            })
    }

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <div className="page">
            {blogPosts.lenght !== 0 && blogPosts.map(post => <BlogPost key={post.id} {...post} />)}
        </div>
    )
}

export default Page