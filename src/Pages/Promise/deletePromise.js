export const deletePromise = (email) =>{
  return  fetch(`https://job-assessment-project-server-side.vercel.app/deleteAssignments?email=${email}`)
}