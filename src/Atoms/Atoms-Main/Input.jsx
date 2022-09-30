

function Input() {
    return (  

        <>
            <select name="" id="id" className="input-100">
                <option value="0">- Seleccione una opción -</option>
                <option value="Trabajador">Mesero</option>
                <option value="Trabajador">Cocinero</option>
                <option value="Trabajador">Jefe de cocina</option>
                <option value="Trabajador">Jefe de sala</option>
            </select>

            <div className="form-cat">
                <input type="text" className="input-50" placeholder="Nombre (s)"/>
                <input type="text" className="input-50" placeholder="Apellido (s)"/>
            </div>
            <input type="email" className="input-100" placeholder="Correo Electrónico"/>

            <div className="form-cat">
                <input type="number" className="input-50" placeholder="Número telefónico"/>
                <input type="date" className="input-50" placeholder="Fecha de nacimiento"/>
            </div>

            <div className="form-cat">
                <input type="password" className="input-50" placeholder="Escriba su contraseña"/>
                <input type="password" className="input-50" placeholder="Confirma contraseña"/>
            </div>
            <div className="center">
                <input type="submit" className="btn-Submit" value="Registrarse"/>
            </div>


        </>

    );
}

export default Input;


