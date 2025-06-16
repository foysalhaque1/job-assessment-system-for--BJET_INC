import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/Authcontext';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const navigate = useNavigate();
    const { user } = use(AuthContext)
    console.log(user)
    const data = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const [numberError,setNumberError] = useState('');
    const [descriptionError,setDescriptionError] = useState('')
    console.log(data);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const marks = form.marks.value;
        const description = form.description.value;
        if(isNaN(marks)){
            return setNumberError('Enter number')
        }else{
            setNumberError('')
        };
        if(description.length<20 || description>30){
           return setDescriptionError('enter txt from 20 to 30 characters')
        }else{
            setDescriptionError('')
        }
        const formData = new FormData(form);
        const {email,...rest} = Object.fromEntries(formData.entries());
        const formInfo = {
            email,
            ...rest
        }
        fetch(`https://job-assessment-project-server2.vercel.app/update/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formInfo )
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount) {
                return Swal.fire({
                    title: "Assignment is updated successfully",
                    icon: "success",
                    draggable: true
                });
            }
        }).catch(error=>{
            console.log(error)
        }).then(()=>{
            navigate('/assignments')
        })
    }
    return (
        <div>
            <div className='p-12' >
                <div  >
                    <h1 className="text-6xl p-8 text-center">Update Assignment</h1>

                </div>
                <form onSubmit={handleSubmit} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Title</label>
                            <input defaultValue={data.Title} type="text" name='Title' className="input" placeholder="Enter Title" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Thumbnails</label>
                            <input defaultValue={data.thumbnails} type="text" name='thumbnails' className="input" placeholder="Enter thumbnails" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Level</label>
                            <select name='level' defaultValue={data.level} className="select">
                                <option disabled={true}>Pick a color</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Difficult</option>
                            </select>



                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Marks</label>
                            <input typeof='number' defaultValue={data.marks} type="text" name='marks' className="input" placeholder="Enter Number" />
                            {
                                numberError && <p className='text-red-600 font-bold'>{numberError}</p>
                            }


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Description</label>
                            <textarea defaultValue={data.description} name='description' className="textarea" placeholder="Description"></textarea>
                            {
                                descriptionError && <p className='text-red-500 font-bold'>{descriptionError}</p>
                            }


                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Email</label>
                            <input type="email" defaultValue={data.email} readOnly name='email' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Name</label>
                            <input type="text" defaultValue={data.name} readOnly name='name' className="input font-bold text-black" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Date</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />


                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">


                        <label className="label">photo</label>
                        <input defaultValue={data.photo} type="text" name='photo' className="input w-full " placeholder="photo url" />


                    </fieldset>
                    <input type="submit" value="Update" className='w-full btn ' />
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;
