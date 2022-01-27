import React, { useEffect } from 'react';
import Header from '../components/Header';
import WebBody from '../components/WebBody';
import Button_Login from '../assets/images/btn-login.png'
import Home_Splash from '../assets/images/home-splash.png'
import HomeStaticCard from '../components/HomeStaticCard';
import Companies from '../components/Compnies'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../store/auth/actions';

function Home(props) {

  const staticCardData = [
    {
      title: "Get More Visibility",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      title: "Organize Your Candidates",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Verify Their Abilities",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
  ]

  useEffect(() => {
    props.storeInit();
  }, []);

  return (
    <WebBody>
      <Header>
        <Link to="/login">
          <img className='login-cta' src={Button_Login} alt="Login" />
        </Link>
      </Header>
      <div className='home-body'>
        <div className='home-head'>
          <div>
            <h1>
              Welcome to <span>My<span className='txt-b'>Jobs</span></span>
            </h1>
            <button className='home-cta'>Get Started</button>
          </div>
          <img className='splash-img' src={Home_Splash} alt="Home Splash Image" />
        </div>

        <div className='home-static'>
          <h2>Why Us</h2>
          <div className='static-card-container'>
            {
              staticCardData.map((val,index)=>(
                <HomeStaticCard heading={val.title} byline={val.data} key={index} />
              ))
            }
          </div>
        </div>

        <div className='home-static'>
          <h2>Companies Who Trust Us</h2>
          <div className='company-container'>
            {
              Companies.map((val,index)=>(
                <img src={val} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </WebBody>
  );
}

const mapStateToProps = state => ({
  auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({
  storeInit: () => dispatch(AuthActions.storeInit()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
