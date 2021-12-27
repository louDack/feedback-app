import PropTypes from 'prop-types';

function Header({ text, textColor }) {
    return (
        <header>
            <h2 style={{color: textColor}}>Hello, {text}!</h2>
        </header>
    )
}

// Incase user doesnt pass props.
Header.defaultProps = {
  text: 'Dumbass',
  textColor: 'red'
}

// Make sure the prop arguments are the correct input type.
Header.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
