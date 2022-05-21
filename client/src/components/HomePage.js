import React, { useState } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import axios from "axios";
import "../sigCanvas.css";
import img from "../images/0b90f5cb-3646-4c66-93e9-5e6f6dbadf5b.jpg";
import BackgroundHome, {
  TitleSite,
  ContainerButtons,
  ButtonsHome,
  ContainerFormAndInput,
  AddForm,
  InputForm,
  SelectForm,
  Textarea,
  ButtonForm,
  TitleForm,
  MessageError,
  Counter,
  MessageIsOK,
  MessageDescription,
  TitleDescription,
  BodyDescription,
  MessageDeleteBody,
  InputMessageDeleteBody,
  ButtonMessageDeleteBody,
  BackMessageDeleteBody,
  IncorrectPasswordMessage,
  ValidPassword,
  ContainerSettings,
  WindowSettings,
  ContainerButtonsSetting,
  InputSearch,
  NewInput,
  NewButtonForm,
  ContainerFormPassword,
  FormNewPassword,
  TitleNewForm,
  NewFormInput,
  NewButtonFormChange,
} from "../style_components/HomePageStayle";
import { BiSearch } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import {
  MdSupervisorAccount,
  MdOutlineCancelPresentation,
} from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import { IoMdReturnLeft } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { RiLockPasswordLine, RiUserShared2Line } from "react-icons/ri";

const HomePage = ({
  listTrainees,
  currentPassword,
  PATH,
  verificationCode,
}) => {
  const [openWindow, setOpenWindow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [password, setPassword] = useState("");
  const [addInput, setAddInput] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [name, setName] = useState("");
  const [home, setHome] = useState("");
  const [dates, setDates] = useState("");
  const [stage, setStage] = useState("");
  const [medicines, setMedicines] = useState("");
  const [note, setNote] = useState("");
  const [order, setOrder] = useState("");
  const [info, setInfo] = useState("");
  const [possibilityVisits, setPossibilityVisits] = useState("");
  const [isProper, setIsProper] = useState(false);
  const [isNotProper, setIsNotProper] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [viewDescription, setViewDescription] = useState(false);
  const [titleDescription, setTitleDescription] = useState(false);
  const [bodyDescription, setBodyDescription] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [thisId, setThisId] = useState("");
  const [deletedName, setDeletedName] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [thisName, setThisName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [openWindowSettings, setOpenWindowSettings] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [click, setClick] = useState(true);
  const [newName, setNewName] = useState("");
  const [newHome, setNewHome] = useState("");
  const [newDates, setNewDates] = useState("");
  const [newStage, setNewStage] = useState("");
  const [newMedicines, setNewMedicines] = useState("");
  const [newOrder, setNewOrder] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [newPossibilityVisits, setNewPossibilityVisits] = useState("");
  const [openSearchWindow, setOpenSearchWindow] = useState(false);
  const [openAddWindow, setOpenAddWindow] = useState(false);
  const [openStyleForm, setOpenStyleForm] = useState(false);
  const [passwordWindowStyle, setPasswordWindowStyle] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [notChangePassword, setNotChangePassword] = useState(false);

  const handleSubmitExitForm = () => {
    const details = {
      name,
      home,
      dates,
      stage,
      medicines,
      note,
      order,
      info,
      possibilityVisits,
    };
    if (name && home) {
      axios.post(`${PATH}insert`, details);
      setIsProper(!isProper);
      setIsNotProper(false);
      window.location.reload(false);
    } else {
      setIsNotProper(!isNotProper);
      setIsProper(false);
    }
  };

  const handleOpenAddForm = (e) => {
    e.preventDefault();
    if (openWindow === currentPassword) {
      setAddInput(!addInput);
      setTimeout(() => {
        setOpenStyleForm(!openStyleForm);
      }, 1);
      setTimeout(() => {
        setPassword(false);
      }, 2000);
      setTimeout(() => {
        setOpenAddWindow(false);
      }, 2500);
    } else {
      setErrorMessage(!errorMessage);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    }
  };

  const handleDelete = (
    id,
    name,
    home,
    dates,
    stage,
    medicines,
    order,
    possibilityVisits,
    info
  ) => {
    setDeleteItem(!deleteItem);
    setThisId(id);
    setDeletedName(name);
    setNewName(name);
    setNewHome(home);
    setNewDates(dates);
    setNewStage(stage);
    setNewMedicines(medicines);
    setNewOrder(order);
    setNewPossibilityVisits(possibilityVisits);
    setNewInfo(info);
    setViewDescription(false);
    setUpdatePassword(false);
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    if (deletePassword === currentPassword) {
      setValidPassword(!validPassword);
      const NewDetails = {
        deletedName,
        newName,
        newHome,
        newDates,
        newStage,
        newMedicines,
        newOrder,
        newPossibilityVisits,
        newInfo,
      };
      axios.post(`${PATH}inserting-deletions`, NewDetails);
      setTimeout(() => {
        axios.delete(`${PATH}delete/${thisId}`);
        window.location.reload(false);
      }, 2000);
    } else {
      setThisName(!thisName);
      setTimeout(() => {
        setThisName(false);
      }, 2000);
    }
  };
  const handleDescription = (name, description) => {
    setDeleteItem(false);
    setUpdatePassword(false);
    setTitleDescription(name);
    if (description) {
      setBodyDescription(description);
    } else {
      setBodyDescription("לא נוסף תיאור");
    }
    setViewDescription(!viewDescription);
  };

  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    if (firstPassword === verificationCode && secondPassword === newPassword) {
      axios.post(`${PATH}insert-password`, {
        currentPassword: newPassword,
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

  const handleSearchInputWindow = () => {
    setOpenSearchWindow(!openSearchWindow);
    setTimeout(() => {
      setSearchInput(!searchInput);
    }, 1);
  };

  const handleAddWindow = () => {
    setOpenAddWindow(!openAddWindow);
    setTimeout(() => {
      setPassword(!password);
    }, 1);
  };

  const handleWindowSetting = () => {
    setOpenWindowSettings(!openWindowSettings);
    setPasswordWindowStyle(false);
    setUpdatePassword(false);
    setTimeout(() => {
      setClick(!click);
    }, 1);
  };

  const handleWindowNewPassword = () => {
    setUpdatePassword(!updatePassword);
    setDeleteItem(false);
    setViewDescription(false);
    setTimeout(() => {
      setPasswordWindowStyle(!passwordWindowStyle);
    }, 1);
  };

  return (
    <>
      <BackgroundHome>
        <Counter>
          <MdSupervisorAccount style={{ fontSize: "30px" }} />
          <br></br>
          {listTrainees.length}
        </Counter>
        <div>
          <img className="logo-image" src={img} />
        </div>
        {updatePassword && (
          <ContainerFormPassword passwordWindowStyle={passwordWindowStyle}>
            <TitleNewForm>
              <RiLockPasswordLine style={{ marginRight: "4%" }} />
              שינוי סיסמה
            </TitleNewForm>
            <FormNewPassword onSubmit={handleSubmitNewPassword}>
              <NewFormInput
                required
                type="password"
                onChange={(e) => setFirstPassword(e.target.value)}
                passwordWindowStyle={passwordWindowStyle}
                placeholder="הזן קוד הרשאה"
              />
              <NewFormInput
                required
                type="password"
                onChange={(e) => setSecondPassword(e.target.value)}
                passwordWindowStyle={passwordWindowStyle}
                placeholder="הזן סיסמה חדשה"
              />
              <NewFormInput
                required
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                passwordWindowStyle={passwordWindowStyle}
                placeholder="הזן שוב סיסמה חדשה"
              />
              <NewButtonFormChange passwordWindowStyle={passwordWindowStyle}>
                שנה סיסמה
              </NewButtonFormChange>
            </FormNewPassword>
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
                style={{
                  width: "80%",
                  backgroundColor: "red",
                  marginTop: "4%",
                }}
              >
                פרטים לא תקינים
              </MessageError>
            )}
          </ContainerFormPassword>
        )}
        <ContainerSettings onClick={() => handleWindowSetting()}>
          <IoIosApps />
        </ContainerSettings>
        {openWindowSettings && (
          <WindowSettings click={click}>
            <ContainerButtonsSetting click={click} href="/exit">
              <RiUserShared2Line />
              &nbsp; אישורי יציאה
            </ContainerButtonsSetting>
            <ContainerButtonsSetting click={click} href="/deletions">
              <ImBin2 click={click} />
              &nbsp; &nbsp; &nbsp; סל מיחזור
            </ContainerButtonsSetting>
            <ContainerButtonsSetting
              click={click}
              onClick={() => handleWindowNewPassword()}
            >
              <RiLockPasswordLine />
              &nbsp; שינוי סיסמה
            </ContainerButtonsSetting>
          </WindowSettings>
        )}
        <TitleSite>יציאות &nbsp;וחופשות &nbsp;חניכים</TitleSite>
        <ContainerButtons>
          <ButtonsHome onClick={() => handleAddWindow()}>
            <TiUserAdd />
            הוסף חניך
          </ButtonsHome>
          <ButtonsHome onClick={() => handleSearchInputWindow()}>
            <BiSearch />
            חפש חניך
          </ButtonsHome>
        </ContainerButtons>
        <ContainerFormAndInput>
          {openSearchWindow && (
            <InputSearch
              searchInput={searchInput}
              onChange={(e) => setValueSearch(e.target.value)}
              placeholder="הזן שם או תאריך"
            />
          )}
          {openAddWindow && (
            <div>
              <NewInput
                password={password}
                placeholder="הכנס סיסמה כדי להוסיף חניך"
                type="password"
                onChange={(e) => setOpenWindow(e.target.value)}
              />
              <div>
                <NewButtonForm password={password} onClick={handleOpenAddForm}>
                  אישור
                </NewButtonForm>
              </div>
            </div>
          )}
          {errorMessage && <MessageError>הסיסמה שגויה</MessageError>}
          {addInput && (
            <div>
              <AddForm>
                <TitleForm openStyleForm={openStyleForm}>טופס יציאה</TitleForm>
                <InputForm
                  maxLength="10"
                  openStyleForm={openStyleForm}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="שם"
                  required
                />
                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  type="text"
                  onChange={(e) => setHome(e.target.value)}
                  placeholder="בית"
                  required
                />
                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="  הכנס תאריך יציאה וחזרה"
                />
                <TitleForm openStyleForm={openStyleForm}>פרטי החניך</TitleForm>
                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  required
                  value={name}
                  placeholder="שם"
                />
                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  required
                  value={home}
                  placeholder="בית"
                />

                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  onChange={(e) => setStage(e.target.value)}
                  placeholder="שלב"
                />
                <InputForm
                  maxLength="20"
                  openStyleForm={openStyleForm}
                  onChange={(e) => setMedicines(e.target.value)}
                  placeholder="תרופות"
                />
                <InputForm
                  maxLength="30"
                  openStyleForm={openStyleForm}
                  onChange={(e) => setPossibilityVisits(e.target.value)}
                  placeholder="אפשרות לביקורים"
                />

                <SelectForm
                  openStyleForm={openStyleForm}
                  onClick={(e) => setOrder(e.target.value)}
                >
                  <option hidden>צו</option>
                  <option>כן</option>
                  <option>לא</option>
                </SelectForm>
                <Textarea
                  maxLength="2000"
                  openStyleForm={openStyleForm}
                  onChange={(e) => setInfo(e.target.value)}
                  placeholder="הוסף תיאור"
                ></Textarea>
                <div>
                  <ButtonForm
                    openStyleForm={openStyleForm}
                    onClick={handleSubmitExitForm}
                  >
                    הוסף
                  </ButtonForm>
                </div>
              </AddForm>
            </div>
          )}
          {isNotProper && (
            <MessageIsOK>פרטים לא תקינים. הכנס שם ובית</MessageIsOK>
          )}
        </ContainerFormAndInput>
        {listTrainees &&
          listTrainees
            .filter((value) => {
              if (valueSearch === "") {
                return value;
              } else if (
                value.name.includes(valueSearch) ||
                value.dates.includes(valueSearch)
              ) {
                return value;
              }
            })
            .map((item, i) => (
              <ReadOnlyRow
                key={i}
                handleDescription={handleDescription}
                handleDelete={handleDelete}
                item={item}
                PATH={PATH}
                setViewDescription={setViewDescription}
                setDeleteItem={setDeleteItem}
                setUpdatePassword={setUpdatePassword}
              />
            ))}
        {viewDescription && (
          <MessageDescription>
            <TitleDescription>{titleDescription}</TitleDescription>
            <BodyDescription>{bodyDescription}</BodyDescription>
            <ButtonForm
              style={{ borderRadius: "0px 0px 4px 4px" }}
              onClick={() => setViewDescription(false)}
            >
              <IoMdReturnLeft />
            </ButtonForm>
          </MessageDescription>
        )}
        {deleteItem && (
          <MessageDeleteBody onSubmit={handleDeleteItem}>
            <ButtonMessageDeleteBody onClick={() => handleDeleteItem}>
              אישור
            </ButtonMessageDeleteBody>
            <InputMessageDeleteBody
              onChange={(e) => setDeletePassword(e.target.value)}
              type="password"
              placeholder="הזן סיסמה כדי למחוק חניך"
            />
            <BackMessageDeleteBody onClick={() => setDeleteItem(false)}>
              <MdOutlineCancelPresentation />
            </BackMessageDeleteBody>
          </MessageDeleteBody>
        )}
        {thisName && (
          <IncorrectPasswordMessage>הסיסמה שגויה</IncorrectPasswordMessage>
        )}
        {validPassword && (
          <ValidPassword>{deletedName} - נמחק/ה מהמערכת</ValidPassword>
        )}
      </BackgroundHome>
    </>
  );
};

export default HomePage;
