import posts from "../../data/posts.json"
import {Link } from "react-router-dom";
import Blog from "../BlogpostID/Blog";
import "./blogoverzicht.css"


function BlogOverzicht(){
    return(
        <><div className="outercontainer">
            <div className="container">
                <div className="innercontainer">
            <p> {posts.length} Blogs voor jou om  te lezen</p>
                </div>
            </div>
        </div>
            <div className="outercontainer">
                <div className="blogcontainer">
                    <div className="innercontainerblog">
            <ul>
            {posts.map((post) => {
                return <>

                <li key={post.id}> <Link to={`/blog/${post.id}`} element={<Blog/>}>{post.id}. {post.title}</Link></li>

                </>
                })}
            </ul>
                    </div>
                </div>
            </div>
        </>
            )

}
export default BlogOverzicht;