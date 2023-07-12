import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ContactInfo = () => {
    return (
        <main>
            <div className="card">
                <button className="back-btn"><MdOutlineKeyboardBackspace/></button>
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Información de contacto</h3>
                <form action="" autoComplete="off">
                    <fieldset>
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            required
                            id="email"
                            placeholder="Correo electrónico"
                            autoFocus
                            />
                        <div className="error-container">
                            <p className="error">Correo válido requerido</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="phone-num"></label>
                        <input
                            type="text"
                            pattern="[0-9]+"
                            inputMode="text"
                            required
                            id="phone-num"
                            placeholder="Número de teléfono"
                            />
                        <div className="error-container">
                            <p className="error">Número de teléfono requerido</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="address"></label>
                        <input
                            type="text"
                            required
                            id="age"
                            placeholder="Dirección residencial (Opcional)"
                            />
                    </fieldset>
                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </main>
    )
}

export default ContactInfo