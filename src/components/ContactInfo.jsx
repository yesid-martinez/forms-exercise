import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ContactInfo = () => {
    return (
    <main>
        <div className="card">
        <button className="back-btn">
            <MdOutlineKeyboardBackspace />
        </button>
        <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
        <h3>Información de contacto</h3>
        <form action="" autoComplete="off">
            <fieldset>
                <input
                    type="email"
                    required
                    id="email"
                    autoFocus
                    autoComplete="off"
                    placeholder="Correo electrónico"
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