// import React from 'react';

import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-secondary text-center text-white w-full p-3'>
            <h4>Q-Zone</h4>
            <div>
                <img className='w-75' src={qzone1} alt="" />
                <img className='w-75' src={qzone2} alt="" />
                <img className='w-75' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;