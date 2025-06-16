import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PendingAssignment = () => {
    const [pendingData,setPendingData] = useState([]);
    useEffect(()=>{
        fetch('https://job-assessment-project-server2.vercel.app/submittedAssignment').then(res=>res.json())
        .then(data=>{
            const pendingData = data.filter(pendData=>pendData.status=="Pending");
            setPendingData(pendingData)
        })
    },[])
    // const data = useLoaderData();
    
    console.log('pending data',  pendingData);
    // console.log(data)
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
                            <th className='text-blue-500' >Assignment marks</th>
                            
                            <th className='text-blue-500'>Status</th>
                            <th className='text-blue-500'>Examinee(submitted Email)</th>
                            

                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            pendingData.map((user, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                
                                {/* <td>
                                    {user.thumbnails}
                                </td> */}
                                <td>{user.Title}</td>
                                <td>{user.assinmentMarks}</td>
                                <td>{user.status}</td>
                                <td>{user.submittedEmail}</td>
                                <th className='space-x-3'>
                                    <Link to={`/giveMarks/${user._id}`} ><button className="btn  btn-primary">Give a mark</button></Link>
                                   


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

export default PendingAssignment;