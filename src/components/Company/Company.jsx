import React from 'react';
import './Company.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Company = ({ company }) => {
    // console.log(company);
    const { companyName, name, id, companyLogo, companyLocation, salaryRange } = company
    return (
        <div className='company-info'>
            <img src={companyLogo} alt="" />
            <h2>{name}</h2>
            <h4>{companyName}</h4>
            <button className='btn-remote'>Remote</button>
            <button className='btn-fulltime'>Full Time</button>
            <div className='company-location-salary'>
                <p><FontAwesomeIcon icon={faLocationDot} />  {companyLocation}</p>
                <p className='company-salary'><FontAwesomeIcon icon={faCircleDollarToSlot} />  {salaryRange}</p>
            </div>
            <Link to={`/detail/${id}`}><button className='btn-view-details'>View Details</button></Link>
        </div>
    );
};

export default Company;