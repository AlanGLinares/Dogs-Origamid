import React from "react";

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Preencha um email válido",
  },
};

const UseForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(null);

  const Validate = (value) => {
    if (type === false) {
      return true;
    }
    if (value.length === 0) {
      setErro("Preencha um valor");
      return false;

      // types.["email"] mesma coisa que types[type] não tem como passar types.email
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (erro) Validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    erro,
    setValue,
    onChange,
    Validate: () => Validate(value),
    onBlur: () => Validate(value),
  };
};

export default UseForm;
