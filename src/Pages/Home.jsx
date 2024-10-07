import React from "react";
import Profile from "../components/Profile/Profile";
import HikeCart from "../components/Card/HikeCard";
import Sort from "../components/Sort/Sort";
import FollowSuggestion from "../components/Follow/FollowSuggestion";
import NewsSection from "../components/News/NewsSession";
import Navbar from "../components/Navigation/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Profile
            name="Njinda Salome"
            username="@Salome04"
            followers="4.6k"
            following="4.6k"
            events="4.6k"
          />
        </div>

        <div className="col-span-6">
          <div className="flex mt-6">
            <h2 className="text-lg font-semibold font-sans">Upcoming Hikes</h2>
            <Sort className="ml-auto" />
          </div>

          <HikeCart />
        </div>

        <div className="col-span-3">
          <FollowSuggestion />
          <NewsSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
