import { useState } from "react";

const List = () => {
  const [nameList, setNameList] = useState([]);
  const [name, setName] = useState("");

  const handleClick = () => {
    setNameList([...nameList, name]);
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button disabled={!name} onClick={handleClick}>
        Add
      </button>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
