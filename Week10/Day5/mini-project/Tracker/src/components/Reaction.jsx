import { useDispatch } from "react-redux";
import { addReaction } from "../app/postSlice";
import { memo } from "react";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  
  const Reaction = ({post}) => {
    const dispatch = useDispatch();
    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) =>{
        return(
            <button onClick={() => dispatch(addReaction({id:post.id, name}))}>               
            {emoji} {post.reactions[name]}
            </button>
        )
    })
    return <div>{renderReaction}</div>
  }

  export default memo(Reaction);