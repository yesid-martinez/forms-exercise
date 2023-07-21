import PropTypes from 'prop-types';

import "../../../styles/styles.scss";
import fdcLogo from "../../../assets/fdc-logo.png";

import { Card } from "../Card/Card";
import { Titles } from "../../Titles/Titles";
import { Button } from "../../Button/Button";


export const InitialMsg = ({textColor}) => {
    return (
        <>
            <div className="container">
                <Card backgroundColor="#fff">
                    <div className="initial-msg">
                        <div>
                            <Titles label="Flores de colores" level={1}/>
                            <img src={fdcLogo} alt="Flores de colores" />
                        </div>
                        <div>
                            <Titles label="Taller de arreglos florales" level={2}/>
                            <p style={{color: textColor}}>
                                ¡Regístrate para nuestro emocionante taller de arreglos florales y descubre el arte de crear hermosos diseños con flores! Completa el formulario a continuación para reservar tu lugar en este evento inspirador y aprender técnicas profesionales de arreglos florales.
                            </p>
                        </div>
                        <div>
                            <Button label="Continuar" size="small">Continuar</Button>
                            {/* onClick={() => setStep("personalinfo")} */}
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
};

InitialMsg.propTypes ={
    textColor: PropTypes.string,
};

InitialMsg.defaultProps = {
    textColor: "#000000",
};