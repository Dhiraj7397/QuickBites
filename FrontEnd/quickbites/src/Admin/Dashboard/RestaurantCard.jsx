import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRestaurant, updateRestaurantStatus } from "../../State/Customers/Restaurant/restaurant.action";

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteRestaurant = () => {
    dispatch(deleteRestaurant(item.id));
  };

  const handleUpdateRestaurantStatus = () => {
    dispatch(updateRestaurantStatus(item.id));
  };

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="flex items-center p-4 border-b">
        <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full font-bold">
          {item.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="ml-3 text-lg font-semibold">{item.name}</h2>
      </div>
      <img className="h-64 w-full object-cover" src={item.imageUrl} alt={item.name} />
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
        </p>
        <div className="flex justify-between items-center">
          <button onClick={handleDeleteRestaurant} className="text-red-500 hover:text-red-700">
            Delete
          </button>
          <button 
            onClick={handleUpdateRestaurantStatus} 
            className={`px-4 py-1 rounded text-white ${item.open ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
          >
            {item.open ? "Close" : "Open"}
          </button>
          <button onClick={() => navigate(`/admin/restaurants/${item.id}`)} className="text-blue-500 hover:text-blue-700">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
