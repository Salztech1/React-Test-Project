import React  from 'react';
import Directory from '../Directory/Directory';
import Image from '../../assets/Mountain-4.jpg'
import Image1 from '../../assets/Mountain-5.jpg'
import Image2 from '../../assets/Mountain.jpg';
import Image3 from '../../assets/Mountain-2.jpg';
import Image4 from '../../assets/Mountain-3.jpg';
import Image5 from '../../assets/The-Tetons.jpg';

const categories = [
    {
        id: 1,
        title: "hats",
        image: Image
    },
    {
        id: 2,
        title: "jackets",
        image: Image1
    },
    {
        id: 3,
        title: "sneakers",
        image: Image2
    },
    {
        id: 4,
        title: "womens",
        image: Image3
    },
    {
        id: 5,
        title: "mens",
        image: Image4
    },
    {
        id: 5,
        title: "mens",
        image: Image5
    }
];

function HikeCart() {
    return (
        <div  className='mt-5' >
            
            <Directory categoriesA={categories} />
        </div>
    );
}

export default HikeCart;


