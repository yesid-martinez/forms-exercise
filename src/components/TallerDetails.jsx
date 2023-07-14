import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import {TallerDetailsSchema} from "../schemas/TallerDetailsSchema";

const TallerDetails = () => {
    const { setStep } = useContext(NavigationState);

    const handleSubmit = () => {
        setStep("participationdetails");
    };

    const initialValues = {
        taller: "",
        mode: "",
        hour: "",
    };
    
    return (
        <main>
            <div className="card">
                <button className="back-btn" onClick={() => setStep("contactinfo")}><MdOutlineKeyboardBackspace/></button>
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Detalles del taller</h3>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={TallerDetailsSchema}
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