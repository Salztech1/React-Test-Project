import React from 'react';
import Profile from '../components/Profile/Profile';

function Home() {
    return (
        <div className='flex columns-12'>
            <div >
                <Profile
                className='columns-2'
                    name={'Njinda Salome'}
                    username={'@Salome04'}
                    followers={'4.6k'}
                    following={'4.6k'}
                    events={'4.6k'} />
            </div>
            <div className='columns-6'>
                Hello World
            </div>
            <div className='columns-2'>
                Hello World
            </div>

        </div>
    );
}

export default Home;
