import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Cart from '../../images/cart_2.png'
import Heart from '../../images/hearts.png'

storiesOf("Button", module)
    .add("Primary", () => <Button label="Do Something" type="primary" hover />)
    .add('Danger', () => <Button label="Do Something" type='danger' hover />)
    .add('Success', () => <Button label="Do Something" type='success' hover />)
    .add('Warning', () => <Button label="Do Something" type='warning' hover />)
    .add('Default', () => <Button label="Do Something" type="default" hover />)

    .add("Primary NoBG", () => <Button label="Do Something" type="primary" nobg />)
    .add('Danger NoBG', () => <Button label="Do Something" type='danger' nobg />)
    .add('Success NoBG', () => <Button label="Do Something" type='success' nobg />)
    .add('Warning NoBG', () => <Button label="Do Something" type='warning' nobg />)
    .add('Default NoBG', () => <Button label="Do Something" type="default" nobg />)

    .add("Primary LiteBG", () => <Button label="Do Something" type="primary" litebg />)
    .add('Danger LiteBG', () => <Button label="Do Something" type='danger' litebg />)
    .add('Success LiteBG', () => <Button label="Do Something" type='success' litebg />)
    .add('Warning LiteBG', () => <Button label="Do Something" type='warning' litebg />)
    .add('Default LiteBG', () => <Button label="Do Something" type="default" litebg />)

    .add('Large Primary', () => <Button label="Do Something" type='primary' large />)
    .add('Large Danger', () => <Button label="Do Something" type='danger' large />)
    .add('Large Success', () => <Button label="Do Something" type='success' large />)
    .add('Large Warning', () => <Button label="Do Something " type='warning' large />)
    .add('Large Default', () => <Button label="Do Something" type='default' large />)

    .add('Large LiteBG Primary', () => <Button label="Do Something" type='primary' large litebg />)
    .add('Large LiteBG Danger', () => <Button label="Do Something" type='danger' large litebg />)
    .add('Large LiteBG Success', () => <Button label="Do Something" type='success' large litebg />)
    .add('Large LiteBG Warning', () => <Button label="Do Something " type='warning' large litebg />)
    .add('Large LiteBG Default', () => <Button label="Do Something" type='default' large litebg />)

    .add('Large NoBG Primary', () => <Button label="Do Something" type='primary' large nobg />)
    .add('Large NoBG Danger', () => <Button label="Do Something" type='danger' large nobg />)
    .add('Large NoBG Success', () => <Button label="Do Something" type='success' large nobg />)
    .add('Large NoBG Warning', () => <Button label="Do Something " type='warning' large nobg />)
    .add('Large NoBG Default', () => <Button label="Do Something" type='default' large nobg />)
    
    .add('Cart', () => <Button icon={Cart} type='primary' litebg />)
    .add('Favorites', () => <Button icon={Heart} type='primary' litebg />)
    .add('Add To Cart', () => <Button icon={Cart} label='Add To Cart' type='primary' litebg />)
    .add('Add To Favorites', () => <Button icon={Heart} label= "Add To Favorites" type='primary' litebg />)
