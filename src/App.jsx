import React, { useEffect, useState } from "react";
import HotelList from "./components/HotelList";
import axios from "axios";
import HotelDetails from "./components/HotelDetails";
import classNames from "classnames";

const App = () => {
  const [hotelList, setHotelList] = useState([]);
  const [favoriteHotels, setFavoriteHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(hotelList[0]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c"
      );
      console.log(response);
      setHotelList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className={classNames({ "m-6": !selectedHotel })}>
      {selectedHotel ? (
        <HotelDetails
          hotel={selectedHotel}
          setSelectedHotel={setSelectedHotel}
          favoriteHotels={favoriteHotels}
          setFavoriteHotels={setFavoriteHotels}
        />
      ) : (
        <HotelList
          hotelList={hotelList}
          favoriteHotels={favoriteHotels}
          setSelectedHotel={setSelectedHotel}
        />
      )}
    </div>
  );
};

export default App;
