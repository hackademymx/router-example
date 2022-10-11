import React from "react";
import "./App.css";
import { api } from "./services/api";

const userInitialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

function App() {
  const [user, setUser] = React.useState(userInitialState);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

  const genericChangeUser = (e) => {
    const { id, value } = e.target;

    setUser({
      ...user,
      [id]: value,
    });
  };

  const tryRegistro = async () => {
    try {
      setLoading(true);

      const response = await api({
        method: "POST",
        data: user,
        endpoint: "/users/create-user",
      });

      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className="form">
      <div>
        <label>Nombre</label>
        <input id="name" value={user.name} onChange={genericChangeUser} />
      </div>
      <div>
        <label>Apellido</label>
        <input
          id="lastName"
          value={user.lastName}
          onChange={genericChangeUser}
        />
      </div>
      <div>
        <label>Correo</label>
        <input id="email" value={user.email} onChange={genericChangeUser} />
      </div>
      <div>
        <label>Contrasena</label>
        <input
          id="password"
          value={user.password}
          onChange={genericChangeUser}
        />
      </div>
      <div>
        <label>Confirmar Contrasena</label>
        <input
          id="repeatPassword"
          value={user.repeatPassword}
          onChange={genericChangeUser}
        />
      </div>

      {error && (
        <span style={{ color: "red" }}>Ocurrio un error en la peticion</span>
      )}

      <button disabled={loading} onClick={tryRegistro}>
        {loading ? "Cargando..." : "Registrarme"}
      </button>
    </div>
  );
}

export default App;
