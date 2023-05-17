import React from 'react';
import './ShowAppliedJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ShowAppliedJobs = ({ singleData }) => {
    console.log(singleData)
    const { companyName, name, id, companyLogo, companyLocation, salaryRange } = singleData
    return (
        <div className='detail-container'>
            <div className='details-one'>
                <img src={companyLogo} alt="" />
                <div className='details-child'>
                    <h3>{name}</h3>
                    <h4>{companyName}</h4>
                    <button className='btn-remote'>Remote</button>
                    <button className='btn-fulltime'>Full Time</button>
                    <div className='company-location-salary'>
                        <p><FontAwesomeIcon icon={faLocationDot} />  {companyLocation}</p>
                        <p className='company-salary'><FontAwesomeIcon icon={faCircleDollarToSlot} />  {salaryRange}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/detail/${id}`}><button className='btn-view-details'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ShowAppliedJobs;