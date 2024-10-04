import React from "react";
import personImage from "/images/my image.jpg";
import SideNav from "../Navigation/SideNav";

const Profile = ({ name, username, followers, following, events }) => {
  return (
    <div>
      <div className="mt-10">
        <img
          src={personImage}
          alt={`${name}'s profile`}
          className="w-20 ml-20 rounded-full border-2 border-orange-400"
        />
      </div>
      <div className="">
        <h2 className="ml-16">{name}</h2>
        <p className="text-xs ml-20">{username}</p> <br />
        <div className="  mt-4  bg-social-bg-200 ml-3 pl-2 pr-3 rounded-md ">
          <button className="ml-3 ">
            <strong>{followers}</strong>
            <br />
            <span className="text-sm">Followers</span>
          </button>

          <button className="ml-3">
            <strong>{following}</strong>
            <br />
            <span className="text-sm">Following</span>
          </button>

          <button className="ml-3">
            <strong>{events}</strong>
            <br />
            <span className="text-sm">Events</span>
          </button>
        </div>
      </div>
      <SideNav />
    </div>
  );
};

export default Profile;
