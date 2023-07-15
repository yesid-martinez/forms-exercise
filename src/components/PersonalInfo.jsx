import fdcLogo from "../assets/fdc-logo.png";
import { IoIosArrowDown } from "react-icons/io";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { PersonalInfoSchema } from "../schemas/PersonalInfoSchema";

import { useSelector, useDispatch } from 'react-redux';
import { updatePersonalInfo } from "../features/forms/formsSlice";

const PersonalInfo = () => {
    const { setStep } = useContext(NavigationState);

    const personalInfo = useSelector(state => state.data.formsData.personalInfo);
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        // Evitar el envío predeterminado del formulario
        setSubmitting(false);

        dispatch(updatePersonalInfo(values));
        setStep("contactinfo");
    };

    return (
        <main>
            <div className="card">
                <img src={fdcLogo} alt="Flores de colores"/>
                <h3>Información personal</h3>
                <Formik
                    initialValues={personalInfo}
                    validationSchema={PersonalInfoSchema}
                    onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}
                >
                    <Form autoComplete="off" noValidate>
                        <fieldset>
                            <Field
                                type="text"
                                required
                                id="fName"
                                autoFocus
                                placeholder="Nombre"
                                name="fName"
                            />
                            <div className="error-container">
                                <ErrorMessage name="fName" component="p" className="error" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <Field
                                type="text"
                                required
                                id="lName"
                                placeholder="Apellido"
                                name="lName"
                            />
                            <div className="error-container">
                                <ErrorMessage name="lName" component="p" className="error" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <Field
                                type="text"
                                required
                                id="age"
                                placeholder="Edad"
                                name="age"
                            />
                            <div className="error-container">
                                <ErrorMessage name="age" component="p" className="error" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="select-icon">
                                <IoIosArrowDown />
                            </div>
                            <Field as="select"
                                id="gender"
                                name="gender"
                            >
                                <option value="">Género</option>
                                <option value="female">Femenino</option>
                                <option value="male">Masculino</option>
                                <option value="another">Otro</option>
                            </Field>
                            <p className="optional">(Opcional)</p>
                        </fieldset>
                        <button type="submit">Siguiente</button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
};

export default PersonalInfo;