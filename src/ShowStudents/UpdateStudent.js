import { useState } from "react";
import { Student } from "../StudentData/Student";

import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './AddStudent.css';
import { Button } from "@material-ui/core";
import { StudentOperation } from "../StudentData/StudentOperation";
import { updateStudentAction } from "../actions/StudActions";
export default function UpdateStudent(){
    let [flag, setFlag]=useState(false);
    let {id}=useParams();
    
let arr = useSelector((state)=>state.StudReducer);
let s= arr.find((ele)=>ele.stuId==id);
console.log(s);
const [student,setStudent] = useState(new Student(s.stuId,s.stuName,s.stuDept,s.stuYear));
const setDetails = (e) =>{
    setStudent({...student,[e.target.name]:e.target.value});
}
    let dispatch=useDispatch();
    const test=(e)=>{
        e.preventDefault();
        console.log(student);
        dispatch(updateStudentAction(student));
        setFlag(true);
    }
    return(
        <div className="formDiv">
            {flag===false?
            <form onSubmit={test}>
                <div>
                <label>Enter ID : <br/>
                <input type="number" name="stuId" value={student.stuId} onChange={setDetails} disabled></input>
                </label></div>
                <div><label>Enter Name : <br/>
                <input type="text" name="stuName" value={student.stuName} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Department : <br/>
                <input type="text" name="stuDept" value={student.stuDept} onChange={setDetails}></input>
                </label></div>
                <div><label>Enter Year : <br/>
                <input type="text" name="stuYear" value={student.stuYear} onChange={setDetails}></input>
                </label></div><br/>
               

                <Button color="primary" type="submit" variant="contained" >Update</Button>
               
                
                <Button color="primary" type="reset" variant="contained" >Reset</Button>
                
            </form>:<Navigate to="/students/showall"></Navigate>}
        </div>
    );
}


// <button style={{'margin':'10px'}} class="btn btn-success" type="submit"></button>
//<button class="btn btn-primary" type="reset">Clear</button>