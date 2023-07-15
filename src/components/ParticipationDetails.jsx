import fdcLogo from "../assets/fdc-logo.png";

import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ParticipationDetailsSchema } from "../schemas/ParticipationDetailsSchema";

import { useSelector, useDispatch } from 'react-redux';
import { updateParticipationDetails } from "../features/forms/formsSlice";

const ParticipationDetails = () => {
    const { setStep } = useContext(NavigationState);

    const participationDetails = useSelector((state) => state.data.formsData.participationDetails);
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);

        dispatch(updateParticipationDetails(values));
        setStep("confirmdata");
    };


    return (
        <main>
            <div className="card">
                <button className="back-btn" onClick={() => setStep("tallerdetails")}>
                    <MdOutlineKeyboardBackspace />
                </button>
                <img src={fdcLogo} alt="Flores de colores"/>    
                <h3>Detalles del participación</h3>
                <Formik 
                    initialValues={participationDetails}
                    onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}
                    validationSchema={ParticipationDetailsSchema}
                >
                    <Form autoComplete="off" noValidate>
                    <fieldset>
                        <p className="details">
                            ¿Ha asistido a talleres de arreglos florales anteriormente?
                        </p>
                        <div className="selection-container">
                            <div className="selection-item">
                                <label htmlFor="trueExperience">Si</label>
                                <Field
                                type="radio"
                                id="trueExperience"
                                name="selectExperience"
                                required
                                value="trueExperience"
                                />
                            </div>
                            <div className="selection-item">
                                <label htmlFor="falseExperience">No</label>
                                <Field
                                    type="radio"
                                    id="falseExperience"
                                    name="selectExperience"
                                    required
                                    value="falseExperience"
                                />
                            </div>
                        </div>
                        <div className="error-container">
                            <ErrorMessage name="selectExperience" component="p" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <Field as="select" id="experience" required name="experience">
                            <option value="">Experiencia</option>
                            <option value="opt1">Principiante</option>
                            <option value="opt2">Intermedio</option>
                            <option value="opt3">Avanzado</option>
                        </Field>
                        <div className="error-container">
                            <ErrorMessage name="experience" component="p" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <p className="details">
                            Indique las flores que les gustaría utilizar en los arreglos durante el taller.
                        </p>
                        <Field
                            type="text"
                            id="preferences"
                            placeholder="Ejemplo: Rosas, girasoles, lirios..."
                            name="preferences"
                        />
                    </fieldset>
                    <fieldset>
                        <p className="details">
                            Cuentenos qué expectativas tiene o qué le gustaría lograr al participar en el taller de arreglos florales.
                        </p>
                        <Field
                        type="text"
                        id="expected"
                        placeholder="Ejemplo: Espero aprender nuevas técnicas para arreglos..."
                        name="expected"
                        />
                    </fieldset>
                    <button type="submit">Siguiente</button>
                    </Form>
                </Formik>
            </div>
        </main>
    );

};

export default ParticipationDetails;
