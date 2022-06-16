import React from "react";
import style from "./InputElement.module.css";

function InputElement(props) {
  return (
    <div className={style.main}>
      <label htmlFor={props.label}>{props.label}</label>
      <select name={props.label} id={props.label}>
        <option value="" disabled selected>
          Choose
        </option>
        <option value={props.option[0]}>{props.option[0]}</option>
        <option value={props.option[1]}>{props.option[1]}</option>
        <option value={props.option[2]}>{props.option[2]}</option>
        <option value={props.option[3]}>{props.option[3]}</option>
      </select>
    </div>
  );
}

export default InputElement;
