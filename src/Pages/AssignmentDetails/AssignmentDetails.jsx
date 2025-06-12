import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AssignmentDetails = () => {
    const data = useLoaderData();
    console.log(data._id)
    return (
        <div>
            <div className="hero bg-amber-100 min-h-screen">


                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={data.photo}
                        className="w-full rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold w-full">Deatils of Assignment</h1>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Title:  {data.Title}</h2>
                            <p>Level: {data.level}</p>
                            <p>Description: {data.description}</p>
                            <p>Marks: {data.marks}</p>
                          
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <Link to={`/takeAssignment/${data._id}`} className='btn btn-secondary'>Take Assignment</Link>
                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;