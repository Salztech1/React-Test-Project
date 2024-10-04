import React from 'react';
import Directory from '../Directory/Directory';
import Image from '/images/Mountain-4.jpg';
import Image1 from '/images/Mountain-5.jpg';
import Image2 from '/images/Mountain.jpg';
import Image3 from '/images/Mountain-2.jpg';


const categories = [
    {
        id: 1,
        title: "DEC 24",
        image: Image,
        distance: '106 ml',
        elevation: '4.884 m',
        difficulty: 'Hard',
        cardData: [
            {
                id: 1,
                time: 'THU 07:30 AM',
                name: 'Mount Semeru',
                location: 'Location . Lumajang, East Java'
            },
        ],
    },
    {
        id: 2,
        title: "DEC 28",
        image: Image1,
        distance: '62 ml',
        elevation: '2.228 m',
        difficulty: 'Medium',
        cardData: [
            {
                id: 2,
                time: 'WED 10:00 AM',
                name: 'Mount Kosciuszko',
                location: 'Location. Australia'
            },
        ],
    },
    {
        id: 3,
        title: "JAN 02",
        image: Image2,
        distance: '138 ml',
        elevation: '5.895 m',
        difficulty: 'Hard',
        cardData: [
            {
                id: 3,
                time: 'FRI 6:30 AM',
                name: 'Mount Kilimanjaro',
                location: 'Location . Tanzania'
            },
        ],
    },
    {
        id: 4,
        title: "JAN 14",
        image: Image3,
        distance: '26 ml',
        elevation: '2.063 m',
        difficulty: 'Easy',
        cardData: [
            {
                id: 4,
                time: 'MON 11:20 AM',
                name: 'Mount Crab',
                location: 'Location . Andes, Peru'
            },
        ],
    },
    
];

function HikeCart() {
    return (
        <div className='mt-5'>
            <Directory categoriesA={categories} />            
        </div>
    );
}

export default HikeCart;
