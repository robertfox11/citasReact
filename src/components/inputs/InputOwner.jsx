import React from "react";

const InputOwner = ({ cita, updateCita }) => {
  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    // updateCita({
    //   ...cita,
    //   [e.target.name]: e.target.value,
    // });
  };
  return (
    <input
      type="text"
      name="owner"
      className="u-full-width"
      placeholder="Owner"
      onChange={handleChange}
      //   value={owner}
    />
  );
};

export default InputOwner;
