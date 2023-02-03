import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Components/Contact";
import Home from "../Components/Home";

import StudentAdd from "../Components/Student-add";
import StudentEdit from "../Components/Student-edit";
import StudentDetails from "../Components/StudentDetails";

const Router=() =>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact-us" element={<Contact />}></Route>
                <Route path="/student-details" element={<StudentDetails/>}></Route>
                <Route path="/studentdetails/add/:id" element={<StudentAdd />}></Route>
                <Route path="/student-details/edit/:id" element={<StudentEdit />}></Route>
             
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router