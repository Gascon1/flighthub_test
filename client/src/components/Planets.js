import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function People(props) {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Climate",
        field: "climate"
      },
      {
        title: "Terrain",
        field: "terrain"
      },
      {
        title: "Population",
        field: "population"
      }
    ],
    data: []
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/planets`).then(res => {
      setState({ ...state, data: res.data });
      console.log(state);
    });
  }, []);

  return (
    <MaterialTable
      title="Planets"
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
