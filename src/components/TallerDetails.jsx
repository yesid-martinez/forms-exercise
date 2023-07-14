import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { useLocalStorage } from "../hooks/useLocalStorage";

const TallerDetails = () => {
    
    const { setStep } = useContext(NavigationState);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep("participationdetails");
    };
    
    const [taller, setTaller] = useLocalStorage("taller", "");
    const [mode, setMode] = useLocalStorage("mode", "");
    const [hour, setHour] = useLocalStorage("hour", "");

    return (
        <main>
            <div className="card">
                <button className="back-btn" onClick={() => setStep("contactinfo")}><MdOutlineKeyboardBackspace/></button>
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Detalles del taller</h3>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="select-icon">
                            <IoIosArrowDown />
                        </div>
                        <select id="taller" required value={taller} onChange={(e) => setTaller(e.target.value)}>
                            <option value="">Selección de taller</option>
                            <option value="opt1">Estructura y diseño floral</option>
                            <option value="opt2">Arte floral creativo</option>
                            <option value="opt3">Cuidados y mantenimiento de las flores</option>
                            <option value="opt4">Sistema de climatización en floristeria</option>
                            <option value="opt5">Clasificación de las flores</option>
                        </select>
                        <div className="error-container">
                            <p className="error">Selección requerida</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="select-icon">
                            <IoIosArrowDown />
                        </div>
                        <select id="mode" required value={mode} onChange={(e) => setMode(e.target.value)}>
                            <option value="">Modalidad</option>
                            <option value="opt1">Virtual</option>
                            <option value="opt2">Presencial</option>
                        </select>
                        <div className="error-container">
                            <p className="error">Selección requerida</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="select-icon">
                            <IoIosArrowDown />
                        </div>
                        <select id="hour" required value={hour} onChange={(e) => setHour(e.target.value)}>
                            <option value="">Horario</option>
                            <option value="opt1">9:00 a.m</option>
                            <option value="opt2">2:00 p.m</option>
                            <option value="opt3">7:00 p.m</option>
                        </select>
                        <div className="error-container">
                            <p className="error">Selección requerida</p>
                            <BiSolidErrorCircle className="error-icon"/>   
                        </div>
                    </fieldset>
                    <button type="submit">Siguiente</button>
                </form>
            </div>
        </main>
    )
}

export default TallerDetails;