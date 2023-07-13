import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ParticipationDetails = () => {
    return (
        <main>
        <div className="card">
            <button className="back-btn">
                <MdOutlineKeyboardBackspace />
            </button>
            <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
            <h3>Detalles del taller</h3>
            <form action="" autoComplete="off">
            <fieldset>
                <p className="details">
                    ¿Ha asistido a talleres de arreglos florales anteriormente?
                </p>
                <div className="selection-container">
                    <div className="selection-item">
                        <label htmlFor="trueExperience">Si</label>
                        <input
                        type="radio"
                        id="trueExperience"
                        name="selectExperience"
                        required
                        />
                    </div>
                    <div className="selection-item">
                        <label htmlFor="falseExperience">No</label>
                        <input
                            type="radio"
                            id="falseExperience"
                            name="selectExperience"
                            required
                        />
                    </div>
                </div>
                <div className="error-container">
                    <p className="error">Selección requerida</p>
                    <BiSolidErrorCircle className="error-icon" />
                </div>
            </fieldset>
            <fieldset>
                <select id="experience" required>
                    <option value="">Experiencia</option>
                    <option value="opt1">Principiante</option>
                    <option value="opt2">Intermedio</option>
                    <option value="opt3">Avanzado</option>
                </select>
                <div className="error-container">
                    <p className="error">Selección requerida</p>
                    <BiSolidErrorCircle className="error-icon" />
                </div>
            </fieldset>
            <fieldset>
                <p className="details">
                    Indique las flores que les gustaría utilizar en los arreglos durante el taller.
                </p>
                <input
                    type="text"
                    id="preferences"
                    placeholder="Ejemplo: Rosas, girasoles, lirios..."
                />
            </fieldset>
            <fieldset>
                <p className="details">
                    Cuentenos qué expectativas tiene o qué le gustaría lograr al participar en el taller de arreglos florales.
                </p>
                <input
                type="text"
                id="expected"
                placeholder="Ejemplo: Espero aprender nuevas técnicas para arreglos..."
                />
            </fieldset>
            <button type="submit">Siguiente</button>
            </form>
        </div>
        </main>
    );

};

export default ParticipationDetails;
