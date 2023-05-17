import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import img from '../../../public/photograpar-img-without-bg.png'
import HeaderFirst from '../HeaderFirst/HeaderFirst';
import Company from '../Company/Company';

const Home = () => {
    const [headerFirst, setheaderFirst] = useState([])
    useEffect(() => {
        fetch('header-first.json')
            .then(res => res.json())
            .then(data => setheaderFirst(data))
    }, [])

    const [companyData, setCompanyData] = useState([])
    useEffect(() => {
        fetch('companyData.json')
            .then(res => res.json())
            .then(data => setCompanyData(data))
    }, []);

    return (
        <div>
            {/* second header part start here */}
            <div className='second-header'>
                <div className='second-header-first'>
                    <h1>Adventure Travel <span>Photographer</span></h1>
                    <p>As an Adventure Travel Photographer, your job is to travel to some of the most beautiful and remote locations in the world to capture stunning images that inspire others to explore the world</p>
                    <button className='btn-get-start'>Get Started</button>
                </div>
                <div>
                    <img className='header-img' src={img} alt="" />
                </div>
            </div>
            {/* second header part End here */}

            {/* Home first body part start here */}
            <div className='home-body-part-header'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='header-first-flex'>
                {
                    headerFirst.map(first => <HeaderFirst
                        key={first.id}
                        first={first}
                    ></HeaderFirst>)
                }
            </div>
            {/* Home first body part start here */}

            {/* {/ Home Second Body Part Start /} */}

            <div className='home-second-body-part'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='company-map'>
                {
                    companyData.map(company => <Company
                        key={company.id}
                        company={company}
                    ></Company>)
                }
            </div>
            <div className='all-jobs-button'>
                <button className='btn-all-jobs'>See All Jobs</button>
            </div>

            {/* {/ Home Second Body Part End /} */}
        </div>
    );
};

export default Home;