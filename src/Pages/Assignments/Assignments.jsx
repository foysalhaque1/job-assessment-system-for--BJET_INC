import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Authcontext';
// import { deletePromise } from '../Promise/deletePromise';


const Assignments = () => {
    const [query, setQuery] = useState('');

    const { user } = use(AuthContext)
    const info = useLoaderData();
    const [data, setData] = useState(info);
     const handleSearch = (e) => {
       const value = e.target.value;
       setQuery(value);
       const filterData = info.filter(data=>data.Title.toLowerCase().includes(value.toLowerCase()));
       setData(filterData)
    }

    const handleEasy = () => {

        fetch('https://job-assessment-project-server2.vercel.app/assignmentLevel/Easy').then(res => res.json())
            .then(data => setData(data));
    }
    const handleMedium = () => {

        fetch('https://job-assessment-project-server2.vercel.app/assignmentLevel/Medium').then(res => res.json())
            .then(data => setData(data));
    }
    const handleDifficult = () => {

        fetch('https://job-assessment-project-server2.vercel.app/assignmentLevel/Difficult').then(res => res.json())
            .then(data => setData(data));
    }
   
 


    console.log(info);
    const handleDelete = (id) => {
        const profile = {
            email: user.email
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-assessment-project-server2.vercel.app/deleteAssignments/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(profile)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
                            return Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "You can't delete",

                            });
                        }
                        const remainingAssignments = info.filter(dat => dat._id != id);
                        setData(remainingAssignments);

                    })
            }
        });
    }
    return (
        <div>

            <div className="overflow-x-auto mx-auto">
                <div className='flex gap-2.5 mx-auto justify-center my-3  '>
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
                </div>
                <div className='flex flex-col'>
                    <label>Search</label>
                    <input  placeholder='search here by title' value={query} className='border-2 space-x-2 p-2' type="text" name="search" onChange={handleSearch} />
                </div>
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
                            <th className='text-blue-500'>Created By</th>

                            <th>


                            </th>

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
                                <td>{user.email}</td>
                                <th className='space-x-3'>
                                    <Link to={`/assignments/${user._id}`} ><button className="btn  btn-xs">See More</button></Link>
                                    <Link to={`/updateAssignment/${user._id}`} ><button className="btn  btn-xs">Update</button></Link>
                                    <button onClick={() => handleDelete(user._id)} className="btn  btn-xs">Delete</button>


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