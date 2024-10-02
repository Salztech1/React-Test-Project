import React from 'react';

const NewsItem = ({ image, title, description }) => {
  return (
    <div className="news-item p-4 rounded-lg shadow-lg  mt-5">
        <h2>Today's News</h2>
     
      <img 
        src={image} 
        alt={title} 
        className="w-full h-24 object-cover rounded-md mt-3 mb-3"
      />

      <p className="text-sm text-white">{description}</p>
    </div>
  );
};

export default NewsItem;
