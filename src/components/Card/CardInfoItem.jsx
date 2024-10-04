import React from "react";
import Button from "../Button/Button";
import person from "/images/Salome.png";
import person1 from "/images/Boris.jpeg";
import person2 from "/images/Fabiola.png";


const CardInfoItem = ({ cardData }) => {
  const { time, name, location } = cardData; // Destructure from cardData

  return (
    <div NameName="">
      <div className=" p-4 text-white">
        <div className="  p-4 rounded-md">
          <p className="text-xs text-green-bg-300">{time}</p>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xs text-zinc-400 ">{location}</p>
          <hr className="my-2  border-gray-500" />

          <div class="flex -space-x-1 overflow-hidden mt-4">
            <img
              class="inline-block h-6 w-6 rounded-full ring-2 "
              src={person}
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 "
              src={person1}
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 "
              src={person2}
              alt=""
            />
            
            <div>
              <Button buttonType="join">Join</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoItem;
