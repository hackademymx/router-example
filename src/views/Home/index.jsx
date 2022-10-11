import React from "react";

import axios from "axios";
export default function Home() {
  const [reload, setReload] = React.useState(false);

  const [milestones, setMilestones] = React.useState([]);

  const [error, setError] = React.useState(null);

  const getMilestones = async () => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      setMilestones(data);
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    getMilestones();
  }, []);

  return (
    <div>
      <button onClick={() => setReload(!reload)}>Recargar</button>
      {error && <div>ocurrio un error inesperado</div>}
    </div>
  );
}
