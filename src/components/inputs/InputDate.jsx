import React from "react";

const InputDate = ({ cita, handleChange }) => {
  return (
    <input
      type="date"
      name="date"
      className="u-full-width"
      onChange={handleChange}
      value={cita.date}
    />
  );
};

export default InputDate;
