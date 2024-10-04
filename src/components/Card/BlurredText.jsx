import React from 'react';



const BlurredText = ({ distance, elevation, difficulty }) => {
    return (
        <div >

            <div>

                <div className=" flex gap-4 ml-2 ">

                    <p >
                        <span className='text-xs text-zinc-400'>Distance</span><br />
                        <strong>{distance}</strong>
                    </p>

                    <p >
                        <span className='text-xs text-zinc-400'>Elevation</span>  <br />
                        <strong>{elevation}</strong>
                    </p>

                    <p >
                        <span className='text-xs text-zinc-400'>Difficulty</span><br />
                        <strong>{difficulty}</strong>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BlurredText;
