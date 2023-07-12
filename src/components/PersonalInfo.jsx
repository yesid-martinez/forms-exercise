import { IoIosArrowDown } from "react-icons/io";
import { BiSolidErrorCircle } from "react-icons/bi";

const PersonalInfo = () => {
    return (
    <main>
        <div className="card">
        <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
        <h3>Información personal</h3>
        <form autoComplete="off">
            <fieldset>
            <input
                type="text"
                required
                id="fName"
                autoFocus
                placeholder="Nombre"
            />
            <div className="error-container">
                <p className="error">Nombre requerido</p>
                <BiSolidErrorCircle className="error-icon" />
            </div>
            </fieldset>
            <fieldset>
            <input
                type="text"
                required
                id="lName"
                autoComplete="off"
                placeholder="Apellido"
            />
            <div className="error-container">
                <p className="error">Apellido requerido</p>
                <BiSolidErrorCircle className="error-icon" />
            </div>
            </fieldset>
            <fieldset>
            <input
                type="text"
                pattern="[0-9]+"
                inputMode="text"
                required
                id="age"
                placeholder="Edad"
            />
            <div className="error-container">
                <p className="error">Edad requerida</p>
                <BiSolidErrorCircle className="error-icon" />
            </div>
            </fieldset>
            <fieldset>
            <div className="select-icon">
                <IoIosArrowDown />
            </div>
            <select id="genre">
                <option value="">Género</option>
                <option value="male">Femenino</option>
                <option value="female">Masculino</option>
                <option value="another">Otro</option>
            </select>
            <p className="optional">(Opcional)</p>
            </fieldset>
            <button type="submit">Siguiente</button>
        </form>
        </div>
    </main>
    );
};

export default PersonalInfo;