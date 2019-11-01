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
