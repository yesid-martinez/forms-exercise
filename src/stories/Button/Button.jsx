import PropTypes from "prop-types";
import "./Button.scss"

export const Button = ({label, size, onClick}) => {

    return (
        <button type="button" className={`btn btn-${size}`} onClick={onClick}>
            {label}
        </button>
    )
};

Button.propTypes = {
    label: PropTypes.string,
    primary: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    label: "Button",
    primary: true,
    size: "medium",
    onClick: undefined,
};

