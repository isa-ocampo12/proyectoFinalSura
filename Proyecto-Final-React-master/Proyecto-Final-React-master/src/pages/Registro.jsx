import Header from "../components/Header";
import './Registro.css';


const Registro = () => {
    return (
      <section>
      <Header /> 

      <div className="contenedorPrincipal">

        <div className="container">
          <h2>Registrar nuevo Empleado</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombres y Apellidos</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="cargo">Crago</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Salario</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <button type="submit" className="btn-register">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </section>
    );
  };
  
  export default Registro;