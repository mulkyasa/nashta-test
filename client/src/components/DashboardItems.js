import React from "react";
import Moment from "react-moment";

export default function DashboardItems(props) {
  const {
    id,
    title,
    location,
    date,
    members,
    note,
  } = props.events;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{location}</td>
      <td>
        <Moment format="DD-MM-YYYY" withTitle>
          {date}
        </Moment>
      </td>
      <td>{members.join(", ")}</td>
      <td>{note}</td>
    </tr>
  )
}