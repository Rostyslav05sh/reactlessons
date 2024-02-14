import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {commentService} from "../../Services/CommentService";
import {Post} from "./Post";

const Posts = () => {

    const [post, setPosts] = useState(null)
    const {state:{postId}} = useLocation();

    useEffect(() => {
        commentService.getPostById(postId).then(({data}) => setPosts(data))
    }, [postId]);


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};


export {Posts};