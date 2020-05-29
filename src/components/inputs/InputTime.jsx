import React from "react";

const InputTime = ({ cita, handleChange }) => {
  return (
    <input
      type="time"
      name="date"
      className="u-full-width"
      onChange={handleChange}
      //   value={times}
    />
  );
};

export default InputTime;
