import React from 'react';
import person from '../../assets/Salome.png';
import person1 from '../../assets/Boris.jpeg';
import person2 from '../../assets/Fabiola.png';
import person3 from '../../assets/Cyril.jpeg';
import person4 from '../../assets/Suzzy.jpeg';
import person5 from '../../assets/Petite-Jesus.jpeg';
import Button from '../Button/Button';

const followSuggestions = [
  {
    id: 1,
    name: 'Salome Njinda',
    person: person,
  },
  {
    id: 2,
    name: ' Ashu Boris',
    person: person1,
  },
  {
    id: 3,
    name: 'Foletia Fabiola',
    person: person2,
  },
  {
    id: 4,
    name: 'Nkwi Cyril',
    person: person3,
  },
  {
    id: 5,
    name: 'Kenne Suzy',
    person: person4,
  },
  {
    id: 6,
    name: 'Petite Jesus',
    person: person5,
  },
];

const FollowSuggestion = () => {
  const handleViewMore = () => {
    // Handle view more action here (e.g., fetching more suggestions)
    console.log('Load more suggestions');
  };

  return (
    <div className=" p-4">
      <h2 className="text-lg font-semibold mb-4">Who to follow</h2>
      <ul>
        {followSuggestions.map((suggestion) => (
          <li key={suggestion.id} className="flex items-center mb-4">
            <img
              src={suggestion.person}
              alt={suggestion.name}
              className="w-12 h-12 rounded-full mr-3" // Adjust size and styling as needed
            />
            <div className="flex-grow">
              <p className="text-md ">{suggestion.name}</p>
            </div>
            <Button type='button' buttonType='follow' >Follow</Button>
            {/* <button className=" px-4 py-1 rounded " >
              Follow
            </button> */}
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-orange-300 text-white px-4 py-2 roundedw-full"
        onClick={handleViewMore}
      >
        View More
      </button>
    </div>
  );
};

export default FollowSuggestion;