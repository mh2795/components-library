import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Forms";

storiesOf("Form", module)
    .add("Email Small", () => <Form  type="text" placeholder='Email' title='Email' size='small'  />)
    .add('Email Medium', () => <Form type='text' placeholder='Email' title='Email' size='medium'  />)
    .add('Email Large', () => <Form type='text' placeholder='Email' title='Email' size='large'  />)

    .add("Select Small", () => <Form  type="select" size='small'  />)
    .add('Select Medium', () => <Form type='select' size='medium'  />)
    .add('Select Large', () => <Form type='select' size='large'  />)
    .add("Select Shadow Small", () => <Form  type="select" size='small' shadow />)
    .add('Select Shadow Medium', () => <Form type='select' size='medium' shadow />)
    .add('Select Shadow Large', () => <Form type='select' size='large' shadow />)

    .add('Number', () => <Form type='number' min={ 0 } max={ 50 } step={ 2 }/>)

    .add('Text w/Button Small', () => <Form label='' placeholder='Voucher code' btnTxt='Redeem' small />)
    .add('Text w/Button Large', () => <Form label='' placeholder='Voucher code' btnTxt='Redeem' large />)

