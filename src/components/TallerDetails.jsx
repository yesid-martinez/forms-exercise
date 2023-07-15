import fdcLogo from "../assets/fdc-logo.png";

import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import {TallerDetailsSchema} from "../schemas/TallerDetailsSchema";

import { useSelector, useDispatch } from 'react-redux';
import { updateTallerDetails } from "../features/forms/formsSlice"; 

const TallerDetails = () => {
    const { setStep } = useContext(NavigationState);

    const tallerDetails = useSelector((state) => state.data.formsData.tallerDetails);
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);

        dispatch(updateTallerDetails(values));
        setStep("participationdetails");
    };

    return (
        <main>
            <div className="card">
                <button className="back-btn" onClick={() => setStep("contactinfo")}>
                    <MdOutlineKeyboardBackspace />
                </button>
                <img src={fdcLogo} alt="Flores de colores"/>
                <h3>Detalles del taller</h3>
                <Formik
                    initialValues={tallerDetails}
                    validationSchema={TallerDetailsSchema}
                    onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}
                >
                    <Form autoComplete="off" noValidate>
                        <fieldset>
                            <div className="select-icon">
                                <IoIosArrowDown />
                            </div>
                            <Field as="select" id="taller" required name="taller">
                                <option value="">Selección de taller</option>
                                <option value="opt1">Estructura y diseño floral</option>
                                <option value="opt2">Arte floral creativo</option>
                                <option value="opt3">Cuidados y mantenimiento de las flores</option>
                                <option value="opt4">Sistema de climatización en floristeria</option>
                                <option value="opt5">Clasificación de las flores</option>
                            </Field>
                            <div className="error-container">
                                <ErrorMessage name="taller" component="p" className="error"/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="select-icon">
                                <IoIosArrowDown />
                            </div>
                            <Field as="select" id="mode" required name="mode">
                                <option value="">Modalidad</option>
                                <option value="opt1">Virtual</option>
                                <option value="opt2">Presencial</option>
                            </Field>
                            <div className="error-container">
                                <ErrorMessage name="mode" component="p" className="error"/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="select-icon">
                                <IoIosArrowDown />
                            </div>
                            <Field as="select" id="hour" required name="hour">
                                <option value="">Horario</option>
                                <option value="opt1">9:00 a.m</option>
                                <option value="opt2">2:00 p.m</option>
                                <option value="opt3">7:00 p.m</option>
                            </Field>
                            <div className="error-container">
                                <ErrorMessage name="hour" component="p" className="error"/>
                            </div>
                        </fieldset>
                        <button type="submit">Siguiente</button>
                    </Form>
                </Formik>
            </div>
        </main>
    )
}

export default TallerDetails;