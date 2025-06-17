import React from 'react';

const FeatureSection = () => {
    return (
       <div className='mt-20 text-center mb-16 bg-amber-100 p-8 ' >

            <h2 className='text-5xl font-bold ' >Feature of this application</h2>
            <p className='mt-10 text-2xl mb-10 font-bold text-black'> This typically involves a user interface where instructors can input details like title, instructions, due date, and points, and optionally attach files, rubrics, or other resources. Students should then be able to access and submit their work through a similar interface</p>
        
            <div className='grid grid-cols-1'>
               
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 my-14'  >
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Assignment List</h2>
                        <p className='font-bold text-black'>a feature to display a list of assignments is commonly included <br /> in assignment websites. This list typically shows upcoming, past due, and completed assignments, often with details like deadlines and submission status. It helps users stay organized and manage their workload effectively. </p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Create Assignment</h2>
                        <p className='font-bold text-black'>This functionality is typically found within the instructor or teacher's interface, allowing them to define assignment details, instructions, due dates, and point values.</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>My Attempted Assignment</h2>
                        <p className='font-bold text-black'>  Include a "My Attempted Assignments" feature. This feature typically allows students to view, manage, and track their assigned tasks within the platform.</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Assignment Details Page</h2>
                        <p className='font-bold text-black'>  This feature typically provides students with comprehensive information about each assignment, including instructions, due dates, points possible, and any relevant resources. .</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Give Mark Page</h2>
                        <p className='font-bold text-black'>  This feature typically provides other users can observe the assignment and can provide feedback,also can give marks .</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Pending Assignment Page</h2>
                        <p className='font-bold text-black'>  This feature typically provides the assignments which marks not included</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;