import React, { Suspense, use } from 'react';
import MySubmission from './MySubmission';
import { attemptedPromise } from '../Promise/attemptedAssignment';
import { AuthContext } from '../../Provider/Authcontext';
import Loading from '../Loading/Loading';



const MyAttemptedAssignments = () => {
    // const data = use(attemptedPromise);
    // console.log(data)
    const { user } = use(AuthContext)
    console.log(user)

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>

                <MySubmission attemptedPromise={attemptedPromise(user?.email)} ></MySubmission>
            </Suspense>
        </div>
    );
};

export default MyAttemptedAssignments;