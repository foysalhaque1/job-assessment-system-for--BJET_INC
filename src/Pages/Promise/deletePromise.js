export const deletePromise = (email) =>{
  return  fetch(`https://job-assessment-project-server2.vercel.app/deleteAssignments?email=${email}`)
}