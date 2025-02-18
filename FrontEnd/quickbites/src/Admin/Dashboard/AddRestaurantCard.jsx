import React from "react";
import { useNavigate } from "react-router-dom";

const AddRestaurantCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/admin/add-restaurant")}
      className="flex items-center justify-center px-5 min-h-[30rem] w-80 m-4 bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center">
        <span className="text-7xl text-gray-500">+</span>
        <h1 className="font-semibold text-gray-700 text-center mt-2">
          Add New Restaurant
        </h1>
      </div>
    </div>
  );
};

export default AddRestaurantCard;