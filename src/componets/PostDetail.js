
const PostDetail = ({postDetail}) => {

    const {id, userId, title, body} = postDetail;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {PostDetail};