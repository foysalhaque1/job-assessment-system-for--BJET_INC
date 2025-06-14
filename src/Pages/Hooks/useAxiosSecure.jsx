import React, { use } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/Authcontext';
const axiosInstance = axios.create({
    baseURL:'https://job-assessment-project-server-side.vercel.app'
})
const useAxiosSecure = () => {
    const {user,logOut} = use(AuthContext)
    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    axiosInstance.interceptors.response.use(response =>{
        return response
    },error=>{
        if(error.status === 401 || error.status === 403){
           logOut().then(()=>{
            console.log('sign out user for 401')
           }).catch(error=>{
            console.log(error)
           }) 
        }
        console.log('error in interceptor',error)
        return Promise.reject(error)
    } )
    return axiosInstance
};

export default useAxiosSecure;