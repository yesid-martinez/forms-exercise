import fdcLogo from "../assets/fdc-logo.png";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

const InitialMessage = () => {

    const { setStep } = useContext(NavigationState);

    return (
        <div className="initial-msg-container">
            <div>
                <img src={fdcLogo} alt="Flores de colores"/>
                <h1>Flores de Colores</h1>
            </div>
            <div>
                <h2>Taller de arreglos florales</h2>
                <p>¡Regístrate para nuestro emocionante taller de arreglos florales y descubre el arte de crear hermosos diseños con flores! Completa el formulario a continuación para reservar tu lugar en este evento inspirador y aprender técnicas profesionales de arreglos florales.</p>
                <button onClick={() => setStep("personalinfo")}>Continuar</button>
            </div>
        </div>
    )
}

export default InitialMessage