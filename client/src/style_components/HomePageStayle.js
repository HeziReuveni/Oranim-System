import styled from "styled-components";

const BackgroundHome = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const BackgroundTable = styled.div`
  color: red;
`;

const TitleSite = styled.div`
  background-color: #114bd1;
  font-size: 1.5em;
  text-align: center;
  width: 40%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 3px 5px 7px gray;
  border-radius: 0px 0px 10px 10px;
  @media screen and (max-width: 600px) {
    font-size: 1em;
    width: 50%;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  background-color: white;
  height: 70px;
  @media screen and (max-width: 600px) {
    margin-top: 60%;
  }
`;

const ButtonsHome = styled.button`
  background-color: #114bd1;
  border: 2px solid #114bd1;
  color: white;
  padding: 10px 8px;
  width: 9%;
  border-radius: 8px;
  font-size: 17px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  font-family: "Fredoka", sans-serif;
  margin: auto;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  @media screen and (max-width: 600px) {
    width: 35%;
  }
  &:hover {
    color: #114bd1;
    background: none;
    transition: background 0.3s;
  }
`;

const ContainerFormAndInput = styled.div`
  width: 80%;
  text-align: center;
  display: block;
  align-items: center;
  margin: auto;
`;

const InputForm = styled.input`
transition: color 1s, border 1s;
  width: 60%;
  background-color: white;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: ${(props) =>
    props.openStyleForm ? "2px solid #114bd1" : "2px solid white"};
  border-radius: 30px;
  outline: none;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
    transition: background-color 1s;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
  cursor: default;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: right;
    color:${(props) => (props.openStyleForm ? "#114bd1" : "white")}
    opacity: 1;
  }
`;

const InputFormDelete = styled(InputForm)`
  box-shadow: 1px 2px 3px gray;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(99, 174, 255);
  outline: none;
  border: 6px solid rgb(0, 123, 255);
`;

const SelectForm = styled.select`
  width: 60%;
  background-color: white;
  color: #114bd1;
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid #114bd1;
  border-radius: 30px;
  transition: background-color 1s;
  outline: none;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
  cursor: pointer;
  text-align: right;
  font-size: 18px;
  font-family: "Roboto Condensed", sans-serif;
`;

const Textarea = styled.textarea`
  width: 60.4%;
  background-color: white;
  color: #114bd1;
  padding: 14px 20px;
  margin: 8px 0;
  border: 2px solid #114bd1;
  border-radius: 30px;
  transition: background-color 1s;
  outline: none;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
  cursor: pointer;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: right;
    color: #114bd1;
    opacity: 1;
  }
`;

const ButtonForm = styled.button`
  background-color: white;
  color: #114bd1;
  border: 2px solid #114bd1;
  padding: 4px 18px;
  border-radius: 30px;
  font-size: 19px;
  transition: background-color 1s;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
    cursor: pointer;
  }
`;

const AddForm = styled.div`
  margin-bottom: 1%;
`;

const TitleForm = styled.div`
  transition: color 1s, border 1s, background-color 1s;
  font-size: 24px;
  width: 30%;
  margin: auto;
  color: ${(props) => (props.openStyleForm ? "rgb(0, 96, 3)" : "white")};
  border-radius: 30px;
  background-color: ${(props) =>
    props.openStyleForm ? "rgb(155, 221, 157, 0.4)" : "white"};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: ${(props) =>
    props.openStyleForm ? "2px solid rgb(0, 96, 3)" : "2px solid white"};
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 10%;
  }
`;

const MessageError = styled(TitleSite)`
  width: 20%;
  height: 5vh;
  margin-top: 1%;
  margin-bottom: 1%;
  border-radius: 6px;
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
  background-color: rgba(255, 31, 31, 0.9);
  @media screen and (max-width: 600px) {
    width: 60%;
    margin-bottom: 5%;
  }
`;

const Counter = styled.div`
  position: fixed;
  width: 6%;
  height: 8vh;
  left: 0%;
  top: 5%;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 188, 13, 0.5);
  border-radius: 0px 6px 6px 0px;
  @media screen and (max-width: 600px) {
    top: 10%;
    width: 12%;
  }
`;

const MessageIsOK = styled(MessageError)`
  margin-top: 1%;
  height: 10vh;
  padding: 4px 12px;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin-top: 4%;
  }
`;

const MessageDescription = styled.div`
  box-shadow: 3px 5px 7px gray;
  display: grid;
  width: 60%;
  position: fixed;
  top: 20%;
  left: 20%;
  border-radius: 8px;
  background-color: white;
  text-align: center;
  border: 4px solid rgb(200, 200, 200);
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 600px) {
    width: 42%;
    top: 22%;
    left: 1%;
  }
`;

const TitleDescription = styled.div`
  width: 100%;
  letter-spacing: 3px;
  background-color: rgb(0, 188, 13, 0.5);
  height: 5vh;
  font-size: 20px;
  text-align: center;
`;

const BodyDescription = styled.div`
  font-size: 18px;
  background-color: rgb(237, 237, 237);
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const MessageDeleteBody = styled.form`
  display: flex;
  width: 30%;
  position: fixed;
  top: 45%;
  left: 35%;
  border-radius: 8px;
  box-shadow: 5px 7px 9px gray;

  @media screen and (max-width: 600px) {
    width: 40%;
    left: 1%;
    top: 22%;
  }
`;

const InputMessageDeleteBody = styled.input`
  background-color: rgba(0, 128, 255);
  width: 80%;
  border: none;
  height: 7vh;
  outline: none;
  ::placeholder {
    color: white;
    text-align: right;
    padding: 8px;
  }
`;

const ButtonMessageDeleteBody = styled.button`
  background-color: rgb(96, 205, 103);
  border: 0ch;
  height: 7vh;
  color: rgb(59, 59, 59);
  padding: 4px 12px;
  border-radius: 8px 0px 0px 8px;
  &:hover {
    background-color: rgb(99, 217, 99);
    color: black;
  }
`;

const BackMessageDeleteBody = styled.button`
  background-color: rgb(167, 167, 167);
  border: 0ch;
  height: 7vh;
  color: white;
  font-size: 22px;
  padding: 0px 16px;
  border-radius: 0px 8px 8px 0px;
  &:hover {
    color: red;
  }
`;

const IncorrectPasswordMessage = styled.div`
  width: 20%;
  position: fixed;
  top: 60%;
  left: 50%;
  height: 10vh;
  display: flex;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  align-items: center;
  font-size: 20px;
  border-radius: 6px;
  box-shadow: 1px 2px 3px gray;
  color: white;
  transform: translate(-50%, -50%);
  background-color: red;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 30%;
    left: 22%;
    top: 30%;
    height: 8vh;
  }
`;

const ContainerSettings = styled.button`
  position: fixed;
  right: 2%;
  top: 3%;
  font-size: 20px;
  background-color: rgb(187, 187, 187);
  border-radius: 50px;
  box-shadow: 3px 5px 7px gray;
  border: 0ch;
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: font-size 0.5s, color 0.5s, background-color 0.5s;
  &:hover {
    background-color: rgb(202, 202, 202);
    font-size: 26px;
    color: #114bd1;
  }
  @media screen and (max-width: 600px) {
    width: 3em;
    border-radius: 50px;
    left: 1%;
    top: 1%;
  }
`;

const WindowSettings = styled.div`
  height: 20vh;
  background-color: #d1d1d1;
  width: ${(props) => (props.click ? "10%" : "18%")};
  position: fixed;
  transition: width 1s;
  right: 0%;
  top: 15%;
  border-radius: 16px 0px 0px 16px;
  box-shadow: 3px 5px 7px gray;
  display: grid;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.click ? "30vw" : "80vw")};
    left: 0%;
    top: 7%;
    border-radius: 0px 16px 16px 0px;
  }
`;

const ValidPassword = styled(IncorrectPasswordMessage)`
  background-color: green;
`;

const ContainerButtonsSetting = styled.a`
  text-decoration: none;
  width: ${(props) => (props.click ? "8vw" : "12vw")};
  color: ${(props) => (props.click ? "#cecece" : "#114bd1")};
  transition: color 1.5s, width 1s;
  display: flex;
  justify-content: space-around;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
  border: none;
  height: 6vh;
  &:hover {
    border-bottom: 2px solid rgb(169, 169, 169);
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContentPassword = styled.div`
  width: 30%;
  height: 10vh;
  margin: 0 auto;
  margin-top: 25%;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const ContainerFormNewPassword = styled.form`
  position: fixed;
  left: 50%;
  top: 40%;
  width: 100%;
  height: 120vh;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(14px);
  padding: 18px 18px;
  border-radius: 6px;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 30%;
    max-height: 80vh;
    top: 32%;
    left: 18%;
    border: 2px solid green;
  }
`;

const InputFormNewPassword = styled(InputForm)`
  background-color: #d3d3d3;
  width: 100%;
  outline: none;
  ::placeholder {
    color: rgb(52, 52, 52);
  }
  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

const ButtonFormNewPassword = styled(ButtonForm)`
  border: 2px solid rgb(0, 129, 26);
  color: rgb(0, 129, 26);
  &:hover {
    background-color: rgb(192, 255, 205);
    color: rgb(0, 88, 18);
  }
`;

export const ForgotPassword = styled.button`
  color: red;
  cursor: pointer;
  border: 0ch;
  background: none;
  &:hover {
    color: green;
  }
`;

export const NewInput = styled.input`
  margin-top: 1%;
  height: 8vh;
  width: ${(props) => (props.password ? "60%" : "0%")};
  background-color: ${(props) => (props.password ? "white" : "white")};
  transition: width 1s, background-color 1s;
  color: #114bd1;
  padding: 14px 20px;
  border: 2px solid #114bd1;
  border-radius: 30px;
  outline: none;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.password ? "85%" : "0%")};
    margin-top: 4%;
  }
  cursor: default;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: right;
    color: #114bd1;
    opacity: 1;
  }
`;

export const InputEditRow = styled(NewInput)`
  width: ${(props) => (props.password ? "80%" : "0%")};
`;

export const InputSearch = styled.input`
  height: 8vh;
  width: ${(props) => (props.searchInput ? "60%" : "0%")};
  background-color: ${(props) => (props.openComp ? "white" : "white")};
  transition: width 1s, background-color 1s, height 1s;
  color: #114bd1;
  padding: 14px 20px;
  border: ${(props) =>
    props.searchInput ? "2px solid #114bd1" : "2px solid white"};
  border-radius: 30px;
  outline: none;
  transition: width 1s, background-color 1s, height 1s;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.searchInput ? "85%" : "0%")};
  }
  cursor: default;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: right;
    color: #114bd1;
    opacity: 1;
  }
`;

export const NewButtonForm = styled(ButtonForm)`
  margin-top: 1%;
  color: ${(props) => (props.password ? "#114bd1" : "white")};
  border-radius: 30px;
  width: 20%;
  background-color: ${(props) => (props.password ? "white" : "white")};
  border: ${(props) =>
    props.password ? "2px solid #114bd1" : "2px solid white"};
  transition: background-color 1s, width 1s, border 1s, color 2s;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
    box-shadow: none;
  }
  @media screen and (max-width: 600px) {
    margin-top: 4%;
    width: 40%;
    margin-bottom: 4%;
  }
`;

export const ContainerFormPassword = styled.div`
  position: fixed;
  top: 20%;
  width: 40%;
  height: 60vh;
  left: 30%;
  backdrop-filter: blur(20px);
  @media screen and (max-width: 600px) {
    left: 1%;
    top: 20%;
    height: 60vh;
  }
`;

export const TitleNewForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 10vh;
  background-color: #114bd1;
  color: white;
  font-size: 1.5em;
  letter-spacing: 2px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const FormNewPassword = styled.form`
  margin: 0 auto;
  margin-top: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NewFormInput = styled.input`
  margin: 0 auto;
  margin-top: 1%;
  height: 8vh;
  width: ${(props) => (props.passwordWindowStyle ? "80%" : "0%")};
  background-color: ${(props) => (props.openStyleInput ? "white" : "white")};
  transition: width 1s, background-color 1s;
  color: #114bd1;
  padding: 14px 20px;
  border: 2px solid #114bd1;
  border-radius: 30px;
  outline: none;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.passwordWindowStyle ? "80%" : "0%")};
    margin-top: 4%;
  }
  cursor: default;
  text-align: center;
  ::placeholder {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: right;
    color: #114bd1;
    opacity: 1;
  }
`;

export const NewButtonFormChange = styled(ButtonForm)`
  margin: 0 auto;
  margin-top: 1%;
  height: 8vh;
  color: ${(props) => (props.passwordWindowStyle ? "#114bd1" : "white")};
  border-radius: 30px;
  background: none;
  width: ${(props) => (props.passwordWindowStyle ? "80%" : "40%")};
  border: ${(props) =>
    props.passwordWindowStyle ? "2px solid #114bd1" : "2px solid white"};
  transition: background-color 1s, width 1s, border 1s, color 2s;
  &:hover {
    background-color: rgba(0, 128, 255, 0.2);
    box-shadow: none;
  }
  @media screen and (max-width: 600px) {
    margin-top: 4%;
    width: ${(props) => (props.passwordWindowStyle ? "80%" : "35%")};
    margin-bottom: 4%;
  }
`;

export const ButtonForgetPassword = styled(NewButtonFormChange)`
  margin-top: 5%;
  width: 40%;
`;

export const ContainerForgetPassword = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ContainerTextarea = styled.div`
  width: 60%;
  height: 30%;
  position: fixed;
  left: 32%;
  top: 20%;
  @media screen and (max-width: 600px) {
    left: 1%;
    top: 22%;
    width: 50%;
  }
`;

export const ContainerButtonsTextarea = styled.div`
  display: flex;
  width: 60%;
  box-shadow: 3px 5px 7px gray;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 10vh;
  border: 2px solid #114bd1;
  border-radius: 30px;
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const ContainerTitleTextarea = styled(ContainerButtonsTextarea)`
  justify-content: center;
  box-shadow: 3px 5px 7px gray;
  font-size: 1.4em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #114bd1;
  @media screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const ShapeTextarea = styled(Textarea)`
  height: 30vh;
  box-shadow: 3px 5px 7px gray;
  background-color: ${(props) => (props.openTextCardStyle ? "white" : "white")};
  transition: background-color 1s;
  &:hover {
    background: white;
  }
`;

export default BackgroundHome;
export {
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
  InputFormDelete,
  InputMessageDeleteBody,
  ButtonMessageDeleteBody,
  BackMessageDeleteBody,
  IncorrectPasswordMessage,
  ValidPassword,
  ContainerSettings,
  WindowSettings,
  ContainerButtonsSetting,
  ContainerFormNewPassword,
  InputFormNewPassword,
  ButtonFormNewPassword,
};
