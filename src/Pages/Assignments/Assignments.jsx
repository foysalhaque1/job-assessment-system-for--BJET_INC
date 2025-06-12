import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Assignments = () => {
    const  data = useLoaderData();
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
                            <th className='text-blue-500' >Thumbnail</th>
                            <th className='text-blue-500' >Title</th>
                            <th className='text-blue-500'>Marks</th>
                            <th className='text-blue-500'>Difficulty</th>
                            {/* <th className='text-blue-500'>Level</th> */}
                            {/* <div className='flex gap-2.5 mt-2.5'>
                                <div>
                                    <input onClick={handleEasy} type="radio" name="topping" id="Easy" />
                                    <label htmlFor='Easy'>Easy</label>
                                </div>
                                <div>
                                    <input onClick={handleMedium} type="radio" name="topping" id="medium" />
                                    <label htmlFor='Easy'>Medium</label>
                                </div>
                                <div>
                                    <input onClick={handleDifficult} type="radio" name="topping" id="difficult" />
                                    <label htmlFor='Easy'>Difficult</label>
                                </div>
                            </div> */}

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

export default Assignments;