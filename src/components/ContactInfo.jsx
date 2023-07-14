import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactInfoSchema } from "../schemas/ContactInfoSchema";


const ContactInfo = () => {
    
    const { setStep } = useContext(NavigationState);

    const handleSubmit = () => {
        setStep("tallerdetails");
    };

    const initialValues = {
        email: "",
        phoneNum: "",
        address: "",
    };

    return (
    <main>
        <div className="card">
        <button className="back-btn" onClick={() => setStep("personalinfo")}>
            <MdOutlineKeyboardBackspace />
        </button>
        <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
        <h3>Información de contacto</h3>
        <Formik
            initialValues={initialValues}
            validationSchema={ContactInfoSchema}
            onSubmit={handleSubmit}
        >
            <Form autoComplete="off" noValidate>
                <fieldset>
                    <Field
                        type="email"
                        required
                        id="email"
                        autoFocus
                        placeholder="Correo electrónico"
                        name="email"
                    />
                    <div className="error-container">
                        <ErrorMessage name="email" component="p" className="error" />
                    </div>
                </fieldset>
                <fieldset>
                    <Field
                        type="text"
                        required
                        id="phoneNum"
                        placeholder="Número de télefono"
                        name="phoneNum"
                    />
                    <div className="error-container">
                        <ErrorMessage name="phoneNum" component="p" className="error" />
                    </div>
                </fieldset>
                <fieldset>
                    <Field
                        type="text"
                        id="address"
                        placeholder="Dirección residencial"
                        name="address"
                    />
                    <p className="optional">(Opcional)</p>
                </fieldset>
                <button type="submit">Siguiente</button>
            </Form>
        </Formik>
        </div>
    </main>
    );
};

export default ContactInfo;