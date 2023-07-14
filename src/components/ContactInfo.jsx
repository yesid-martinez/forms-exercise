import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { useLocalStorage } from "../hooks/useLocalStorage";

const ContactInfo = () => {
    
    const { setStep } = useContext(NavigationState);

    const [email, setEmail] = useLocalStorage("email", "");
    const [phoneNum, setPhoneNum] = useLocalStorage("phoneNum", "");
    const [address, setAddress] = useLocalStorage("address", "");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setStep("tallerdetails");
    };

    return (
    <main>
        <div className="card">
        <button className="back-btn" onClick={() => setStep("personalinfo")}>
            <MdOutlineKeyboardBackspace />
        </button>
        <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
        <h3>Información de contacto</h3>
        <form action="" autoComplete="off" onSubmit={handleSubmit}>
            <fieldset>
                <input
                    type="email"
                    required
                    id="email"
                    autoFocus
                    autoComplete="off"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="error-container">
                    <p className="error">Correo válido requerido</p>
                    <BiSolidErrorCircle className="error-icon" />
                </div>
            </fieldset>
            <fieldset>
                <input
                    type="text"
                    pattern="[0-9]+"
                    inputMode="text"
                    required
                    id="phoneNum"
                    placeholder="Número de télefono"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                />
                <div className="error-container">
                    <p className="error">Número de teléfono requerido</p>
                    <BiSolidErrorCircle className="error-icon" />
                </div>
            </fieldset>
            <fieldset>
                <input
                    type="text"
                    id="address"
                    autoComplete="off"
                    placeholder="Dirección residencial"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <p className="optional">(Opcional)</p>
            </fieldset>
            <button type="submit">Siguiente</button>
        </form>
        </div>
    </main>
    );
};

export default ContactInfo;