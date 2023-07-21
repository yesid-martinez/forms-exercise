import PropTypes from 'prop-types';

export const Titles = ({label, level}) => {

    if (level === 1) return <h1>{label}</h1>;
    if (level === 2) return <h2>{label}</h2>;
    if (level === 3) return <h3>{label}</h3>;

    return (
        <div>Titles</div>
    )
};

Titles.propTypes = {
    label: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3]),
};

Titles.defaultProps = {
    label: "Title",
    level: 1,
};
