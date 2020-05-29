import React from "react";

const TextTarea = ({ cita, handleChange }) => {
  return (
    <textarea
      className="u-full-width"
      name="symptoms"
      onChange={handleChange}
      // InputTime  value={symptoms}
    ></textarea>
  );
};

export default TextTarea;
