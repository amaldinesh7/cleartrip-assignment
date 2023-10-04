import React, { useState } from "react";
import HotelCard from "./HotelCard";
import classNames from "classnames";

const HotelList = ({ hotelList, favoriteHotels, setSelectedHotel }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isFavoritesEnabled, setIsFavoritesEnabled] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleFavorites = () => {
    setIsFavoritesEnabled((v) => !v);
  };

  let filteredHotels = hotelList.sort((a, b) => a.price - b.price);
  if (searchInput) {
    filteredHotels = hotelList.filter((hotel) => {
      const trimmedInput = searchInput.toLowerCase().trim();
      return (
        hotel.name.toLowerCase().includes(trimmedInput) ||
        String(hotel.id).includes(trimmedInput)
      );
    });
  }

  if (isFavoritesEnabled) {
    filteredHotels = filteredHotels.filter((hotel) =>
      favoriteHotels.includes(hotel.id)
    );
  }

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div className="w-full space-y-2">
      <input
        placeholder="Search hotels"
        className="search-input"
        onChange={handleSearchInputChange}
      />
      <div>
        <button
          className={classNames("chip", {
            "bg-red-500": isFavoritesEnabled,
          })}
          onClick={toggleFavorites}
        >
          Favorites
        </button>
      </div>

      {filteredHotels.length ? (
        <div className="flex flex-col space-y-4">
          {filteredHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              handleHotelSelect={handleHotelSelect}
            />
          ))}
        </div>
      ) : (
        <p>No Hotel Found</p>
      )}
    </div>
  );
};

export default HotelList;
