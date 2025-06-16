import React, { use } from 'react';
import { AuthContext } from '../../Provider/Authcontext';
import Swal from 'sweetalert2';
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateAssignment = () => {
    const { user } = use(AuthContext);
     const [startDate, setStartDate] = useState(new Date());
     const [errorNumber,setErrorNumber] = useState('');
     const [errorDescription,setErrorDescription] = useState('')
    console.log(user)
    const formSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const marks = form.marks.value;
        if(isNaN(marks)){
           return setErrorNumber('Enter number')
        }else{
            setErrorNumber('')
        };
        const description = form.description.value;
        if(description.length < 20 ){
          return  setErrorDescription('Enter 20 to 30 characters')
        }else{
            setErrorDescription('')
        }
        
        // const email = form.email.value;
        // console.log(email)
        const formData = new FormData(form);
        const { email, ...rest } = Object.fromEntries(formData.entries());
        const userProfile = {
            email,
            ...rest
        }
        console.log(userProfile);
        fetch('https://job-assessment-project-server2.vercel.app/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Assignment is Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='p-12' >
                <div  >
                    <h1 className="text-6xl p-8 text-center">Create Assignment</h1>

                </div>
                <form onSubmit={formSubmit}  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Title</label>
                            <input type="text" name='Title' className="input" placeholder="Enter Title" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Thumbnails</label>
                            <input type="text" name='thumbnails' className="input" placeholder="Enter thumbnails" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Level</label>
                            <select name='level' defaultValue="Pick a level" className="select">
                                <option disabled={true}>Pick a color</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Difficult</option>
                            </select>



                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Marks</label>
                            <input type="number" name='marks' className="input" placeholder="Enter Marks" />
                            {
                                errorNumber && <p className='text-red-600 font-bold'>{errorNumber}</p>
                            }


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Description</label>
                            <textarea name='description' className="textarea" placeholder="Description"></textarea>
                            {
                                errorDescription && <p className='text-red-600 font-bold' >{errorDescription}</p>
                            }


                        </fieldset>
                       
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Email</label>
                            <input type="email" value={user && user.email} readOnly name='email' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Name</label>
                            <input type="text" value={user && user.displayName} readOnly name='name' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Date</label>
                           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />


                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">


                        <label className="label">photo</label>
                        <input type="text" name='photo' className="input w-full " placeholder="photo url" />


                    </fieldset>
                    <input type="submit" value="Submit" className='w-full btn ' />
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;