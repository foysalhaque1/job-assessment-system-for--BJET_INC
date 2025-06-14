export  const attemptedPromise = (email,accessToken)=>{
  return  fetch(`https://job-assessment-project-server-side.vercel.app/attemptedAssignment?submittedEmail=${email}`,{
    headers:{
      authorization:`Bearer ${accessToken}`
    }
  }).then(res=>res.json())
}