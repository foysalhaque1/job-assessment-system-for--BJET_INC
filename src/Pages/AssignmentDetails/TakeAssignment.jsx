import React, { use } from 'react';
import { AuthContext } from '../../Provider/Authcontext';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';

const TakeAssignment = () => {
    const { user } = use(AuthContext);
    const { id } = useParams();
    const assignmentId = id;


    const formSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // const email = form.email.value;
        // console.log(email)
        const formData = new FormData(form);
        const { submittedEmail,status, ...rest } = Object.fromEntries(formData.entries());
        const userProfile = {
            assignmentId,
            submittedEmail,
            status,
            ...rest
            
        }
        console.log(userProfile);
        fetch('https://job-assessment-project-server2.vercel.app/submittedAssignment', {
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
                    title: "Your Assignment is Submitted Successfully",
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
                    <h1 className="text-6xl p-8 text-center">Submit Assignment</h1>

                </div>
                <form onSubmit={formSubmit}  >
                    <div className='flex flex-col gap-6' >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Title</label>
                            <input type="text" name='Title' className="input w-full" placeholder="Enter Title" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Google Doc Link</label>
                            <input type="url" name='docLink' className="input w-full" placeholder="Enter Google doc link" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Status</label>
                            <select name='status' defaultValue="Pending" className="select w-full">
                                <option disabled={true}>Pick a color</option>
                                <option>Pending</option>
                                <option>Completed</option>

                            </select>



                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Note</label>
                            <textarea name='note' className="textarea w-full" placeholder="Note"></textarea>


                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Submitted Email</label>
                            <input type="email" readOnly value={user?.email} name='submittedEmail' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>


                    </div>

                    <input type="submit" value="Submit" className='w-full btn space-y-2 ' />
                </form>
            </div>
        </div>
    );
};

export default TakeAssignment;