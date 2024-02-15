import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {PostDetail} from "./PostDetail";
import {postService, postService as postsService} from "../services/postService";
import {PostComments} from "./PostCommets";

const PostsDetails = () => {

    const [postsDetails, setPostsDetails] = useState([])
    const {state: {postId}} = useLocation();
    const [postsComments, setPostsComments] = useState([])

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPostsDetails(data))
        postService.getCommentsByPostId(postId).then(({data}) => setPostsComments(data))
        }, [postId]);

    return (
        <div>
            {postsDetails && <PostDetail postDetail={postsDetails}/>}
            {postsComments.map(postComments => <PostComments key={postComments.id} postComments={postComments}/>)}
        </div>
    );
};

export {PostsDetails};