import React from 'react'
import { Link } from 'react-router-dom'
import { useContext} from 'react'
import {data} from './Student'

export default function StudentDetails() {

  const [rows] = useContext(data);

  const id = new Date().getTime().toString();

  return (
    <>
    <div className='main-container'>
      <ul className='navbar'>
        <li id='none'><Link to= "/">Home</Link></li>
        <li id='none'><Link to= "/contact-us">Contact</Link></li>
        <li id='none'><Link to= "/student-details">Student</Link></li>
      </ul>
    </div>

    <div className='head-items'>
        <h1>Student details</h1>
        <button className='button'><Link to={`/studentdetails/add/${id}`} className="new">
            Add new Students
        </Link>

        </button>
    </div>

    <div className='table'>
        <table>
            <tr>
                <th className='name'>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>

            <tbody>
                
              {rows.map((row)=>(
                <>
                <tr key={row.id}>
                    <td className='name'>{row.Name}</td>
                    <td>{row.Age}</td>
                    <td>{row.Course}</td>
                    <td>{row.Batch}</td>
                    <td className='edit'>
                      <Link to={`/student-details/edit/${row.id}`}>Edit</Link>
                    </td>

                </tr>
                </>
              ))}
            </tbody>
        </table>
    </div>
    
    </>
  )
}

