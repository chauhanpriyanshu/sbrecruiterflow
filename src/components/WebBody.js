import React from 'react';

function WebBody({ children }) {
    return (
        <>
            <div className='mj-back-splash'></div>
            <div className='mj-body'>
                {children}
            </div>
        </>
    );
}

export default WebBody;
