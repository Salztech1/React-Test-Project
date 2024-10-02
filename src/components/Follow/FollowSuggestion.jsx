import React, { useState } from 'react';
import person from '../../assets/Salome.png';
import person1 from '../../assets/Boris.jpeg';
import person2 from '../../assets/Fabiola.png';
import person3 from '../../assets/Cyril.jpeg';
import person4 from '../../assets/Suzzy.jpeg';
import person5 from '../../assets/Petite-Jesus.jpeg';
import Button from '../Button/Button';

const initialFollowSuggestions = [
  {
    id: 1,
    name: 'Salome Njinda',
    person: person,
    username: '@salome04'
  },
  {
    id: 2,
    name: 'Ashu Boris',
    person: person1,
    username: '@boris34'
  },
  {
    id: 3,
    name: 'Foletia Fabiola',
    person: person2,
    username: '@fabiola09'
  },
];

const moreFollowSuggestions = [
  {
    id: 4,
    name: 'Nkwi Cyril',
    person: person3,
    username: '@cyril224'
  },
  {
    id: 5,
    name: 'Kenne Suzy',
    person: person4,
    username: '@suzy45'
  },
  {
    id: 6,
    name: 'Petite Jesus',
    person: person5,
    username: '@jesus778'
  },
];

const FollowSuggestion = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleView = () => {
    setShowMore(!showMore); // Toggles between showing more and less
  };

  return (
    <div className="bg-zinc-800 p-4 mt-5 mr-5 rounded-md text-sm">
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
              <p className='text-xs'>{suggestion.username}</p>
            </div>
            <Button type='button' buttonType='follow'>Follow</Button>
          </li>
        ))}
        
        {/* Show more people if "View More" is clicked */}
        {showMore && moreFollowSuggestions.map((suggestion) => (
          <li key={suggestion.id} className="flex items-center mb-4">
            <img
              src={suggestion.person}
              alt={suggestion.name}
              className="w-12 h-12 rounded-full mr-3" 
            />
            <div className="flex-grow">
              <p className="text-md">{suggestion.name}</p>
              <p className='text-xs'>{suggestion.username}</p>
            </div>
            <Button type='button' buttonType='follow'>Follow</Button>
          </li>
        ))}
      </ul>

      {/* View More / View Less text */}
      <p
        className="mt-4 text-orange-300 cursor-pointer text-center"
        onClick={toggleView}
      >
        {showMore ? 'View Less' : 'View More'}
      </p>
    </div>
  );
};

export default FollowSuggestion;
