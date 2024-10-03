import React from 'react';
import BlurredText from '../Follow/BlurredText';

const CategoryItem = ({ categoryA }) => {
    const { image, title, distance, elevation, difficulty } = categoryA;

    // Split the title into two parts (e.g., "JAN" and "02")
    const [month, day] = title.split(' ');

    return (
        <div
            className="relative w-full h-44 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Top right text */}
            <div className="absolute inset-0 bg-opacity-50 flex flex-col text-right text-white">
                <div className='bg-gray-950  w-12 rounded-md inline-block mt-3 mr-3 text-center ml-48'>
                    <h2 className="text-xs text-zinc-400 font-bold">{month}</h2>
                    <p className=" font-normal">{day}</p>
                </div>
            </div>

            {/* Blurred bottom section */}
            <div className="absolute bottom-0 w-full h-14 bg-black bg-opacity-40 backdrop-blur-md flex text-sm text-white">
                <BlurredText distance={distance} elevation={elevation} difficulty={difficulty} />
            </div>

        </div>
    );
};

export default CategoryItem;






// import React from 'react';

// const CategoryItem = ({ categoryA }) => {
//   return (
//     <div className="category-item">
//       <img
//         src={categoryA.imageUrl}
//         alt={categoryA.title}
//         style={{ width: '100px', height: 'auto' }}      />
//       <h2>{categoryA.title}</h2>
//     </div>
//   );
// };

// export default CategoryItem;
