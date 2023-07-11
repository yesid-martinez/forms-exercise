import { BiSolidErrorCircle } from "react-icons/bi";

const PersonalInfo = () => {
    return (
        <main>
            <div className="card">
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Información personal</h3>
                <form action="" autoComplete="off">
                    <fieldset>
                        <label htmlFor="f-name"></label>
                        <input
                            type="text"
                            required
                            id="f-name"
                            placeholder="Nombre"
                            autoFocus
                            />
                        <div className="error-container">
                            <p className="error">Nombre requerido</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="l-name"></label>
                        <input
                            type="text"
                            required
                            id="l-name"
                            placeholder="Apellido"
                            />
                        <div className="error-container">
                            <p className="error">Apellido requerido</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="age"></label>
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
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="genre"></label>
                        <select id="genre">
                            <option value="" selected disabled hidden>Género (Opcional)</option>
                            <option value="">Femenino</option>
                            <option value="">Masculino</option>
                            <option value="">Otro</option>
                        </select>
                    </fieldset>
                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </main>
    )
}

export default PersonalInfo