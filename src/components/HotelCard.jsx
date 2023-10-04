import React from "react";

const HotelCard = ({ hotel = {}, handleHotelSelect }) => {
  const { image, name, price, freeBreakfast } = hotel;
  return (
    <div
      className="flex flex-col pb-4 space-y-1"
      onClick={() => handleHotelSelect(hotel)}
    >
      <div>
        <img
          className="object-cover w-full h-full rounded-lg"
          src={image}
          alt="hotel-image"
        />
      </div>
      <h3 className="mt-4 text-sm font-semibold">{name}</h3>
      <p className="text-base font-semibold">₹{price}</p>
      {freeBreakfast && (
        <p className="text-xs text-green-500">Free breakfast</p>
      )}
    </div>
  );
};

export default HotelCard;
