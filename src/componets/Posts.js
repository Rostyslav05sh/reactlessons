import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {userService} from "../services/userService";
import {Post} from "./Post";

const Posts = () => {

    const [post, setPost] = useState(null)
    const {state:{userId}} = useLocation();

    useEffect(() => {
        userService.getPostsOfUserById(userId).then(({data}) => setPost(data))
    }, [userId]);
    
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};