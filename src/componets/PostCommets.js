const PostComments = ({postComments}) => {

    const {id, postId, name, email, body} = postComments;

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostComments};