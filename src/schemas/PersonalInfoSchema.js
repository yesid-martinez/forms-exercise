import * as Yup from 'yup';

export const PersonalInfoSchema = Yup.object().shape({
    fName: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('Nombre requerido'),

    lName: Yup.string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .required('Apellido requerido'),
    
    age: Yup.string()
    .matches(/^\d+$/, "Solo se permiten números")
    .max(3, 'Edad válida requerida')
    .required('Edad requerida'),
});

