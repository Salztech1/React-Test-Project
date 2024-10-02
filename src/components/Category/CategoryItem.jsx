import React from 'react';

const CategoryItem = ({ categoryA }) => {
    const { image, title } = categoryA;

    return (
        <div
            className="relative w-full h-56 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm">Shop Now</p>
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
