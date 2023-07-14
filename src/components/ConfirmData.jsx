import { ErrorMessage } from 'formik';
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs"; 

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field } from "formik";
import {ConfirmDataSchema} from "../schemas/ConfirmDataSchema";

const ConfirmData = () => {
    const { setStep } = useContext(NavigationState);

    const handleSubmit = () => {
        console.log("Formulario enviado exitosamente...");
    };

    const initialValues = {
        fName: "",
        lName: "",
        age: "",
        email: "",
        phoneNum: "",
        experience: "",
        taller: "",
        mode: "",
        hour: "",
    };

    return (
        <div className="cards-container">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ConfirmDataSchema}
            >
                <Form autoComplete="off" noValidate >
                    <h2>Confirmación de datos <BsClipboard2Check className="confirm-icon"/></h2>
                    <div className="close-container">
                        <IoCloseCircleOutline className="close-icon" onClick={() => setStep("participationdetails")}/>
                    </div>
                    <p>Por favor confirme los datos ingresados...</p>
                    <h3>Información personal</h3>
                    <fieldset>
                        <h4>Nombre</h4>
                        <Field
                            type="text"
                            required
                            id="fName"
                            placeholder="Nombre"
                            name="fName"
                        />
                    <div className="error-container">
                        <ErrorMessage name="fName" component="div" className="error" />
                    </div>
                    </fieldset>
                    <fieldset>
                        <h4>Apellido</h4>
                        <Field
                            type="text"
                            required
                            id="lName"
                            placeholder="Apellido"
                            name="lName"
                        />
                        <div className="error-container">
                            <ErrorMessage name="lName" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Edad</h4>
                        <Field
                            type="text"
                            required
                            id="age"
                            placeholder="Edad"
                            name="age"
                        />
                        <div className="error-container">
                            <ErrorMessage name="age" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Correo electrónico</h4>
                        <Field
                            type="email"
                            required
                            id="email"
                            placeholder="Correo electrónico"
                            name="email"
                        />
                        <div className="error-container">
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Número de teléfono</h4>
                        <Field
                            type="text"
                            required
                            id="phoneNum"
                            placeholder="Número de télefono"
                            name="phoneNum"
                        />
                        <div className="error-container">
                            <ErrorMessage name="phoneNum" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Experiencia previa</h4>
                        <Field as="select" id="experience" required name="experience">
                            <option value="">Experiencia</option>
                            <option value="opt1">Principiante</option>
                            <option value="opt2">Intermedio</option>
                            <option value="opt3">Avanzado</option>
                        </Field>
                        <div className="error-container">
                            <ErrorMessage name="experience" component="div" className="error" />
                        </div>
                    </fieldset>
                        <h3>Datos del taller</h3>
                    <fieldset>
                        <h4>Taller seleccionado</h4>
                        <Field as="select" id="taller" required name="taller">
                            <option value="">Selección de taller</option>
                            <option value="opt1">Estructura y diseño floral</option>
                            <option value="opt2">Arte floral creativo</option>
                            <option value="opt3">Cuidados y mantenimiento de las flores</option>
                            <option value="opt4">Sistema de climatización en floristeria</option>
                            <option value="opt5">Clasificación de las flores</option>
                        </Field>
                        <div className="error-container">
                            <ErrorMessage name="taller" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Modalidad seleccionada</h4>
                        <Field as="select" id="mode" required name="mode">
                            <option value="">Modalidad</option>
                            <option value="opt1">Virtual</option>
                            <option value="opt2">Presencial</option>
                        </Field>
                        <div className="error-container">
                            <ErrorMessage name="mode" component="div" className="error" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <h4>Horario seleccionado</h4>
                        <Field as="select"  id="hour" required name="hour">
                            <option value="">Horario</option>
                            <option value="opt1">9:00 a.m</option>
                            <option value="opt2">2:00 p.m</option>
                            <option value="opt3">7:00 p.m</option>
                        </Field>
                        <div className="error-container">
                            <ErrorMessage name="hour" component="div" className="error" />
                        </div>
                    </fieldset>
                    <div className="confirm-btn-container">
                        <button type="submit">Confirmar</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ConfirmData;