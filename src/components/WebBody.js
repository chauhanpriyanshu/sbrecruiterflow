import React from 'react';

function WebBody({ children, classes }) {
    return (
        <>
            <div className={`mj-back-splash ${(classes!=undefined)?classes:""}`}></div>
            <div className='mj-body'>
                {children}
            </div>
        </>
    );
}

export default WebBody;
