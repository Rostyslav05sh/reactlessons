import {UsersContainer} from "./components/UserContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentContainer/CommentsContainer";

const App = () => {
    return (
        <div>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export {App};