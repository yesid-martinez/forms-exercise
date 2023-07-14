import * as Yup from 'yup';

export const ContactInfoSchema = Yup.object().shape({
    email: Yup.string()
        .email("Correo valido requerido")
        .required("Correo requerido"),

    phoneNum: Yup.string()
    .matches(/^\d+$/, "Solo se permiten números")
    .min(7, 'Se requieren al menos 7 caracteres')
    .required('Teléfono requerido'),
});