import React from "react";

export default function DashboardItems(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.events.datas.title}</td>
      <td>{props.events.datas.location}</td>
      <td>{props.events.datas.date}</td>
      <td>{props.events.datas.members.join(", ")}</td>
      <td>{props.events.datas.note}</td>
    </tr>
  )
}