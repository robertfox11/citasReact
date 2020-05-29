import React from "react";

const InputName = ({ cita, handleChange }) => {
  return (
    <input
      type="text"
      name="pets"
      className="u-full-width"
      placeholder="Name Pets"
      onChange={handleChange}
      //   value={mascota}
    />
  );
};

export default InputName;
