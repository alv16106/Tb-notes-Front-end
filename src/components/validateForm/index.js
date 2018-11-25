import validator from 'email-validator';

//Validacion ofline
export const required = value =>
    value 
    ? undefined 
    : 'Este campo es requerido';

export const minLength = value =>
    value.length < 8
    ? 'El valor ingresado es muy corto'
    : undefined;

export const maxLength = value =>
    value.length > 15
    ? 'El valor ingresado es muy largo' 
    : undefined;

export const validEmail = value =>
    !validator.validate(value) 
    ? 'El email ingresado no es valido' 
    : undefined;