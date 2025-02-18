import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenuItemsByRestaurantId } from "../../State/Customers/Menu/menu.action";
import OrdersTable from "../Orders/OrderTable";
import MenuItemTable from "../Food/MenuItemTable";
import AdminSidebar from "../AdminSidebar";

const RestaurantDashboard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const restaurant = useSelector((store) => store.restaurant);

  useEffect(() => {
    if (id) {
      dispatch(
        getMenuItemsByRestaurantId({
          restaurantId: id,
          jwt: localStorage.getItem("jwt"),
        })
      );
    }
  }, [dispatch, id]);

  return (
  <div>

    {/* <AdminSidebar/> */}
    
    <div className="p-4 lg:px-10 flex flex-col items-center space-y-6">
  <div className="w-full lg:w-3/4 ">
    <OrdersTable name="Recent Orders" isDashboard />
  </div>
  <div className="w-full lg:w-3/4">
    <MenuItemTable name="Recently Added Menu" isDashboard />
  </div>
</div>

  </div>
  );
};

export default RestaurantDashboard;
