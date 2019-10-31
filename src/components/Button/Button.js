import React from 'react';
import './Button.css';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.nobg) {
        classList += ` nobg-${props.type}`
    }
    if (props.litebg) {
        classList += ` litebg-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.hover) {
        classList += ` hover`
    }
    return <button className={classList}>
        {props.label}
    </button>
}

export default Button;