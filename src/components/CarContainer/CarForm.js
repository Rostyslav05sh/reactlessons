import {useForm} from "react-hook-form";
import {carService} from "../Services/CarService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState:{isValid,errors},setValue} = useForm(
        {
            mode:'all'
        }
    );

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev =>!prev)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {parent:/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/})}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: 0,
                max: 1000000
            })}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: 1990,
                max: new Date().getFullYear()
            })}/>
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export {CarForm};