import React, { useState } from 'react';

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="ml-auto relative">
            <h2 className='text-zinc-400 text-xs font-semibold'>
                Sorted By:{" "}
                <span onClick={toggleDropdown} className="cursor-pointer">
                    Most Recent <i className="bi bi-chevron-down"></i>
                </span>
            </h2>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 border-zinc-700 rounded-lg -lg z-10">
                    <ul className="py-2 bg-zinc-700 ">
                        <li className="px-4 py-2 hover:bg-orange-300 hover:text-white cursor-pointer">
                            Most Trending
                        </li>
                        <li className="px-4 py-2 hover:bg-orange-300 hover:text-white cursor-pointer">
                            Most Popular
                        </li>
                        <li className="px-4 py-2 hover:bg-orange-300 hover:text-white cursor-pointer">
                            Highest Rated
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
