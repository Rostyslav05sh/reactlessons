import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {commentService} from "../../Services/CommentService";
import {Post} from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const {state:{postId}} = useLocation();

    useEffect(() => {
        commentService.getPostById(postId).then(({data}) => setPosts(data))
    }, [postId]);


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};


export {Posts};