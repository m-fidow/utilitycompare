import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals";
const AppContext = React.createContext();
function AppProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Code for handling the response
        console.log(response.data.deals);
        setItems(response.data.deals);
        const { items } = response.data.deals;

        const newItems = items.map((item) => {
          const { provider_id, provider_name, monthly_price } = item;
          console.log(item);
          return {
            id: provider_id,
            name: provider_name,
            cost: monthly_price,
          };
        });
        setItems(newItems);
      })
      .catch((error) => {
        // Code for handling the error
        console.log(error);
      });
  }, []);
  return (
    <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
