import React from "react";

const InputTime = ({ cita, handleChange }) => {
  return (
    <input
      type="time"
      name="time"
      className="u-full-width"
      onChange={handleChange}
      value={cita.time}
    />
  );
};

export default InputTime;
