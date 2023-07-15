import { BsClipboard2Check } from "react-icons/bs"; 
import {BsPatchCheckFill} from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { Formik, Form, Field, ErrorMessage } from "formik";
import {ConfirmDataSchema} from "../schemas/ConfirmDataSchema";

import { useSelector, useDispatch } from "react-redux";
import { 
    updatePersonalInfo,
    updateContactInfo,
    updateTallerDetails,
    updateParticipationDetails,
} from "../features/forms/formsSlice";

const ConfirmData = () => {
    const { setStep } = useContext(NavigationState);
    const dispatch = useDispatch();

    const personalInfo = useSelector((state) => state.data.formsData.personalInfo);
    const contactInfo = useSelector((state) => state.data.formsData.contactInfo);
    const tallerDetails = useSelector((state) => state.data.formsData.tallerDetails);
    const participationDetails = useSelector((state) => state.data.formsData.participationDetails);
    const data = useSelector((state) => state.data.formsData);

    
    const handleSubmit = (values) => {
        const formsData = {
            personalInfoValues: {
                fName: values.fName,
                lName: values.lName,
                age: values.age,
                gender: personalInfo.gender,
            },
            contactInfoValues: {
                email: values.email,
                phoneNum: values.phoneNum,
                address: personalInfo.address,
            },
            tallerDetailsValues: {
                taller: values.taller,
                mode: values.mode,
                hour: values.hour,
            },
            participationDetailsValues: {
                selectExperience: personalInfo.selectExperience,
                experience: values.experience,
                preferences: personalInfo.preferences,
                expected: personalInfo.expected,
            },
        };
        
        dispatch(updatePersonalInfo(formsData.personalInfoValues));
        dispatch(updateContactInfo(formsData.contactInfoValues));
        dispatch(updateTallerDetails(formsData.tallerDetailsValues));
        dispatch(updateParticipationDetails(formsData.participationDetailsValues));
        
        // `data`: Datos finales que se enviarán al servidor
        console.log(data);
        // No se muestran instantaneamente los cambios (En caso de modificar los valores previos) 
        // debido a que las actualizaciones del estado en  Redux Toolkit pueden ser asincrónicas.

        setStep("confirmeddata")
    };
    
    const initialValues = {
        fName: personalInfo.fName,
        lName: personalInfo.lName,
        age: personalInfo.age,
        email: contactInfo.email,
        phoneNum: contactInfo.phoneNum,
        experience: participationDetails.experience,
        taller: tallerDetails.taller,
        mode: tallerDetails.mode,
        hour: tallerDetails.hour,
    }

    return (
        <div className="cards-container">
            <Formik
                initialValues={initialValues}
                validationSchema={ConfirmDataSchema}
                onSubmit={handleSubmit}
            >
                <Form autoComplete="off" noValidate>
                    <div className="close-container">
                        <IoCloseCircleOutline className="close-icon" onClick={() => setStep("participationdetails")}/>
                    </div>
                    <h2>Confirmación de datos <BsClipboard2Check/></h2>
                    <p><BsPatchCheckFill className="confirm-icon"/> Por favor confirme los datos ingresados, es posible modificarlos en caso de ser necesario.</p>
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