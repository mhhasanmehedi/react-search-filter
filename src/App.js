import { useState } from "react";
import "./App.css";
import Table from "./Components/Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">

      <div className="input-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
