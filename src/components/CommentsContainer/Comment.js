import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const {id, postId, name, email,body} = comment;
    const navigate = useNavigate();
    
    return (
        <div onClick={() => navigate('posts', {state: {postId: postId}})}>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
        </div>
    );
};

export {Comment};