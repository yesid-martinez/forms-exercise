import * as Yup from 'yup';

export const TallerDetailsSchema = Yup.object().shape({
    taller: Yup.string()
        .required("Selección requerida"),

    mode: Yup.string()
        .required("Selección requerida"),

    hour: Yup.string()
        .required("Selección requerida"),
});