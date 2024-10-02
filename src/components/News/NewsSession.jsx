import React from 'react';
import NewsItem from './NewsItem';
import newsImage1 from '../../assets/Mountain.jpg';  // Example image
import newsImage2 from '../../assets/Mountain-2.jpg';  // Example image

const newsData = [
  {
    id: 1,
    description: 'Five questions that you should answer truthfully.',
    image: newsImage1,
  },
  {
    id: 2,
    description: 'Ten unbelievable facts about mountains.',
    image: newsImage2,
  },
];

const NewsSection = () => {
  return (
    <div className=" bg-zinc-800 mr-4 rounded-md">
      {newsData.map((news) => (
        <NewsItem 
          key={news.id} 
          image={news.image}  
          description={news.description} 
        />
      ))}
    </div>
  );
};

export default NewsSection;
