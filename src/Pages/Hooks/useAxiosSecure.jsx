import React, { use } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/Authcontext';
const axiosInstance = axios.create({
    baseURL:'https://job-assessment-project-server2.vercel.app',
    
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

// import React, {  useContext, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../../Provider/Authcontext';
// const axiosInstance = axios.create({
//     baseURL:'http://localhost:3000',
//     timeout:15000
// })
// const useAxiosSecure = () => {
//   const { user, logOut, loading } = useContext(AuthContext);
// console.log(user)
//   useEffect(() => {
//     if (!loading && user?.accessToken) {
//       // Add request interceptor
//       const requestInterceptor = axiosInstance.interceptors.request.use(
//         (config) => {
//           config.headers.Authorization = `Bearer ${user.accessToken}`;
//           return config;
//         }
//       );

//       // Add response interceptor
//       const responseInterceptor = axiosInstance.interceptors.response.use(
//         (res) => res,
//         (err) => {
//           if (err?.response?.status === 401 || err?.response?.status === 403) {
//             logOut()
//               .then(() => {
//                 console.log("Logged out due to token issue.");
//               })
//               .catch(console.error);
//           }
//           return Promise.reject(err);
//         }
//       );

//       // Cleanup to prevent multiple interceptors on re-renders
//       return () => {
//         axiosInstance.interceptors.request.eject(requestInterceptor);
//         axiosInstance.interceptors.response.eject(responseInterceptor);
//       };
//     }
//   }, [user, loading]);

//   return axiosInstance;
// };



// export default useAxiosSecure;