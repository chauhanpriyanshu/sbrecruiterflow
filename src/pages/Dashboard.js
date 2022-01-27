import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import WebBody from './../components/WebBody';
import Icon_Cart_Down from '../assets/images/ic-caret-down.svg'
import Icon_Home from '../assets/images/ic-md-home.svg'
import Icon_Writing from '../assets/images/writing.svg'
import * as AuthActions from '../store/auth/actions';
import * as RecruiterActions from '../store/recruiter/actions';
import { connect } from 'react-redux';
import { checkIfNull } from '../utils/DataCheck';
import { createImageFromInitials } from '../utils/ProfilePicGenerator';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';


function Dashboard(props) {
  const [profilePic, setprofilePic] = useState("");

  const [jobsList, setjobsList] = useState([1]);


  useEffect(() => {
    if(checkIfNull(props.auth.userDetails)===false){
      setprofilePic(createImageFromInitials(400,props.auth.userDetails.name))
    }
  }, []);

  useEffect(() => {
    props.getJobs({
      "page": 1
    });
  }, []);

  useEffect(() => {
    if(props.recruiter.getJobsSuccess===true){
      setjobsList(props.recruiter.jobs.data.data)
      props.getJobsInit();
    }
    if(props.recruiter.getJobsFailure===true){
      props.getJobsInit();
    }
    
  }, [props.recruiter]);
  
  
  

  return (
    <WebBody classes="mini-splash">
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
      <div className='dashboard-container'>
        <button className='breadcrumb-cta'><img src={Icon_Home} alt="home icon" />Home</button>
        <h2>Jobs posted by you</h2>
        <div className='job-container'>
          {
            (jobsList!=null)?
            <div className='job-card-block'>
              {
                (jobsList.map((value,index)=>(
                  <JobCard key={index} data={value} />
                )))
              }
            </div>
            :
            <div className='empty-state'>
              <img src={Icon_Writing} alt="Icon Writing" />
              Your posted jobs will show here!
            </div>
          }
        </div>
      </div> 
    </WebBody>
  );
}

const mapStateToProps = state => ({
  auth: state.Auth,
  recruiter: state.Recruiter
})

const mapDispatchToProps = dispatch => ({
  storeInit: () => dispatch(AuthActions.storeInit()),
  getJobs: (data) => dispatch(RecruiterActions.getJobs(data)),
  getJobsInit: () => dispatch(RecruiterActions.getJobsInit()),
  getCandidates: (data) => dispatch(RecruiterActions.getCandidates(data)),
  getCandidatesInit: () => dispatch(RecruiterActions.getCandidatesInit()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
