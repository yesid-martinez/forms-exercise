import { BsCheckCircle } from 'react-icons/bs';

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { useSelector, useDispatch } from 'react-redux';
import { resetFormsData } from '../features/forms/formsSlice';

const ConfirmedData = () => {
    const { setStep } = useContext(NavigationState);

    const dispatch = useDispatch();
    const personalInfo = useSelector((state) => state.data.formsData.personalInfo);

    const handleSubmit = () => {
        setStep("initialmessage");
        dispatch(resetFormsData());
    };

    return (
        <div className="confirmed-card">
            <BsCheckCircle className="confirmed-card-icon" />
            <h2>¡Buen trabajo {personalInfo.fName ? personalInfo.fName : ""}!</h2>
            <h3>Te has registrado exitosamente...</h3>
            <button onClick={handleSubmit}>OK</button>
        </div>
    )
}

export default ConfirmedData;