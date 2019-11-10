import React from 'react';
import './Button.css';
import Cart from './../../images/cart_2.png'
import Heart from './../../images/hearts.png'

const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    let icons = [{Cart}, {Heart}]
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (icons.includes(props.icon)) {
        classList += ` button-icon`
        if (props.label) {
          classList += ' icon-with-text-button';
          return <button className={classList}><img className="icon-with-space" src={props.icon}/>{props.label}</button>;
        }
        return <button className={classList}><img className="icon" src={props.icon}/></button>;
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
        <img src={props.icon}></img>
        {props.label}
    </button>
}

export default Button;