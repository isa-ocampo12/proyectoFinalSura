import './RegistrarNuevo.css';


const RegistrarNuevo = () => {
    return (
      <section>

      <div className="contenedorPrincipal">

        <div className="container">
          <h2>Registrar</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Correo</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Contraseña</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Nombres y Apellidos</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Nombre de usuario</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Télefono</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="salario">Contraseña</label>
              <input type="number" id="salario" name="salario" required />
            </div>

            <div className="form-group">
              <label htmlFor="cargo">Cargo</label>
              <select name="lenguajes" id="cargo" defaultValue="Seleccione cargo del empleado">
                  <option value="marketing">Marketing</option>
                  <option value="Finanzas">Finanzas</option>
                  <option value="Operaciones">Operaciones</option>
                  <option value="Seguros">Seguros</option>
                  <option value="Ventas">Ventas</option>
                  <option value="TI">Áreas de TI</option>
              </select>
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
  
export default RegistrarNuevo;