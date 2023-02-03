import React from 'react'
import { useContext } from 'react'
import { useParams , Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { data } from './Student'
import '../App.css'


function StudentEdit() {
  const [details , setdetails] = useContext(data);
  const {id} = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [batch, setBatch] = useState('')

  useEffect(() =>{
    details.forEach(element => {
      if(element.id === id) {
        setName(element.Name)
        setAge(element.Age)
        setCourse(element.Course)
        setBatch(element.Batch)
      }
      
    });
  }, [id , details])

  const submitbutton =() =>{

    setdetails((previous) =>
    previous.map((item) =>

    item.id === id ?
    {
     id : id,
     Name : name,
     Age : age,
     Course :course,
     Batch : batch
    }
     : item
    )
    );
  };



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

export default StudentEdit
