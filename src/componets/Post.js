import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post

    const navigate = useNavigate();
    
    return (
        <div>
            <div>{id}. user title: {title}</div>
            <button onClick={() => navigate('/postDetails', {state: {postId: id}})}>post-details</button>
        </div>
    );
};

export {Post};