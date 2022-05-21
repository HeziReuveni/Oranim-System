import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Axios from "axios";

const TodoTable = () => {
  const PATH = "http://localhost:5000/";
  const [listTrainees, setListTrainees] = useState([{}]);
  const [currentPassword, setCurrentPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    Axios.get(`${PATH}read`).then((result) => {
      setListTrainees(result.data.reverse());
    });
    Axios.get(`${PATH}read-password`).then((result) => {
      const len = result.data.length - 1;
      setCurrentPassword(result.data[len].currentPassword);
    });
    Axios.get(`${PATH}read-code`).then((result) => {
      setVerificationCode(result.data[0].VerificationCode);
    });
  }, []);

  return (
    <>
      <HomePage
        listTrainees={listTrainees}
        setListTrainees={setListTrainees}
        currentPassword={currentPassword}
        verificationCode={verificationCode}
        PATH={PATH}
      />
    </>
  );
};

export default TodoTable;
