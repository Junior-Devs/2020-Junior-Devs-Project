import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

const App = () => {
  const [data, setData] = useState({ list: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/getSomething");
      setData({ list: result.data || [] });
    }
    fetchData();
  }, []);

  const { list } = data;

  return (
    <div>
      <HelloWorld text="Welcome to Junior Devs" />

      {list.length ? (
        <div>
          {list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items found</h2>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
