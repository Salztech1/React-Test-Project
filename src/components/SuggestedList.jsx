import React from 'react';
import suggestedImage from '../assets/The-Tetons.jpg'
import suggestedImage1 from '../assets/Mountain-5.jpg'


const SuggestedList = () => {
  const suggestedPages = [
    {
      id: 1,
      name: 'World of Mountains',
      image: suggestedImage,
    },
    {
      id: 2,
      name: 'Mountain of Life',
      image: suggestedImage1,
    },
    {
      id: 3,
      name: 'Mountain of the Earch',
      image: suggestedImage,
    },
    {
        id: 4,
        name: 'Mountain of Fire',
        image: suggestedImage1,
      },
  ];

  return (
    <div className="mt-3">
      <h6 className='ml-5 text-gray-400 text-sm'> PAGES YOU LIKE</h6>
      <ul className='mt-2 p-5 text-xs'>
        {suggestedPages.map((page) => (
          <li key={page.id} className=" flex items-center mb-4">
            <img
              src={page.image}
              alt={page.name}
              className="w-12 h-12 rounded-full  mr-4 "
            />
            <span>{page.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedList;
