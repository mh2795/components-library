import React from 'react';
import './Button.css';
import Icon from './../Icon/Icon'

const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    let icons = ['cart', 'heart']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (icons.includes(props.icon)) {
        classList += ` button-${props.icon}`
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
        {<img src={props.icon}/>}{props.label}
    </button>
}

export default Button;