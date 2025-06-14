import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAttemptedApi = () => {
    const axiosSecure = useAxiosSecure();
    const attemptedPromise = email =>{
        return axiosSecure.get(`/attemptedAssignment?submittedEmail=${email}`).then(res=>res.data)
    }
    return {
        attemptedPromise
    };
};

export default useAttemptedApi;