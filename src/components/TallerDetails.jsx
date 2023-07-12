import { BiSolidErrorCircle } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const TallerDetails = () => {
    return (
        <main>
            <div className="card">
                <button className="back-btn"><MdOutlineKeyboardBackspace/></button>
                <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
                <h3>Detalles del taller</h3>
                <form autoComplete="off">
                    <fieldset>
                        <div className="select-icon">
                            <IoIosArrowDown />
                        </div>
                        <select id="taller" required>
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
                        <select id="mode" required>
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
                        <select id="hour" required>
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