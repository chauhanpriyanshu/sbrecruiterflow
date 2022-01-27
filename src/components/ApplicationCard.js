import React from 'react';
import { createImageFromInitials } from '../utils/ProfilePicGenerator';

function ApplicationCard(props) {
  return (
        <div className='app-card'>
            {console.log(props.data)}
            <div className='app-data'>
                <img src={createImageFromInitials(100,props.data.name)} />
                <span>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.email}</p>
                </span>
            </div>
            <h4>Skills</h4>
            <p className='app-skills'>{props.data.skills}</p>
        </div>
    );
}

export default ApplicationCard;
