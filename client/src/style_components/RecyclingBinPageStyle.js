import styled from "styled-components";

export const ContainerRecycling = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: white;
  margin: 0 auto;
`;

export const TitleRecycling = styled.div`
  background-color: #114bd1;
  font-size: 1.5em;
  text-align: center;
  width: 40%;
  height: 10vh;
  letter-spacing: 2px;
  margin: 0 auto;
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

export const CounterRecycling = styled.div`
  position: absolute;
  width: 5%;
  height: 8vh;
  left: 0%;
  top: 5%;
  color: white;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 50, 50);
  border-radius: 0px 6px 6px 0px;
  @media screen and (max-width: 600px) {
    width: 15%;
    top: 0%;
    left: 80%;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const NumberOfDelete = styled.p`
  margin-top: 50%;
  font-size: 20px;
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
    top: 16%;
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
    top: 11%;
    width: 3em;
    height: 3em;
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

export const InputSearch = styled.input`
  margin: 0 auto;
  margin-top: 1%;
  height: 8vh;
  width: ${(props) => (props.openInputSearchStyle ? "50%" : "0%")};
  background-color: ${(props) =>
    props.openInputSearchStyle ? "white" : "white"};
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
    width: ${(props) => (props.openInputSearchStyle ? "70%" : "0%")};
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

export const ButtonForm = styled.button`
  background-color: #114bd1;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  border: 0ch;
  font-size: 19px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 3px gray;
  }
`;
export const MessageDescription = styled.div`
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
    width: 70%;
    top: 22%;
    left: 1%;
  }
`;

export const TitleDescription = styled.div`
  width: 100%;
  letter-spacing: 3px;
  background-color: rgb(0, 188, 13, 0.5);
  height: 5vh;
  font-size: 20px;
  text-align: center;
`;

export const BodyDescription = styled.div`
  font-size: 18px;
  background-color: rgb(237, 237, 237);
  @media screen and (max-width: 600px) {
    font-size: 14px;
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
    left: 20%;
  }
`;

export const MessageFullBin = styled.div`
  position: fixed;
  left: 40%;
  top: 35%;
  width: 20%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  border-radius: 6px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: ${(props) => (props.demo ? "1px 2px 3px gray" : "none")};
  background-color: ${(props) => (props.demo ? "#114bd1" : "white")};
  height: ${(props) => (props.demo ? "15vh" : "0vh")};
  transition: background-color 1s, height 1s;
  @media screen and (max-width: 600px) {
    width: 40%;
    top: 20%;
    left: 4%;
  }
`;

export const ButtonEmptyBin = styled.button`
  padding: 4px 28px;
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

export const ContainerTreeButtons = styled.div`
  text-align: right;
  width: 95%;
  margin: 0 auto;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    width: 30%;
    height: 30vh;
    margin-left: -10%;
    margin-top: -18%;
  }
`;
