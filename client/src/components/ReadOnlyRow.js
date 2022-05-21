import React, { useState } from "react";
import Axios from "axios";
import "../sigCanvas.css";
import {
  ShapeTextarea,
  ContainerTextarea,
} from "../style_components/HomePageStayle";
import {
  ButtonForm,
  InputEditRow,
  ContainerButtonsTextarea,
  ContainerTitleTextarea,
} from "../style_components/HomePageStayle";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { VscSaveAs } from "react-icons/vsc";
import { MdOutlineDescription } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { GiSave } from "react-icons/gi";
import { TiArrowBackOutline } from "react-icons/ti";

const ReadOnlyRow = ({
  item,
  handleDelete,
  handleDescription,
  PATH,
  setViewDescription,
  setDeleteItem,
  setUpdatePassword,
}) => {
  const [valueEditInput, setValueEditInput] = useState("");
  const [valueInputTextarea, setValueInputTextarea] = useState("");
  const [openEditRow, setOpenEditRow] = useState(false);
  const [openTextCard, setOpenTextCard] = useState(false);
  const [openTextCardStyle, setOpenTextCardStyle] = useState(false);
  const [password, setPassword] = useState(false);

  const handleEditRow = () => {
    setOpenEditRow(!openEditRow);
    setValueEditInput(item.dates);
    setTimeout(() => {
      setPassword(!password);
    }, 1);
  };

  const handleUpdateDate = (id) => {
    Axios.put(`${PATH}update-dates`, {
      id: id,
      dates: valueEditInput,
    });
    window.location.reload(false);
  };

  const handleOpenTextarea = () => {
    setViewDescription(false);
    setDeleteItem(false);
    setUpdatePassword(false);
    setOpenTextCard(!openTextCard);
    setValueInputTextarea(item.note);
    setTimeout(() => {
      setOpenTextCardStyle(!openTextCardStyle);
    }, 1);
  };

  const handleUpdateTextarea = (id) => {
    Axios.put(`${PATH}update-note`, {
      id: id,
      note: valueInputTextarea,
    });
    window.location.reload(false);
  };

  return (
    <>
      <table className="table table-bordered" style={{ marginTop: "0.8%" }}>
        <thead>
          <tr>
            <th>הסר</th>
            <th>תיאור</th>
            <th>אפשרות לביקורים</th>
            <th>צו</th>
            <th>טקסט חופשי</th>
            <th>תרופות</th>
            <th>שלב</th>
            <th>תאריכים</th>
            <th>בית</th>
            <th>שם</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ButtonForm
                onClick={() =>
                  handleDelete(
                    item._id,
                    item.name,
                    item.home,
                    item.dates,
                    item.stage,
                    item.medicines,
                    item.order,
                    item.possibilityVisits,
                    item.info
                  )
                }
              >
                <AiOutlineDelete />
              </ButtonForm>
            </td>
            <td style={{ width: "5em" }}>
              <ButtonForm
                onClick={() => handleDescription(item.name, item.info)}
              >
                <MdOutlineDescription />
              </ButtonForm>
            </td>
            <td style={{ Width: "5em" }}>{item.possibilityVisits}</td>
            <td style={{ Width: "5em" }}>{item.order}</td>
            <td
              style={{
                Width: "5em",
              }}
            >
              <ButtonForm onClick={() => handleOpenTextarea()}>
                <BsCardText />
              </ButtonForm>
            </td>

            <td style={{ Width: "5em" }}>{item.medicines}</td>
            <td style={{ Width: "5em" }}>{item.stage}</td>
            <td style={{ width: "5em" }}>
              <div
                style={{
                  width: "20em",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {openEditRow ? (
                  <div
                    style={{
                      width: "20em",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <ButtonForm
                      onClick={() => handleUpdateDate(item._id)}
                      style={{ marginRight: "3%" }}
                    >
                      <VscSaveAs />
                    </ButtonForm>
                    <InputEditRow
                      style={{ height: "6vh" }}
                      password={password}
                      value={valueEditInput}
                      onChange={(e) => setValueEditInput(e.target.value)}
                    />
                  </div>
                ) : (
                  <p>{item.dates}</p>
                )}

                <ButtonForm
                  style={{ marginLeft: "3%" }}
                  onClick={() => handleEditRow(item._id)}
                >
                  <AiOutlineEdit />
                </ButtonForm>
              </div>
            </td>
            <td style={{ Width: "5em" }}>{item.home}</td>
            <td style={{ Width: "5em" }}>{item.name}</td>
          </tr>
        </tbody>
      </table>
      {openTextCard && (
        <ContainerTextarea>
          <ContainerTitleTextarea>
            טקסט חופשי עבור {item.name} מ{item.home}
          </ContainerTitleTextarea>
          <ShapeTextarea
            value={valueInputTextarea}
            onChange={(e) => setValueInputTextarea(e.target.value)}
            openTextCardStyle={openTextCardStyle}
          />
          <ContainerButtonsTextarea>
            <ButtonForm onClick={() => setOpenTextCard(false)}>
              <TiArrowBackOutline />
            </ButtonForm>
            <ButtonForm onClick={() => handleUpdateTextarea(item._id)}>
              <GiSave />
            </ButtonForm>
          </ContainerButtonsTextarea>
        </ContainerTextarea>
      )}
    </>
  );
};

export default ReadOnlyRow;
