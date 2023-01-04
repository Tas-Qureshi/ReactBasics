import { useState, useEffect } from "react";
import "../StyleSheets/FetchingDataStyleSheet.css";

function FetchingData() {
  const [inputData, setInputData] = useState("");
  // const [users , setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?gender=female&results=30")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results.length);
        setInputData(
          data.results.map((user) => {
            return (
              <div className="dataContainer">
                <h2>{user.name.title}</h2>
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
              </div>
            );
          })
        );
      });
  }, []);

    return (
      <>
            <h1>Home Page</h1>
            <h2>Fetching Data Using Fetch API</h2>
        <div className="main">{inputData}</div>
      </>
    ); 
}

export default FetchingData;
