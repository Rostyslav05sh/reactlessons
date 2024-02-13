import {useForm} from "react-hook-form";
import {carService} from "../Services/CarService";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../Validators/CarValidator";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState:{isValid,errors},setValue} = useForm(
        {
            mode:'all',
            resolver:joiResolver(carValidator)
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

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.preice && <div>{errors.preice.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};