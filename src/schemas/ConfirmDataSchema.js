import * as Yup from 'yup';

export const ConfirmDataSchema = Yup.object().shape({
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

    email: Yup.string()
        .email("Correo valido requerido")
        .required("Correo requerido"),

    phoneNum: Yup.string()
        .matches(/^\d+$/, "Solo se permiten números")
        .min(7, 'Se requieren al menos 7 caracteres')
        .required('Teléfono requerido'),

    experience: Yup.string()
        .required("Selección requerida"),

    taller: Yup.string()
        .required("Selección requerida"),

    mode: Yup.string()
        .required("Selección requerida"),

    hour: Yup.string()
        .required("Selección requerida"),

});