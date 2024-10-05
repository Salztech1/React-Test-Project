import React, { useState } from 'react';
import Button from "../Button/Button";
import { initialFollowSuggestions, moreFollowSuggestions } from '../Data/Data';




const FollowSuggestion = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleView = () => {
    setShowMore(!showMore); // Toggles between showing more and less
  };

  return (
    <div className="bg-social-bg-200 p-4 mt-5 mr-5 rounded-md text-sm">
      <h2 className="text-lg font-semibold mb-4">Who to follow</h2>
      <ul>
        {initialFollowSuggestions.map((suggestion) => (
          <li key={suggestion.id} className="flex items-center mb-4">
            <img
              src={suggestion.person}
              alt={suggestion.name}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div className="flex-grow">
              <p className="text-md">{suggestion.name}</p>
              <p className="text-xs">{suggestion.username}</p>
            </div>
            <Button type="button" buttonType="follow">
              Follow
            </Button>
          </li>
        ))}

        {/* Show more people if "View More" is clicked */}
        {showMore &&
          moreFollowSuggestions.map((suggestion) => (
            <li key={suggestion.id} className="flex items-center mb-4">
              <img
                src={suggestion.person}
                alt={suggestion.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-grow">
                <p className="text-md">{suggestion.name}</p>
                <p className="text-xs">{suggestion.username}</p>
              </div>
              <Button type="button" buttonType="follow">
                Follow
              </Button>
            </li>
          ))}
      </ul>

      {/* View More / View Less text */}
      <p
        className="mt-4 text-secondary-bg-200 cursor-pointer text-center"
        onClick={toggleView}
      >
        {showMore ? "View Less" : "View More"}
      </p>
    </div>
  );
};

export default FollowSuggestion;
