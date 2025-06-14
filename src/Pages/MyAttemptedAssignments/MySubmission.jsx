import React, { use } from 'react';

const MySubmission = ({attemptedPromise}) => {
    const data = use(attemptedPromise);
    console.log(data)
    return (
         <div>
            <div className="overflow-x-auto mx-auto">
                <table className="table mx-auto">
                    {/* head */}
                    <thead className='mx-auto'>
                        <tr>
                            <th className='text-blue-500'>
                                No
                            </th>
                            <th className='text-blue-500' >Title</th>
                            <th className='text-blue-500' >Assignment Total Marks</th>
                            <th className='text-blue-500'>Obtained Marks</th>
                            <th className='text-blue-500'>Feedback</th>
                         

                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            data.map((user, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                               
                         
                                <td>{user?.Title}</td>
                                <td>{user?.assignmentTotalMarks}</td>
                                <td>{user.achieveingMarks? user.achieveingMarks : 'Pending'}</td>
                                <td>{user.feedback? user.feedback : 'Pending'}</td>
                                
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MySubmission;