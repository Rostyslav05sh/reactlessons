import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters, min 1 max 20'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.min':'min 0',
        'number.max':'max 0'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).messages({
        'number.min':'min year 1990',
        'number.max':`max year ${new Date().getFullYear()}`
    })
})

export {
    carValidator
}