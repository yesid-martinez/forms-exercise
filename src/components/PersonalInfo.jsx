import { IoIosArrowDown } from "react-icons/io";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { PersonalInfoSchema } from "../schemas/PersonalInfoSchema";

const PersonalInfo = () => {
    const { setStep } = useContext(NavigationState);

    const handleSubmit = () => {
        setStep("contactinfo");
    };

    const initialValues = {
        fName: "",
        lName: "",
        age: "",
        genre: "",
    };

    return (
        <main>
            <div className="card">
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Información personal</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={PersonalInfoSchema}
                    onSubmit={handleSubmit}
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
                                id="genre"
                                name="genre"
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