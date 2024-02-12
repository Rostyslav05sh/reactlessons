import {useForm} from "react-hook-form";

const UserForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const save = (user) => {
        console.log(user)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};