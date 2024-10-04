import React from 'react';
import CardInfoItem from './CardInfoItem';



const CardInfo = ({ cardData }) => {
    return (
        <div className="">
            {cardData.map((cardDataItem) => (
                <CardInfoItem key={cardDataItem.id} cardData={cardDataItem} />
            ))}
        </div>
    );
};
export default CardInfo;
