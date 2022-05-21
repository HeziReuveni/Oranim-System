import React, { useState, useEffect } from "react";
import "../sigCanvas.css";
import { RiDeleteBin3Line, RiDeleteBin7Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { MdOutlineDeleteSweep, MdOutlineDescription } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdReturnLeft } from "react-icons/io";
import Axios from "axios";
import {
  ContainerRecycling,
  TitleRecycling,
  CounterRecycling,
  NumberOfDelete,
  SearchButton,
  DeleteButton,
  HomeButton,
  InputSearch,
  ButtonForm,
  MessageDescription,
  TitleDescription,
  BodyDescription,
  MessageEmptyBin,
  MessageFullBin,
  ButtonEmptyBin,
  ContainerTreeButtons,
} from "../style_components/RecyclingBinPageStyle";

const RecyclingBinPage = () => {
  const PATH = "http://localhost:5000/";
  const [dataState, setDataState] = useState([{}]);
  const [openInputSearch, setOpenInputSearch] = useState(false);
  const [titleDescription, setTitleDescription] = useState(false);
  const [bodyDescription, setBodyDescription] = useState(false);
  const [viewDescription, setViewDescription] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [emptyBin, setEmptyBin] = useState(false);
  const [fullBin, setFullBin] = useState(false);
  const [demo, setDemo] = useState(false);
  const [nextDemo, setNextDemo] = useState(false);
  const [openInputSearchStyle, setOpenInputSearchStyle] = useState(false);

  useEffect(() => {
    Axios.get(`${PATH}read-deletions`).then((result) => {
      setDataState(result.data.reverse());
    });
  }, []);

  const handleDescription = (name, description) => {
    setTitleDescription(name);
    if (description) {
      setBodyDescription(description);
    } else {
      setBodyDescription("לא נוסף תיאור");
    }
    setViewDescription(!viewDescription);
  };

  const handleDeleteAllItems = (e) => {
    e.preventDefault();
    const listItemToDeleted = dataState.map((item) => item._id);
    if (listItemToDeleted.length === 0) {
      setEmptyBin(!emptyBin);
      setTimeout(() => {
        setNextDemo(!nextDemo);
      }, 1);
    } else {
      setFullBin(!fullBin);
      setTimeout(() => {
        setDemo(!demo);
      }, 1);
    }
  };

  const handleEmptyBin = () => {
    const listItemToDeleted = dataState.map((item) => item._id);
    Axios.delete(`${PATH}delete-all-items/${listItemToDeleted}`);
    window.location.reload(false);
  };

  const handleCancel = () => {
    setFullBin(false);
    setDemo(false);
  };

  const handleInputSearch = () => {
    setOpenInputSearch(!openInputSearch);
    setTimeout(() => {
      setOpenInputSearchStyle(!openInputSearchStyle);
    }, 1);
  };

  return (
    <>
      <ContainerRecycling>
        <CounterRecycling>
          <RiDeleteBin3Line />
          <NumberOfDelete>{dataState.length}</NumberOfDelete>
        </CounterRecycling>
        {emptyBin && (
          <MessageEmptyBin nextDemo={nextDemo}>
            <RiDeleteBin7Line /> סל המיחזור רייק
          </MessageEmptyBin>
        )}
        {fullBin && (
          <MessageFullBin demo={demo}>
            ?האם לרוקן את סל המיחזור
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ButtonEmptyBin demo={demo} onClick={() => handleCancel()}>
                לא
              </ButtonEmptyBin>
              <ButtonEmptyBin demo={demo} onClick={() => handleEmptyBin()}>
                כן
              </ButtonEmptyBin>
            </div>
          </MessageFullBin>
        )}

        <TitleRecycling>חניכים&nbsp; שנמחקו &nbsp;מהמערכת</TitleRecycling>
        <ContainerTreeButtons>
          <div>
            <a href="/">
              <HomeButton>
                <AiOutlineHome />
              </HomeButton>
            </a>
          </div>
          <div>
            <SearchButton
              openInputSearch={openInputSearch}
              onClick={() => handleInputSearch()}
            >
              <BsSearch />
            </SearchButton>
          </div>
          <div>
            <DeleteButton onClick={(e) => handleDeleteAllItems(e)}>
              <MdOutlineDeleteSweep />
            </DeleteButton>
          </div>
        </ContainerTreeButtons>
        {openInputSearch && (
          <InputSearch
            type="text"
            placeholder="הזן שם או תאריך"
            openInputSearchStyle={openInputSearchStyle}
            onChange={(e) => setValueSearch(e.target.value)}
          />
        )}
      </ContainerRecycling>

      {dataState &&
        dataState
          .filter((value) => {
            if (valueSearch === "") {
              return value;
            } else if (
              value.name.includes(valueSearch) || //  אם הערך היה באנגלית צריך להמיר אותו לאותיות קטנות על מנת שהיה חיפוש אחיד דומגה למטה
              value.dates.toLowerCase().includes(valueSearch.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <table
              id="delete-table"
              className="table table-hover"
              style={{ width: "80%", margin: "0 auto", marginTop: "2%" }}
            >
              <thead>
                <tr>
                  <th>תיאור</th>
                  <th>אפשרות לביקורים</th>
                  <th>צו</th>
                  <th>הערה</th>
                  <th>תרופות</th>
                  <th>שלב</th>
                  <th>תאריך</th>
                  <th>בית</th>
                  <th>שם</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <ButtonForm
                      onClick={() => handleDescription(item.name, item.info)}
                    >
                      <MdOutlineDescription />
                    </ButtonForm>
                  </th>
                  <td style={{ Width: "5em" }}>{item.possibilityVisits}</td>
                  <td style={{ Width: "5em" }}>{item.order}</td>
                  <td
                    style={{
                      Width: "5em",
                    }}
                  >
                    {item.note}
                  </td>
                  <td style={{ Width: "5em" }}>{item.medicines}</td>
                  <td style={{ Width: "5em" }}>{item.stage}</td>
                  <td style={{ Width: "5em" }}> {item.dates}</td>
                  <td style={{ Width: "5em" }}>{item.home}</td>
                  <td style={{ Width: "5em" }}>{item.name}</td>
                </tr>
              </tbody>
            </table>
          ))}
      {viewDescription && (
        <MessageDescription>
          <TitleDescription>{titleDescription}</TitleDescription>
          <BodyDescription>{bodyDescription}</BodyDescription>
          <ButtonForm onClick={() => setViewDescription(false)}>
            <IoMdReturnLeft />
          </ButtonForm>
        </MessageDescription>
      )}
    </>
  );
};

export default RecyclingBinPage;
