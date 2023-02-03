import React from 'react'

import { createContext, useState } from 'react'


export const data = createContext();

const Student=(props)=> {

    const [details, setdetails] = useState([
    {
        Name : "Abhishek",
        Age : "32",
        Course : "MERN",
        Batch : "November",
        id : "1"
    },
    {
        Name : "Biden",
        Age : "44",
        Course : "MERN",
        Batch : "October",
        id : "2"
    },
    {
        Name : "Amit",
        Age : "21",
        Course : "MERN",
        Batch : "May",
        id : "3"
    },
    {
        Name : "Vikas",
        Age : "32",
        Course : "MERN",
        Batch : "November",
        id : "4"
    },
    {
        Name : "Prashant",
        Age : "22",
        Course : "MERN",
        Batch : "June",
        id : "5"
    },
    {
        Name : "Aayush",
        Age : "32",
        Course : "MERN",
        Batch : "November",
        id : "6"
    }
])
  return (
     <div>
        <data.Provider value={[details , setdetails]}>
            {props.children}
        </data.Provider>
    </div>
    
    
  )
}

export default Student