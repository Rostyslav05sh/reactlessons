import {useForm} from "react-hook-form";
import {apiService, carsService} from "../services";
import axios from "axios";
import {useState} from "react";

const CarsForm = () => {

const {register, reset, handleSubmit} = useForm();

const save =  (car) => {
  
}

    return (
        <div>
            <form>
                <input type="text" placeholder={'brand'}/>
                <input type="text" placeholder={'price'}/>
                <input type="text" placeholder={'year'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarsForm};