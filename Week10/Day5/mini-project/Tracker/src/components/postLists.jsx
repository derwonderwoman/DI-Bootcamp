import Reaction from "./Reaction";
import { useEffect } from "react";
import { usePostsSelector, useFetchPost, usePostStatus} from "../app/postHooks";

 const Posts = (props) => {
    const posts = usePostsSelector();
    const status = usePostStatus()
    const callFetchPosts = useFetchPost();
    
    useEffect(() =>{
        callFetchPosts();
    },[])

    if(status === "loading") return <h3>Loading...</h3>
    if(status === "failed") return <h3>Wrong...</h3>
  return (
    <div>
        <h1>Posts</h1>
        {posts && posts.map((post) => {
        return (<div key ={post.id}><h2>{post.title}</h2> 
        <p>{post.body}</p>
        <Reaction post = {post}/>
        </div>)
        })}
    </div>
  )
}

export default Posts;