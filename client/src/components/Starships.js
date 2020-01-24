import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function People(props) {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Model",
        field: "model"
      },
      {
        title: "Manufacturer",
        field: "manufacturer"
      },
      {
        title: "Starship Class",
        field: "starship_class"
      }
    ],
    data: []
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/starships`).then(res => {
      setState({ ...state, data: res.data });
      console.log(state);
    });
  }, []);

  return (
    <MaterialTable
      title="Starships"
      columns={state.columns}
      data={state.data}
      options={{
        grouping: true,
        pageSize: 10,
        headerStyle: { fontWeight: "bolder" }
      }}
    />
  );
}
