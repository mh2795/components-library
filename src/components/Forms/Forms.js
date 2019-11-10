import React from 'react';
import './Forms.css';
import Button from './../Button/Button'

const Form = (props) => {
    let classList = ''
    let types = ['text', 'select', 'number']
    let sizes = ['small', 'medium', 'large']
    let placeholder = ''
    if (sizes.includes(props.size)) {
        classList += ` form-${props.type}-${props.size}`
    }
    if (types.includes(props.type)) {
        classList += ` form-${props.type}`
    }
    if (props.shadow) {
        classList += ' shadow'
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
    } else if (props.type === 'number') {
        return <form>
          <input className={classList} type="number" min={props.min} max={props.max} step={props.step} />
      </form>
    }else if (props.btnTxt) {
        return (
          <form className="flex-row">
            <input className={classList} type="text" placeholder={props.placeholder} />
            <Button label={props.btnTxt} type="primary" />
          </form>
        );
      }
}

export default Form;

