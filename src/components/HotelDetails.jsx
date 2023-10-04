import React from "react";
import BackIcon from "./BackIcon";
import FavoriteIcon from "./FavoriteIcon";
import classNames from "classnames";

const HotelDetails = ({
  hotel = {},
  setSelectedHotel,
  favoriteHotels,
  setFavoriteHotels,
}) => {
  const { image, name, price, description, location } = hotel;

  const handleFavoriteHotel = () => {
    setFavoriteHotels((favs) => {
      if (favs.includes(hotel.id)) {
        return favs.filter((id) => id !== hotel.id);
      } else {
        return [...favs, hotel.id];
      }
    });
  };

  const isFavorite = favoriteHotels.includes(hotel.id);

  return (
    <div className="relative">
      <div className="absolute top-0 flex items-start justify-between w-full p-4">
        <button
          onClick={() => setSelectedHotel(null)}
          className="flex items-center justify-center w-6 h-6 bg-white rounded-full "
        >
          <BackIcon />
        </button>
        <button
          onClick={handleFavoriteHotel}
          className={classNames(
            "flex items-center justify-center w-6 h-6 bg-white rounded-full ",
            {
              "bg-green-300": isFavorite,
            }
          )}
        >
          <FavoriteIcon />
        </button>
      </div>
      <div>
        <img src={image} className="object-cover w-full" />
      </div>
      <div className="m-4">
        <p className="my-4 text-sm font-semibold">₹{price}</p>
        <div className="p-2 space-y-2 border-t-2 border-gray-300">
          <p className="text-sm text-gray-400">hotel in {location}</p>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-xs">{description}</p>
        </div>
        <div className="sticky bottom-0 flex items-center justify-start h-10 text-sm bg-white">
          ₹{price}
          <span className="text-xs text-gray-200 text-gray-300">
            /night (all incl.)
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
