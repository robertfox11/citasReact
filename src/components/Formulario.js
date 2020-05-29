import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";
//objeto
import Citas from "../Citas";
//inputs
import InputName from "./inputs/InputName";
import InputOwner from "./inputs/InputOwner";
import InputDate from "./inputs/InputDate";
import InputTime from "./inputs/InputTime";
import TextTarea from "./inputs/TextTarea";
const Formulario = ({ crearCita }) => {
  //   Crear State de Citas la function que reescribe este State Creamos un objeto
  const [cita, updateCita] = useState(Citas);
  const [error, actualizarError] = useState(false);
  // Función que se ejecuta cada que el usuario escribe en un input
  const handleChange = (e) => {
    // console.log(e.target.value);
    updateCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  // Extraer los valores
  const { pets, owner, date, time, symptoms } = cita;
  // Cuando el usuario presiona envia formulario cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      pets.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);

    // // Asignar un ID
    // cita.id = uuid();

    // // Crear la cita
    // crearCita(cita);

    // // Reiniciar el form
    // actualizarCita({
    //   mascota: "",
    //   propietario: "",
    //   fecha: "",
    //   hora: "",
    //   sintomas: "",
    // });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita} className="form-control">
        <label className="">Name Pets</label>
        <InputName cita={cita} handleChange={handleChange} />
        <label>Name Owner</label>
        <InputOwner cita={cita} handleChange={handleChange} />
        <label>Date</label>
        <InputDate cita={cita} handleChange={handleChange} />
        <label>Hora</label>
        <InputTime cita={cita} handleChange={handleChange} />
        <label>Síntomas</label>
        <TextTarea cita={cita} handleChange={handleChange} />
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
