import { IoIosArrowDown } from "react-icons/io";
import { BiSolidErrorCircle } from "react-icons/bi";

import { useContext } from "react";
import NavigationState from "../context/NavigationState";

import { useLocalStorage } from "../hooks/useLocalStorage";

const PersonalInfo = () => {

    const [fName, setFName] = useLocalStorage("fName", "");
    const [lName, setLName] = useLocalStorage("lName", "");
    const [age, setAge] = useLocalStorage("age", "");
    const [genre, setGenre] = useLocalStorage("genre", "");
    
    const { setStep } = useContext(NavigationState);
    
    const onSubmit = (e) => {
        e.preventDefault();
        setStep("contactinfo");
    };

    return (
    <main>
        <div className="card">
        <img src="../../public/fdc-logo.webp" alt="Flores de Colores" />
        <h3>Información personal</h3>
        <form autoComplete="off" onSubmit={onSubmit}>
            <fieldset>
            <input
                type="text"
                required
                id="fName"
                autoFocus
                placeholder="Nombre"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
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
                value={lName}
                onChange={(e) => setLName(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
            <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Género</option>
                <option value="female">Femenino</option>
                <option value="male">Masculino</option>
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