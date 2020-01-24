import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

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
    data: []
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/people`).then(res => {
      setState({ ...state, data: res.data });
      console.log(state);
    });
  }, []);

  return (
    <MaterialTable
      title="People"
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
