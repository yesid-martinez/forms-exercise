import PropTypes from "prop-types";

/** Ejemplo de documentación */

export const Card = ({backgroundColor, children}) => {

    return (
        <div className="card" style={{backgroundColor: backgroundColor}}>
            {children}
        </div>
    )
};

Card.propTypes = {
    /** Ejemplo de documentación */
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
};

Card.defaultProps = {
    backgroundColor: "#F94898",
    children: null,
};
