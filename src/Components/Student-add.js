import React from 'react'
import { useContext } from 'react'
import { useParams , Link } from 'react-router-dom'
import { useState} from 'react'
import { data } from './Student'

const StudentAdd=() => {

  const [details , setdetails] = useContext(data);
  const {id} = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [batch, setBatch] = useState('')

  const submitbutton=()=>{
    setdetails([...details , 
    {
      id : id,
      Name :name,
      Age : age,
      Btach : batch,
      Course : course
    },
  ])
  }

 return (
    <>
    <div className='main-container'>
      <ul className='navbar'>
        <li id='none'><Link to= "/">Home</Link></li>
        <li id='none'><Link to= "/contact-us">Contact</Link></li>
        <li id='none'><Link to= "/student-details">Student</Link></li>
      </ul>
    </div>
    
    <div className='label-box'>
    {/* <h1>hello </h1> */}
    <div className='sub-label'>
      <label>Name : <nbsp/><nbsp/>   </label>
      <input type='text' value={name} onChange = {(e)=> setName(e.target.value)}></input>
      
      <label>Age : <nbsp/><nbsp/> </label>
      <input type='number' value={age} onChange = {(e)=> setAge(e.target.value)}></input>

      <label>Course : <nbsp/><nbsp/> </label>
      <input type='text' value={course} onChange = {(e)=> setCourse(e.target.value)}></input>

      <label>Batch : <nbsp/><nbsp/> </label>
      <input type='text' value={batch} onChange = {(e)=> setBatch(e.target.value)}></input>
    </div>

    <button id='red'><Link to ="/student-details">Cancel</Link></button>
    <button id='green' onClick={submitbutton}><Link to='/student-details'>Update</Link></button>
    
  </div>
    </>
  )
}

export default StudentAdd