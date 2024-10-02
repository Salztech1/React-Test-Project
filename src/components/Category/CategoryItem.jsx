import React from 'react';

const CategoryItem = ({ categoryA }) => {
    const { image, title } = categoryA;

    // Split the title into two parts (e.g., "JAN" and "02")
    const [month, day] = title.split(' ');

    return (
        <div
            className="relative w-full h-44 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-opacity-50 flex flex-col text-right text-white">
                <div className='bg-gray-950  w-12  rounded-md inline-block mt-3 mr-3 text-center ml-48'>
                    <h2 className="text-xl font-bold">{month}</h2>
                    <p className="text-lg font-normal">{day}</p>
                </div>
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
