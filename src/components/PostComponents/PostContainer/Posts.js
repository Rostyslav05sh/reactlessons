import {Post} from "./Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../PostServices/axiosService";
import {urls} from "../Postconstants/urls";
import {postService} from "../PostServices/postService";
import {PostDetails} from "./PostDetails";

const Posts = ({/*post*/}) => {
    // const {id, title} = post;
    // let posts = []
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value))
        postService.getAll().then(({data}) => setPosts(data))
    }, []);
    // якщо не використовуввати useState та useEffect то наш return відпрацює набагато швидше бо fetch це буде асинхронна операція
    //коли ми використовуємо useState та useEffect то наш запит відпрацьовує лише один раз тобто немає зациклення
    const getCurrentPost = (post) => {
        setPostDetails(post)
    }
    return (
        <div>
            {/*<h1>{`${id}.`}</h1>*/}
            {/*<p>{title}</p>*/}
            {/*{console.log(posts)}*/}
            {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            <hr/>
            {postDetails!==null && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};