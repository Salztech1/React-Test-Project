import React from "react";
import CategoryItem from "../Category/CategoryItem";
import { hikeData } from "../Data/Data";

function HikeCart() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 ">

      {hikeData.map((hikes) => {
        return <CategoryItem key={hikes.id} hike={hikes} />;
      })}

    </div>
  );
}

export default HikeCart;

