import { useState } from "react";
import { Student } from "../StudentData/Student";
import {addStudent} from '../actions/StudActions';
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

/* function AddStudent() {

    let [flag, setFlag] = useState(false);
    let dispatch = useDispatch();

    const [student, setStudent] = useState(new Student());
    const setDetails = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value}); // stuId:123, stuname:Sam,....
    }

    const test = (e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(addStudent(student));   
        setFlag(true);  
    }

//  <Navigate to="/students/showall"></Navigate>

   

    return(
        <div>
        {
            flag===false?
        
            <form onSubmt={test}>
            <div>
                <label> Enter Id : 
                    <input type="number" name="stuId" value={student.stuId} onChange={setDetails}></input>
                </label></div>

                <div>
                <label> Enter Name : 
                    <input type="text" name="stuName" value={student.stuName} onChange={setDetails}></input>
                </label></div>
<div>
                <label> Enter Your Department : 
                    <input type="text" name="stuDept" value={student.stuDept} onChange={setDetails}></input>
                </label>
</div>
<div>
                <label> Enter Year: 
                    <input type="text" name="stuYear" value={student.stuYear} onChange={setDetails}></input>
                </label></div>

                <div>
                    <input type="submit" value="ADD STUDENT"></input>
                    <input type="reset" value="RESET"></input>
                </div>
            </form>:<Navigate to="/students/showall"/>
        }
        </div>
    );
    
}

export default AddStudent;
 */



import './AddStudent.css';

import { Button } from '@material-ui/core';


export default function AddStudent(){
    let [flag, setFlag]=useState(false);
    const [student,setStudent] = useState(new Student());
    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(addStudent(student));
        setFlag(true);
    }
    return(
        <div>
            {flag===false?
            <form onSubmit={test} myclassName="myForm">
                <div className="myDiv">
                <label>Enter ID : 
                <input type="number" name="stuId" value={student.stuId} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Name : 
                <input type="text" name="stuName" value={student.stuName} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Department : 
                <input type="text" name="stuDept" value={student.stuDept} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Year : 
                <input type="text" name="stuYear" value={student.stuYear} onChange={setDetails}></input>
                </label></div>
               
                <Button color="primary" type="submit" variant="contained" >ADD</Button>

            </form>:<Navigate to="/students/showall"></Navigate>}
        </div>
    );
}

// <button type="submit">ADD</button>


















