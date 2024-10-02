import React from 'react';
import personImage from '../../assets/person.jpg'
//import './Profile.css'; // 
import SideNav from '../Navigation/SideNav';

const Profile = ({ name, username, followers, following, events }) => {
    return (
        <div >
            <div className="mt-10">
                <img src={personImage} alt={`${name}'s profile`} className='w-20 ml-20 rounded-full' />
            </div>
            <div className="">
                <h2 className="ml-16">{name}</h2>
                <p className='text-xs ml-20'>{username}</p> <br />
                <div className="  mt-4  bg-zinc-800 ml-3 pl-2 pr-3 rounded-md "> 
                    <button className='ml-3' ><strong>{followers}</strong> <br /> Followers</button>
                    <button className='ml-3'><strong>{following}</strong><br /> Following</button>
                    <button className='ml-3'><strong>{events}</strong> <br /> Events</button>
                </div> 
            </div>
            <SideNav/>
        </div>
    );
};

export default Profile;
