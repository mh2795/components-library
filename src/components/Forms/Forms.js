import React from 'react';
import './Forms.css';

// This is a functional component - just sent up a little differently as an arrow function!
const Form = (props) => {
    let classList = ''
    let types = ['text']
    let sizes = ['small', 'medium', 'large']
    if (sizes.includes(props.size)) {
        classList += ` form-${props.size}`
    }
    if (types.includes(props.type)) {
        classList += ` form-${props.type}`
    }

    if (props.type === 'text') {
    return <form>
    <label>
      {props.title}
      <br></br>
      <input className={classList} type="text" placeholder="Email" />
    </label>
  </form>
    } else if (props.type === 'select') {
        return <form>
            <select className={classList}>
                <option value="Select">Select</option>
                <option value="MacBook Pro">MacBook Pro</option>
                <option value="iPad Pro">iPad Pro</option>
                <option value="iPhone">iPhone Pro</option>
                <option value="iPod">iPod</option>
            </select>
        </form>
    }
}

export default Form;