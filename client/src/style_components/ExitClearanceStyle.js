import styled from "styled-components";

export const TitleSite = styled.div`
  background-color: #114bd1;
  font-size: 1.5em;
  text-align: center;
  width: 40%;
  height: 10vh;
  margin: 0 auto;
  letter-spacing: 2px;
  display: flex;
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

export const ContainerButtons = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  margin-top: -20%;
  justify-content: center;
  background-color: white;
  height: 70px;
`;

export const ButtonsHome = styled.button`
  background-color: #114bd1;
  border: 2px solid #114bd1;
  color: white;
  padding: 10px 8px;
  width: 20%;
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
    width: 65%;
  }
  &:hover {
    color: #114bd1;
    background: none;
    transition: background 0.3s;
  }
`;

export const InputForm = styled.input`
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

export const AddForm = styled.form`
  text-align: center;
  margin-bottom: 1%;
`;

export const TitleForm = styled.div`
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

export const ButtonForm = styled.button`
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

export const NewInput = styled.input`
  margin: 0 auto;
  margin-top: 1%;
  height: 8vh;
  width: ${(props) => (props.openStyleInput ? "50%" : "0%")};
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
    width: ${(props) => (props.openStyleInput ? "70%" : "0%")};
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

export const NewButtonForm = styled(ButtonForm)`
  margin: 0 auto;
  margin-top: 1%;
  color: ${(props) => (props.openStyleInput ? "#114bd1" : "white")};
  border-radius: 30px;
  width: 20%;
  background-color: ${(props) => (props.openStyleInput ? "white" : "white")};
  border: ${(props) =>
    props.openStyleInput ? "2px solid #114bd1" : "2px solid white"};
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

export const FormPassword = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MessageError = styled(TitleSite)`
  width: 20%;
  height: 5vh;
  margin-top: 1%;
  margin-bottom: 1%;
  border-radius: 6px;
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
  background-color: rgba(255, 31, 31, 0.7);
  @media screen and (max-width: 600px) {
    width: 60%;
    margin-bottom: 5%;
  }
`;

export const IncorrectPasswordMessage = styled(MessageError)`
height: 8vh;
  }
`;

export const HomeButton = styled.button`
  width: 3.8em;
  height: 3.8em;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  background-color: #114bd1;
  box-shadow: 1px 2px 3px gray;
  cursor: pointer;
  transition: font-size 0.5s;
  border: 0ch;
  &:hover {
    font-size: 25px;
    color: #282c34;
    background-color: rgba(0, 128, 255, 0.5);
    transition: font-size 0.5s, border 0.5s, color 0.5s, background-color 0.5s;
  }
  @media screen and (max-width: 600px) {
    left: 3%;
    top: 1%;
    width: 3em;
    height: 3em;
  }
`;

export const SearchButton = styled.button`
  width: 3.8em;
  height: 3.8em;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  background-color: #114bd1;
  transition: font-size 0.5s;
  border: 0ch;
  box-shadow: 1px 2px 3px gray;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    left: 3%;
    top: 8%;
    width: 3em;
    height: 3em;
  }
  &:hover {
    font-size: 25px;
    color: #282c34;
    background-color: rgba(0, 128, 255, 0.5);
    transition: font-size 0.5s, border 0.5s, color 0.5s, background-color 0.5s;
  }
`;

export const ChangePassword = styled.button`
  width: 3.8em;
  height: 3.8em;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  background-color: #114bd1;
  transition: font-size 0.5s;
  border: 0ch;
  box-shadow: 1px 2px 3px gray;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    left: 3%;
    top: 15%;
    width: 3em;
    height: 3em;
  }
  &:hover {
    font-size: 25px;
    color: #282c34;
    background-color: rgba(0, 128, 255, 0.5);
    transition: font-size 0.5s, border 0.5s, color 0.5s, background-color 0.5s;
  }
`;
export const NewInputSearch = styled(NewInput)`
  margin-left: 25%;
  width: ${(props) => (props.openWindowSearchStyle ? "50%" : "0%")};
  @media screen and (max-width: 600px) {
    width: ${(props) => (props.openWindowSearchStyle ? "70%" : "0%")};
    margin-left: 15%;
  }
`;

export const WindowPassword = styled.div`
  position: fixed;
  left: 30%;
  backdrop-filter: blur(20px);

  width: 40%;
  height: 60vh;
  @media screen and (max-width: 600px) {
    width: 72%;
    left: 5%;
    top: 30%;
    height: 60vh;
  }
`;

export const FormWindowPassword = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleNewFormPassword = styled.div`
  margin-bottom: 2%;
  background-color: #114bd1;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  letter-spacing: 2px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const ContainerTreeButtons = styled.div`
  margin: 0 auto;
  text-align: right;
  width: 95%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    width: 35%;
    margin-top: -15%;
    height: 45vh;
    margin-left: -15%;
  }
`;

export const DeleteButton = styled.button`
  width: 3.8em;
  height: 3.8em;
  border-radius: 50px;
  font-size: 20px;
  color: white;
  background-color: #114bd1;
  transition: font-size 0.5s;
  border: 0ch;
  cursor: pointer;
  box-shadow: 1px 2px 3px gray;
  @media screen and (max-width: 600px) {
    width: 3em;
    height: 3em;
  }
  &:hover {
    font-size: 25px;
    color: #282c34;
    background-color: rgba(0, 128, 255, 0.5);
    transition: font-size 0.5s, border 0.5s, color 0.5s, background-color 0.5s;
  }
`;
export const MessageFullBin = styled.div`
  position: fixed;
  left: 40%;
  top: 35%;
  width: 20%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5em;
  border-radius: 6px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: ${(props) => (props.demo ? "1px 2px 3px gray" : "none")};
  background-color: ${(props) => (props.demo ? "#114bd1" : "white")};
  height: ${(props) => (props.demo ? "18vh" : "0vh")};
  transition: background-color 1s, height 1s;
  @media screen and (max-width: 600px) {
    width: 50%;
    height: ${(props) => (props.demo ? "15vh" : "0vh")};
    top: 15%;
    left: 20%;
    font-size: 1em;
  }
`;

export const ButtonEmptyBin = styled.button`
  padding: 4px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: 0ch;
  background-color: #54c3f3;
  height: ${(props) => (props.demo ? "5vh" : "0vh")};
  transition: height 1s;
  &:hover {
    color: white;
  }
`;

export const MessageEmptyBin = styled.div`
  position: fixed;
  left: 40%;
  top: 40%;
  width: 20%;
  height: ${(props) => (props.nextDemo ? "10vh" : "0vh")};
  user-select: none;
  background-color: ${(props) =>
    props.emptyBin ? "white" : "rgb(255, 50, 50)"};
  box-shadow: ${(props) => (props.nextDemo ? "1px 2px 3px gray" : "none")};
  color: white;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: space-around;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  transition: background-color 1s, height 1s;
  @media screen and (max-width: 600px) {
    width: 60%;
    left: 22%;
    top: 20%;
  }
`;
