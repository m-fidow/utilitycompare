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
        // console.log(response.data.deals);
        // setItems(response.data.deals);
        const { deals } = response.data;
        console.log(deals);
        const newItems = deals.map((item) => {
          const {
            deal_id,
            deal_name,
            provider_name,
            provider_logo_image_url,
            monthly_price,
            internet_speed,
            contract_info,
            broadband_type,
            set_up_cost,
            provider_rating,
            data_limits,
          } = item;
          console.log(item);
          return {
            id: deal_id,
            dealName: deal_name,
            name: provider_name,
            logo: provider_logo_image_url,
            speed: internet_speed,
            cost: monthly_price,
            contract: contract_info,
            broadBandType: broadband_type,
            setUpCost: set_up_cost,
            rating: provider_rating,
            dataLimit: data_limits,
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
