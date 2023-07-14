import * as Yup from 'yup';

export const ParticipationDetailsSchema = Yup.object().shape({
    selectExperience: Yup.string()
        .required("Selección requerida"),

    experience: Yup.string()
        .required("Selección requerida"),
});