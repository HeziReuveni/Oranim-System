import React, { useState, useRef, useEffect } from "react";
import ItemClearanceExit from "./ItemClearanceExit";
import Axios from "axios";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "../sigCanvas.css";
import { FaSignature } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlinePassword, MdOutlineCleaningServices } from "react-icons/md";
import { RiLockPasswordLine, RiDeleteBin7Line } from "react-icons/ri";
import {
  TitleSite,
  ContainerButtons,
  ButtonsHome,
  InputForm,
  AddForm,
  TitleForm,
  ButtonForm,
  NewInput,
  NewButtonForm,
  FormPassword,
  MessageError,
  HomeButton,
  SearchButton,
  NewInputSearch,
  ChangePassword,
  WindowPassword,
  FormWindowPassword,
  NewFormInput,
  NewButtonFormChange,
  TitleNewFormPassword,
  ContainerTreeButtons,
  DeleteButton,
  MessageFullBin,
  ButtonEmptyBin,
  MessageEmptyBin,
} from "../style_components/ExitClearanceStyle";

const ExitClearance = () => {
  const PATH = "http://localhost:5000/";
  const [clearanceList, setClearanceList] = useState([{}]);
  const [openExitForm, setOpenExitForm] = useState(false);
  const [openStyleForm, setOpenStyleForm] = useState(false);
  const [openStyleInput, setOpenStyleInput] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  const [needSigCanvas, setNeedSigCanvas] = useState(false);
  const [name, setName] = useState("");
  const [home, setHome] = useState("");
  const [crewMember, setCrewMember] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [thisPassword, setThisPassword] = useState("");
  const [thisDate, setThisDate] = useState("");
  const [thisHour, setThisHour] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [tryAgainPassword, setTryAgainPassword] = useState(false);
  const [nameAndDeadline, setNameAndDeadline] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [openWindowSearch, setOpenWindowSearch] = useState(false);
  const [openWindowSearchStyle, setOpenWindowSearchStyle] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [passwordWindowStyle, setPasswordWindowStyle] = useState(false);
  const [verification, setVerification] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [notChangePassword, setNotChangePassword] = useState("");
  const [emptyBin, setEmptyBin] = useState(false);
  const [nextDemo, setNextDemo] = useState(false);
  const [demo, setDemo] = useState(false);
  const [fullBin, setFullBin] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    Axios.get(`${PATH}read-clearance`).then((result) => {
      setClearanceList(result.data.reverse());
    });
    Axios.get(`${PATH}read-exit-password`).then((result) => {
      const len = result.data.length - 1;
      setCurrentPassword(result.data[len].exitPassword);
    });
    Axios.get(`${PATH}read-code`).then((result) => {
      setVerificationCode(result.data[0].VerificationCode);
    });
  }, []);

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (thisPassword === currentPassword) {
      setOpenExitForm(!openExitForm);
      setTimeout(() => {
        setOpenStyleForm(!openStyleForm);
        setTryAgainPassword(false);
      }, 1);
    } else {
      setTryAgainPassword(!tryAgainPassword);
    }
  };

  const handleInputExit = () => {
    setOpenWindow(!openWindow);
    setIsActive(!isActive);
    setTimeout(() => {
      setOpenStyleInput(!openStyleInput);
    }, 1);
  };

  const handleAddForm = (e) => {
    e.preventDefault();

    const today = new Date();
    const hour = new Date();
    const thisDay =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    setThisDate(thisDay);
    if (hour.getMinutes().toString().length === 2) {
      setThisHour(hour.getHours() + ":" + hour.getMinutes());
    } else {
      setThisHour(hour.getHours() + ":" + "0" + hour.getMinutes());
    }
    if (imageURL) {
      const details = {
        name,
        home,
        crewMember,
        thisDate,
        thisHour,
        imageURL,
      };
      setNameAndDeadline(!nameAndDeadline);
      setTimeout(() => {
        Axios.post(`${PATH}inserting-clearance`, details);
        window.location.reload(false);
      }, 3000);
    } else {
      setNeedSigCanvas(!needSigCanvas);
    }
  };

  const handleSearchInput = () => {
    setOpenWindowSearch(!openWindowSearch);
    setTimeout(() => {
      setOpenWindowSearchStyle(!openWindowSearchStyle);
    }, 1);
  };

  const handleChangePassword = () => {
    setOpenChangePassword(!openChangePassword);
    setTimeout(() => {
      setPasswordWindowStyle(!passwordWindowStyle);
    }, 1);
  };

  const handleExitPassword = (e) => {
    e.preventDefault();
    if (verification === verificationCode && firstPassword === secondPassword) {
      Axios.post(`${PATH}insert-exit-password`, {
        exitPassword: firstPassword,
      });
      setChangePassword(!changePassword);
      setNotChangePassword(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 2500);
    } else {
      setNotChangePassword(!notChangePassword);
      setChangePassword(false);
      setTimeout(() => {
        setNotChangePassword(false);
      }, 2500);
    }
  };
  const handleDeleteAllItems = (e) => {
    e.preventDefault();
    const listItemToDeleted = clearanceList.map((item) => item._id);
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
    const myDay = new Date();
    const thisDay =
      myDay.getDate() +
      "/" +
      (myDay.getMonth() + 1) +
      "/" +
      myDay.getFullYear();
    const listToDelete = clearanceList.filter(
      (item) => item.thisDate !== thisDay
    );
    const listItemToDeleted = listToDelete.map((item) => item._id);
    Axios.delete(`${PATH}delete-all-clearance/${listItemToDeleted}`);
    window.location.reload(false);
  };

  const handleCancel = () => {
    setFullBin(false);
    setDemo(false);
  };

  return (
    <>
      <TitleSite>אישורי &nbsp;יציאה</TitleSite>
      <ContainerTreeButtons>
        <div>
          <a href="/">
            <HomeButton>
              <AiOutlineHome />
            </HomeButton>
          </a>
        </div>
        <div>
          <ChangePassword onClick={() => handleChangePassword()}>
            <MdOutlinePassword />
          </ChangePassword>
        </div>
        <div>
          <SearchButton onClick={() => handleSearchInput()}>
            <BsSearch />
          </SearchButton>
        </div>
        <div>
          <DeleteButton onClick={(e) => handleDeleteAllItems(e)}>
            <MdOutlineCleaningServices />
          </DeleteButton>
        </div>
      </ContainerTreeButtons>
      {emptyBin && (
        <MessageEmptyBin nextDemo={nextDemo}>
          <RiDeleteBin7Line /> לא קיימים אישורי יציאה
        </MessageEmptyBin>
      )}
      {fullBin && (
        <MessageFullBin demo={demo}>
          ?האם לנקות תאריכים ישנים
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <ButtonEmptyBin demo={demo} onClick={() => handleCancel()}>
              לא
            </ButtonEmptyBin>
            <ButtonEmptyBin demo={demo} onClick={() => handleEmptyBin()}>
              כן
            </ButtonEmptyBin>
          </div>
        </MessageFullBin>
      )}
      <ContainerButtons>
        <ButtonsHome onClick={() => handleInputExit()}>
          אישור יציאה לחניך
        </ButtonsHome>
      </ContainerButtons>
      {openChangePassword && (
        <WindowPassword passwordWindowStyle={passwordWindowStyle}>
          <FormWindowPassword onSubmit={handleExitPassword}>
            <TitleNewFormPassword openWindowSearchStyle={openWindowSearchStyle}>
              <RiLockPasswordLine style={{ marginRight: "4%" }} />
              שינוי סיסמה
            </TitleNewFormPassword>
            <NewFormInput
              required
              type="password"
              onChange={(e) => setVerification(e.target.value)}
              passwordWindowStyle={passwordWindowStyle}
              placeholder="הזן קוד הרשאה"
            />
            <NewFormInput
              required
              type="password"
              onChange={(e) => setFirstPassword(e.target.value)}
              passwordWindowStyle={passwordWindowStyle}
              placeholder="הזן סיסמה חדשה"
            />
            <NewFormInput
              required
              type="password"
              onChange={(e) => setSecondPassword(e.target.value)}
              passwordWindowStyle={passwordWindowStyle}
              placeholder="הזן שוב סיסמה חדשה"
            />
            <NewButtonFormChange passwordWindowStyle={passwordWindowStyle}>
              שנה סיסמה
            </NewButtonFormChange>
          </FormWindowPassword>
          {changePassword && (
            <MessageError
              style={{
                width: "80%",
                backgroundColor: "green",
                marginTop: "4%",
              }}
            >
              הסיסמה שונתה בהצלחה
            </MessageError>
          )}
          {notChangePassword && (
            <MessageError
              style={{ width: "80%", backgroundColor: "red", marginTop: "4%" }}
            >
              פרטים לא תקינים
            </MessageError>
          )}
        </WindowPassword>
      )}
      {openWindowSearch && (
        <div>
          <NewInputSearch
            placeholder="הזן שם או תאריך"
            openWindowSearchStyle={openWindowSearchStyle}
            onChange={(e) => setValueSearch(e.target.value)}
          />
        </div>
      )}
      {openWindow && (
        <FormPassword
          openStyleInput={openStyleInput}
          onSubmit={handleSubmitPassword}
        >
          <NewInput
            type="password"
            openStyleInput={openStyleInput}
            placeholder="הזן סיסמה"
            onChange={(e) => setThisPassword(e.target.value)}
          />
          <NewButtonForm openStyleInput={openStyleInput}>אישור</NewButtonForm>
        </FormPassword>
      )}
      {tryAgainPassword && (
        <MessageError style={{ backgroundColor: "red" }}>
          הסיסמה שגויה
        </MessageError>
      )}
      {openExitForm && (
        <>
          <AddForm onSubmit={handleAddForm}>
            <TitleForm openStyleForm={openStyleForm}>
              אישור יציאה לחניך
            </TitleForm>
            <InputForm
              maxLength="20"
              openStyleForm={openStyleForm}
              required
              placeholder="שם"
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              maxLength="20"
              openStyleForm={openStyleForm}
              required
              placeholder="בית"
              onChange={(e) => setHome(e.target.value)}
            />
            <InputForm
              required
              maxLength="20"
              openStyleForm={openStyleForm}
              onChange={(e) => setCrewMember(e.target.value)}
              placeholder="שם איש צוות"
            />
            <Popup
              modal
              required
              trigger={
                <div>
                  <button className="button-signature">
                    <FaSignature />
                    &nbsp; &nbsp; חתימה
                  </button>
                </div>
              }
              closeOnDocumentClick={false}
            >
              {(close) => (
                <>
                  <SignaturePad
                    required
                    ref={sigCanvas}
                    canvasProps={{
                      className: "signatureCanvas",
                    }}
                  />
                  <div className="container-buttons">
                    <button onClick={save}>שמור</button>
                    <button onClick={clear}>נקה</button>
                    <button onClick={close}>סגור</button>
                  </div>
                </>
              )}
            </Popup>
            {needSigCanvas && (
              <MessageError style={{ backgroundColor: "red" }}>
                חייב למלא חתימה
              </MessageError>
            )}
            <div>
              {!nameAndDeadline ? (
                <ButtonForm>הנפק אישור</ButtonForm>
              ) : (
                <div className="message-correct">
                  הונפק אישור יציאה עבור {name}
                </div>
              )}
            </div>
          </AddForm>
        </>
      )}
      {clearanceList &&
        clearanceList
          .filter((value) => {
            if (valueSearch === "") {
              return value;
            } else if (
              value.name.includes(valueSearch) ||
              value.thisDate.includes(valueSearch)
            ) {
              return value;
            }
          })
          .map((item, i) => (
            <ItemClearanceExit item={item} i={i} PATH={PATH} />
          ))}
    </>
  );
};

export default ExitClearance;
