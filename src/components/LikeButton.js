import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("purple");

    const colors = ['purple','blue','green','yellow','orange','red']

    const incrementLikes = () => {
        setLikes(likes + 1)
        setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);    } 

    return (
        <button onClick={incrementLikes} style={{ backgroundColor }}>{likes} {likes === 1 ? "like" : "likes"}</button>
    )
}

export default LikeButton;