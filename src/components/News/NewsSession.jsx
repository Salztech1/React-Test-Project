import React from 'react';
import NewsItem from './NewsItem';
import { newsData } from '../Data/Data';




const NewsSection = () => {
  return (
    <div className=" bg-social-bg-200 mr-4 rounded-md">
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
