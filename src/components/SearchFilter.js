import "./component.css";
import React, { useState } from "react";

const words = [
  "ability",
  "able",
  "about",
  "above",
  "accept",
  "according",
  "challenge",
  "chance",
  "change",
  "face",
  "fact"
];

export default function SearchFilter() {
  const [wordList, setWordList] = useState(words);

  const getList = () => {
    return wordList.map((el, i) => <li key={i}>{el}</li>);
  };
  const onSearch = (e) => {
    console.log(e.target.value);
    // if (e.target.value === "") {
    //   setWordList(words);
    // }
    const filteredValues = wordList.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setWordList(filteredValues);
    //console.log(filteredValues);
  };
  return (
    <div className="SearchFilter">
      Search
      <input onChange={onSearch} />
      <ul>{getList()}</ul>
    </div>
  );
}
