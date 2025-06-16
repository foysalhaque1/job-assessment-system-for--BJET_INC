import React, { use } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Provider/Authcontext';
import Swal from 'sweetalert2';

const GiveMark = () => {
    const data = useLoaderData();
    console.log(data);
    const {id }= useParams();
    console.log(id)
    const navigate = useNavigate()
  
    const { user } = use(AuthContext)
    console.log(user);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const docLink = form.docLink.value;
        const note = form.note.value;
        const submittedEmail = form.submittedEmail.value;
        const achieveingMarks = form.achieveingMarks.value;
        const feedback = form.feedback.value;
        if (!submittedEmail || !feedback) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Fill up the marks and feedback",

            });
            return
        }
        const updateProfile = {
            doclink: docLink,
            note: note,
            submittedEmail: submittedEmail,
            achieveingMarks: achieveingMarks,
            feedback: feedback,
            assignmentId:data.assignmentId,
            examinner:user.email
        }
        console.log(updateProfile);
        fetch('https://job-assessment-project-server2.vercel.app/giveMarks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)

        }).then(res => res.json()).then(data => {
            console.log(data);
            Swal.fire({
                title: "Your Assessment is submitted successfully",
                icon: "success",
                draggable: true
            }).then(()=>{
                navigate('/pendingAssignments')
            });

        }).catch(error => {
            console.log(error)
        })

    }

    return (
        <div>
            give marks
            <div className='p-12' >
                <div  >
                    <h1 className="text-6xl p-8 text-center">Assignment Sheet</h1>

                </div>
                <form onSubmit={handleSubmit}  >
                    <div className='flex flex-col gap-6' >

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Google Doc Link</label>
                            <input defaultValue={data.docLink} type="url" name='docLink' className="input w-full" placeholder="Enter Google doc link" />
                            <a className='underline' href={data.docLink} target='_blank'>View Document</a>


                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Note</label>
                            <textarea defaultValue={data.note} name='note' className="textarea w-full" placeholder="Note"></textarea>


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Submitted Email</label>
                            <input readOnly defaultValue={data.submittedEmail} type="text" name='submittedEmail' className="input font-bold text-black" placeholder="Enter marks" />


                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Achieving Marks</label>
                            <input disabled={data.submittedEmail === user?.email} type="text" name='achieveingMarks' className="input font-bold text-black" placeholder="Enter marks" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Feedback</label>
                            <textarea disabled={data.submittedEmail === user?.email} name='feedback' className="textarea w-full" placeholder="Feedback"></textarea>


                        </fieldset>



                    </div>

                    <input disabled={data.submittedEmail === user?.email} type="submit" value="Submit" className='w-full btn space-y-2 ' />
                </form>
            </div>
        </div>
    );
};

export default GiveMark;