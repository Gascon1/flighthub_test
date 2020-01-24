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
      title="Planned take home test"
      columns={state.columns}
      data={state.data}
      options={{
        grouping: true,
        pageSize: 10,

        rowStyle: rowData => ({
          color:
            state.selectedRow &&
            state.selectedRow.tableData.id === rowData.tableData.id
              ? "#52a27e"
              : "#000",
          backgroundColor:
            state.selectedRow &&
            state.selectedRow.tableData.id === rowData.tableData.id
              ? "#EEE"
              : "#FFF"
        })
      }}
    />
  );
}
