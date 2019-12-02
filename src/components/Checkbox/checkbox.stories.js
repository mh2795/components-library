import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./checkbox.js";

storiesOf("Checkbox", module)
  .add("Blue Check", () => <Checkbox blue checkOff />)
  .add("Black Check", () => <Checkbox black checkOff />)
  .add("Black with Message", () => (
    <Checkbox label="Don't show this popup again" checkOff black />
  ));