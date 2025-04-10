import { useState, useEffect } from "react";
import Header from "./components/Header";
import InputField from "./components/Inputfield";
import TaskifyHome from "./components/Taskifyhome";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem("taskList");
    return storedData ? JSON.parse(storedData) : [];
  });
  //Delete Button functionality

  const deleteHandler = (indexToDelete) => {
    const updateList = value.filter((item, index) => index !== indexToDelete);
    setValue(updateList);
  };

  return (
    <>
      <Header></Header>
      <h1>Taskify-Your Smart Task Tracker:</h1>
      <InputField value={value} setValue={setValue}></InputField>
      <TaskifyHome value={value} deleteHandler={deleteHandler}></TaskifyHome>
    </>
  );
}

export default App;
