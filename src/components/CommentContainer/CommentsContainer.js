import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {commentService} from "../Services/CommentService";

const CommentsContainer = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);



    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};