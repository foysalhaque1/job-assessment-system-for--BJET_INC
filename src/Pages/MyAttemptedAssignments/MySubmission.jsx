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
                                <td>
                                    <div className="flex items-center  gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.thumbnails} alt="Avatar Tailwind CSS Component" />
                                                   
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                {/* <td>
                                    {user.thumbnails}
                                </td> */}
                                <td>{user.Title}</td>
                                <td>{user.marks}</td>
                                <td>{user.level}</td>
                                <th className='space-x-3'>
                                    <Link to={`/assignments/${user._id}`} ><button className="btn  btn-xs">See More</button></Link>
                                    <Link to={`/assignments/${user._id}`} ><button className="btn  btn-xs">Update</button></Link>
                                    <Link to={`/assignments/${user._id}`} ><button className="btn  btn-xs">Delete</button></Link>


                                </th>
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