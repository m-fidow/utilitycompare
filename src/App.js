import React, { useState, useEffect } from "react";
import DataTable from "./components/Table";
// import React, {useS} from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals")
      .then((response) => {
        // Code for handling the response
        // console.log(response.data.deals);
        setItems(response.data.deals);
      })
      .catch((error) => {
        // Code for handling the error
        console.log(error);
      });
  }, []);
  return <DataTable items={items} />;
}

export default App;
