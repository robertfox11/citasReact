import React from "react";

const InputOwner = ({ cita, handleChange }) => {
  return (
    <input
      type="text"
      name="owner"
      className="u-full-width"
      placeholder="Owner"
      onChange={handleChange}
      value={cita.owner}
    />
  );
};

export default InputOwner;
