import {useForm} from "react-hook-form";

const CommentForm = () => {

const {reset, register, handleSubmit} = useForm();

const save = (comment) => {
    console.log(comment)
}

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            <input type="text" placeholder={'postId'} {...register('postId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};