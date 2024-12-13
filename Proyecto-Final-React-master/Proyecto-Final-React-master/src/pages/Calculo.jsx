import React, { useState } from "react";
import Header from "../components/Header";
import "./Calculo.css";

const Calculo = () => {
  const [formData, setFormData] = useState({
    salario: "",
    diasTrabajados: "",
    vacacionesPendientes: "",
    prima: "",
    indemnizacion: "",
  });

  //handInputChange actualiza el estado formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    //asegura que solo el campo modificado cambie en el estdo
  };

  const calcularLiquidacion = () => {
    // logica del calculo
    console.log("Datos del formulario:", formData);
    alert("Cálculo realizado. Revisa la consola para más detalles.");
  };

  return (
    <>
    <Header />
    <section>
        
      <div className="tabla-centro">
        <form>
          <label htmlFor="trabajadores">Selecciona un trabajador:</label>
          <select id="trabajadores" name="trabajadores">
            <option value="carlos-ramirez">Carlos Ramírez</option>
            <option value="maria-gomez">María Gómez</option>
            <option value="luis-martinez">Luis Martínez</option>
            <option value="ana-lopez">Ana López</option>
            <option value="javier-fernandez">Javier Fernández</option>
            <option value="sofia-torres">Sofía Torres</option>
            <option value="fernando-rivera">Fernando Rivera</option>
            <option value="laura-castillo">Laura Castillo</option>
            <option value="daniel-suarez">Daniel Suárez</option>
            <option value="patricia-vega">Patricia Vega</option>
          </select>

          <label htmlFor="salario">Salario:</label>
          <input
            type="number"
            id="salario"
            name="salario"
            placeholder="Ingrese el salario"
            value={formData.salario}
            onChange={handleInputChange}
            //el onchange llama handInputChange para actualixar el estado al escribir en el campo
            required
          />

          <label htmlFor="diasTrabajados">Días trabajados:</label>
          <input
            type="number"
            id="diasTrabajados"
            name="diasTrabajados"
            placeholder="Ingrese los días trabajados"
            value={formData.diasTrabajados}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="vacacionesPendientes">Vacaciones pendientes:</label>
          <input
            type="number"
            id="vacacionesPendientes"
            name="vacacionesPendientes"
            placeholder="Ingrese días de vacaciones pendientes"
            value={formData.vacacionesPendientes}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="prima">Prima:</label>
          <input
            type="number"
            id="prima"
            name="prima"
            step="0.01"
            placeholder="Ingrese la prima"
            value={formData.prima}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="indemnizacion">Indemnización:</label>
          <input
            type="number"
            id="indemnizacion"
            name="indemnizacion"
            step="0.01"
            placeholder="Ingrese la indemnización"
            value={formData.indemnizacion}
            onChange={handleInputChange}
            required
          />

          <button
            type="button"
            id="btnCalcular"
            onClick={calcularLiquidacion}
          >
            Calcular
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Calculo;
