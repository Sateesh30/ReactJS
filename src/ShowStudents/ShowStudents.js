import { useEffect, useState } from "react";
import { StudentOperation } from "../StudentData/StudentOperation";
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Showstudents.css';
import './SearchStudent';
import SearchStudent from "./SearchStudent";


function TableBody(){
    let studAr = useSelector((store)=>store.StudReducer);
   /*  let studImpl = new StudentOperation();
    let [studAr,setArray]=useState([]);
    useEffect(()=>{
        setArray(studImpl.getAllStudents());
    },[studAr]); */


    const [id, setId] = useState('');

  
    return(
        <>
            {
                studAr.map((student)=>{
                    return(
                        <>
                        <table className="myTable">
                        <tr key={student.stuId}><td>{student.stuId}</td>
                        <td>{student.stuName}</td>
                        <td>{student.stuDept}</td>
                        <td>{student.stuYear}</td>
                       <td><NavLink to={`/students/delete/${student.stuId}`} >DELETE</NavLink></td>
                       <td><NavLink to={`/students/update/${student.stuId}`}>UPDATE</NavLink></td>
                        </tr></table>
       
                        </>
                    );
                })
            }

            <div>
          
          <form >

         
          <div>
              <label>Enter ID : 
              <input type="number" name="stuId" onChange={event =>setId(event.target.value)} ></input>
              </label>
          </div>
             
          <NavLink to={`/students/search/${id}`}>SEARCH</NavLink>
          

          </form>
      </div> 
        </>
    );
}

export function ShowStudents(){
    return(
        <>
        <h1>Students</h1>
            <table className="myTable">
                <caption>Details</caption>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
        </>
    );
}