import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { getShoppingCart } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';



const AppliedJobs = () => {
    const datas = useLoaderData()

    const [data, setData] = useState([])
    useEffect(() => {
        const storedData = getShoppingCart()
        const savedData = []
        for (const id in storedData) {
            const addedData = datas.find(dt => dt.id == id)
            savedData.push(addedData);
        }
        setData(savedData)
    }, [])


    return (
        <div>
            {
                data.map(singleData => <ShowAppliedJobs
                    key={singleData.id}
                    singleData={singleData}
                ></ShowAppliedJobs>)
            }
        </div>
    );
};

export default AppliedJobs;