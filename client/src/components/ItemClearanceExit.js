import React from "react";
import Axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import "../sigCanvas.css";

const ItemClearanceExit = ({ item, PATH }) => {
  const handleDeleteItemExit = (id) => {
    if (id) {
      Axios.delete(`${PATH}delete-clearance/${id}`);
      window.location.reload(false);
    } else {
      window.location.reload(false);
    }
  };

  return (
    <>
      <table id="exit-table" className="table table-bordered border-dark">
        <thead>
          <tr>
            <th>הסר</th>
            <th>חתימה</th>
            <th>שעת יציאה</th>
            <th>תאריך</th>
            <th>שם איש צוות</th>
            <th>בית</th>
            <th>שם חניך</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div className="container-button-delete-exit">
              <AiOutlineDelete onClick={() => handleDeleteItemExit(item._id)} />
            </div>
            <td>
              <img src={item.imageURL} style={{ width: "5em" }} />
            </td>
            <td>{item.thisHour}</td>
            <td>{item.thisDate}</td>
            <td>{item.crewMember}</td>
            <td>{item.home}</td>
            <td>{item.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ItemClearanceExit;
