import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import WebBody from './../components/WebBody';
import Icon_Cart_Down from '../assets/images/ic-caret-down.svg'
import * as AuthActions from '../store/auth/actions';
import { connect } from 'react-redux';
import { checkIfNull } from '../utils/DataCheck';
import { createImageFromInitials } from '../utils/ProfilePicGenerator';
import { Link } from 'react-router-dom';


function Dashboard(props) {
  const [user, setuser] = useState("");
  const [profilePic, setprofilePic] = useState("");


  useEffect(() => {
    if(checkIfNull(props.auth.userDetails)===false){
      setuser(props.auth.userDetails.name)
      setprofilePic(createImageFromInitials(400,props.auth.userDetails.name))
    }
  }, []);
  

  return (
    <WebBody>
      <Header>
        <div className='profile'>
          <div className='profile-thumb'>
            <img className='profile-pic' src={profilePic} height={46} width={46} />
            <img src={Icon_Cart_Down} height={13} width={8} />
          </div>
          <div className='extra-option'>
            <Link to="/"><button>Logout</button></Link>
          </div>
        </div>
      </Header>
      Testing Dashboard  
    </WebBody>
  );
}

const mapStateToProps = state => ({
  auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({
  storeInit: () => dispatch(AuthActions.storeInit()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
