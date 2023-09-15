import React, { useEffect, useState } from "react";
import "./App.css";
import Student from "./Componets/Student";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import AddStudents from "./Componets/AddStudents";

function App() {
  let initList;
  let data = JSON.parse(localStorage.getItem("list"));
  if (data === null) {
    initList = [""];
  } else {
    initList = data;
  }
  const [list, setList] = useState(initList);

  const onDelete = (value) => {
    setList(list.filter((item) => item !== value));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItems = (name, email, contact, bDate) => {
    const newStu = {
      name: name,
      email: email,
      phoneNo: contact,
      birth: bDate,
    };
    setList([...list, newStu]);
  };

  const onAllSave = (name, email, phoneNo, birth, item) => {
    setList(
      list.map((unit) => {
        if (unit === item) {
          return {
            ...item,
            name: name,
            email: email,
            phoneNo: phoneNo,
            birth: birth,
          };
        } else {
          return unit;
        }
      })
    );
  };

  return (
    <>
      <Navbar title="Prince" searchBar={true} />
      <Student items={list} onDelete={onDelete} onAllSave={onAllSave}/>
      <AddStudents addItems={addItems}  />
      <Footer />
    </>
  );
}

export default App;
