export  const attemptedPromise = (email)=>{
  return  fetch(`http://localhost:3000/attemptedAssignment?submittedEmail=${email}`).then(res=>res.json())
}