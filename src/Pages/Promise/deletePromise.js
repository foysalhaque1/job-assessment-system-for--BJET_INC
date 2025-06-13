export const deletePromise = (email) =>{
  return  fetch(`http://localhost:3000/deleteAssignments?email=${email}`)
}