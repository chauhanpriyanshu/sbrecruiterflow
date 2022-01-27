import React, { useEffect, useState } from 'react';
import Icon_Location from '../assets/images/ic-location-on.svg'
import Icon_Close from '../assets/images/ic-metro-cross.svg'
import Icon_Curriculum from '../assets/images/curriculum.svg'
import * as AuthActions from '../store/auth/actions';
import * as RecruiterActions from '../store/recruiter/actions';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { connect } from 'react-redux';
import { checkIfExist } from '../utils/DataCheck';
import { createImageFromInitials } from '../utils/ProfilePicGenerator';
import ApplicationCard from './ApplicationCard';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

function JobCard(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [totalApplications, settotalApplications] = useState(0);
    const [applicationsData, setapplicationsData] = useState(null);

    function handleViewJobs(id){
        handleOpen();
        settotalApplications(0);
        props.getCandidates({
            "job_id": id
        })
    }

    useEffect(() => {

        if(props.recruiter.getCandidatesSuccess===true){
            if(checkIfExist("data",props.recruiter.candidates)==true){
                settotalApplications(props.recruiter.candidates.data.length)
                setapplicationsData(props.recruiter.candidates.data)
            }
        }
        if(props.recruiter.getCandidatesFailure===true){

        }
        
    }, [props.recruiter]);

  return (
    <div className='card'>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <div className='bottom-cta'>
            <span><img src={Icon_Location} alt="icon-location" />{props.data.location}</span>
            <button onClick={()=>{handleViewJobs(props.data.id)}}>View</button>
        </div>
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <div className='modal-body'>
                <h2>Applicants for this job <img onClick={()=>{handleClose()}} src={Icon_Close} alt="close" /></h2>
                <p>Total {totalApplications} applications</p>
                <div className='application-container'>
                    {
                        (totalApplications==0)?
                        <div className='no-data'><img src={Icon_Curriculum} alt="curriculum"/>No applications available!</div>
                        :    
                        applicationsData.map((value,index)=>(
                            <ApplicationCard key={index} data={value} />
                        ))
                    }
                </div>
            </div>
        </StyledModal>
    </div>
  );
}


const mapStateToProps = state => ({
    auth: state.Auth,
    recruiter: state.Recruiter
})
  
const mapDispatchToProps = dispatch => ({
    storeInit: () => dispatch(AuthActions.storeInit()),
    getCandidates: (data) => dispatch(RecruiterActions.getCandidates(data)),
    getCandidatesInit: () => dispatch(RecruiterActions.getCandidatesInit()),
})

export default connect(mapStateToProps,mapDispatchToProps)(JobCard);
