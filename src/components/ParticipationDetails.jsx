import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { useLocalStorage } from "../hooks/useLocalStorage";
const ParticipationDetails = () => {
    
    const { setStep } = useContext(NavigationState);

    const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", "");
    const [experience, setExperience] = useLocalStorage("experience", "");
    const [preferences, setPreferences] = useLocalStorage("preferences", "");
    const [expected, setExpected] = useLocalStorage("expected", "");

    const handleSumbit = (e) =>{
        e.preventDefault();
        console.log("Todo correcto");
    };

    const handleOptionChange = (e) =>{
        setSelectedOption(e.target.value);
    };

    return (
        <main>
        <div className="card">
            <button className="back-btn" onClick={() => setStep("tallerdetails")}>
                <MdOutlineKeyboardBackspace />
            </button>
            <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
            <h3>Detalles del participación</h3>
            <form action="" autoComplete="off" onSubmit={handleSumbit}>
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
                        value="trueExperience"
                        checked={selectedOption === "trueExperience"}
                        onChange={handleOptionChange}
                        />
                    </div>
                    <div className="selection-item">
                        <label htmlFor="falseExperience">No</label>
                        <input
                            type="radio"
                            id="falseExperience"
                            name="selectExperience"
                            required
                            value="falseExperience"
                            checked={selectedOption === "falseExperience"}
                            onChange={handleOptionChange}
                        />
                    </div>
                </div>
                <div className="error-container">
                    <p className="error">Selección requerida</p>
                    <BiSolidErrorCircle className="error-icon" />
                </div>
            </fieldset>
            <fieldset>
                <select id="experience" required value={experience} onChange={(e) => setExperience(e.target.value)}>
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
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
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
                value={expected}
                onChange={(e) => setExpected(e.target.value)}
                />
            </fieldset>
            <button type="submit">Siguiente</button>
            </form>
        </div>
        </main>
    );

};

export default ParticipationDetails;
