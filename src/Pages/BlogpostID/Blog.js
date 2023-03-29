
import {Link, useParams} from "react-router-dom";
import posts from "../../data/posts.json"
import "./blog.css"

function Blog(){
    const { id } = useParams();


    const currentPost = posts.find((post) => {
        return post.id === id;
    });

return(
    <>
        <div className="outercontainerblog">
            <div className="blog-container">
                <div >
            <h1> {currentPost.title}</h1>
            <h3> {currentPost.date}</h3>
                </div>
            </div>
        </div>
        <div className="outercontainer">
            <div className="container">
                <div className="innercontainertext">
                    <p>{currentPost.content}</p>
                </div>
            </div>
        </div>
        <div className="nextCon">


        { currentPost.id === "1" ? "" : <Link to={`/blog/${currentPost.id -1}`} element={<Blog/>}><div className="next">  <div key={currentPost.id}>Vorige</div></div></Link>   }


                { currentPost.id >= posts.length ? "" : <Link to={`/blog/${parseInt(currentPost.id)+1}`} element={<Blog/>}> <div className="next">  <div key={currentPost.id}>Volgende</div></div></Link>  }

        </div>

    </>
)

}
export default Blog;