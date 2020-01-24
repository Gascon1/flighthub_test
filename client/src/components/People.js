import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";

export default function People(props) {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Height",
        field: "height"
      },
      {
        title: "Birth Year",
        field: "birth_year"
      },
      {
        title: "Eye Color",
        field: "eye_color"
      }
    ],
    data: [],
    selectedRow: null
  });

  return (
    <MaterialTable
      title="Planned take home test"
      columns={state.columns}
      data={state.data}
      onRowClick={(evt, selectedRow) => setState({ selectedRow })}
      options={{
        exportButton: true,
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
