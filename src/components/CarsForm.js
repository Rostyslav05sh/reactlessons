import {useForm} from "react-hook-form";
import {carsService} from "../services";
import {useEffect} from "react";

const CarsForm = ({setCarForUpdate, carForUpdate, setTrigger}) => {

    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm();


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);
    const save = async (car) => {
        await carsService.create(car)
        setTrigger(prev = !prev)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'}/>
                <input type="text" placeholder={'price'}/>
                <input type="text" placeholder={'year'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarsForm};