import React from "react";
import style from "./Input.module.css";

const Input = ({ value, onChange, label, type, name, erro, onBlur }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={style.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className={style.error}>{erro}</p>}
    </div>
  );
};

export default Input;
